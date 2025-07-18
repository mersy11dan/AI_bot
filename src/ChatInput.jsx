import React, { useState } from 'react';
import './ChatInput.css';
const ChatInput = () => {
  const [input, setInput] = useState('');
  const handleSend = () => {
    setInput('');
  };
  return (
    <div className="chat-input">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default ChatInput; 