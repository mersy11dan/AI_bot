import express from 'express';
import cors from 'cors';
import detect from 'detect-port';

const DEFAULT_PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

const histories = {};
const feedbacks = [];
const trainingData = [];

app.post('/message', (req, res) => {
  const { userId, message } = req.body;
  if (!userId || !message) {
    return res.status(400).json({ error: 'userId and message are required' });
  }
  const botReply = `Echo: ${message}`;
  if (!histories[userId]) histories[userId] = [];
  histories[userId].push({ sender: 'user', text: message });
  histories[userId].push({ sender: 'bot', text: botReply });
  res.json({ reply: botReply });
});

app.get('/history/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({ history: histories[userId] || [] });
});

app.post('/feedback', (req, res) => {
  const { userId, message, feedback } = req.body;
  if (!userId || !message || !['up', 'down'].includes(feedback)) {
    return res.status(400).json({ error: 'userId, message, and feedback (up/down) are required' });
  }
  feedbacks.push({ userId, message, feedback });
  res.json({ status: 'ok' });
});

app.post('/intent/train', (req, res) => {
  const { intent, examples } = req.body;
  if (!intent || !Array.isArray(examples)) {
    return res.status(400).json({ error: 'intent and examples[] are required' });
  }
  trainingData.push({ intent, examples });
  res.json({ status: 'training data added' });
});

detect(DEFAULT_PORT).then(port => {
  if (port === DEFAULT_PORT) {
    app.listen(port, () => {
      console.log(`Backend server running on http://localhost:${port}`);
    });
  } else {
    console.warn(`⚠️ Port ${DEFAULT_PORT} is in use. Switching to available port ${port}.`);
    app.listen(port, () => {
      console.log(`Backend server running on http://localhost:${port}`);
    });
  }
});
