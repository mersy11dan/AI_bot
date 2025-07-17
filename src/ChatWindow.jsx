import React from 'react';

const ChatWindow = () => (
  <div className="chat-window" style={{ flex: 1, overflowY: 'auto', padding: '1rem', background: 'transparent' }}>
    {/* MessageBubbles will go here */}
    <div style={{ textAlign: 'center', color: '#888' }}>[Conversation will appear here]</div>
  </div>
);

export default ChatWindow; 