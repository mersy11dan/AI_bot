import React from 'react';

const bubbleStyles = {
  user: {
    alignSelf: 'flex-end',
    background: '#6c63ff',
    color: '#fff',
    borderRadius: '16px 16px 4px 16px',
    margin: '4px 0',
    padding: '10px 16px',
    maxWidth: '70%',
  },
  bot: {
    alignSelf: 'flex-start',
    background: '#ede8ee',
    color: '#222',
    borderRadius: '16px 16px 16px 4px',
    margin: '4px 0',
    padding: '10px 16px',
    maxWidth: '70%',
  },
  system: {
    alignSelf: 'center',
    background: 'transparent',
    color: '#888',
    fontStyle: 'italic',
    margin: '8px 0',
    padding: 0,
    maxWidth: '80%',
  },
};

const MessageBubble = ({ sender = 'bot', text }) => (
  <div style={{ display: 'flex', flexDirection: 'column', ...bubbleStyles[sender] }}>
    {text}
  </div>
);

export default MessageBubble; 