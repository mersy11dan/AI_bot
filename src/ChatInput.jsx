import React, { useState } from 'react';

const ChatInput = () => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    // Placeholder: send message logic
    setInput('');
  };

  return (
    <div className="chat-input" style={{ display: 'flex', padding: '1rem', borderTop: '1px solid #ccc' }}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your message..."
        style={{ flex: 1, marginRight: 8, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
      />
      <button onClick={handleSend} style={{ padding: '8px 16px', borderRadius: 4, background: '#6c63ff', color: '#fff', border: 'none' }}>
        Send
      </button>
    </div>
  );
};

export default ChatInput; 