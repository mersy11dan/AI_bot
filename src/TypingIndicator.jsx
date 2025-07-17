import React from 'react';

const TypingIndicator = () => (
  <div style={{ color: '#888', fontStyle: 'italic', margin: '8px 0' }}>
    Bot is typing<span className="typing-dots">...</span>
  </div>
);

export default TypingIndicator; 