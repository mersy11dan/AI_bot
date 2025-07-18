import React from 'react';
import './MessageBubble.css';
const MessageBubble = ({ sender = 'bot', text }) => (
<div className={`message-bubble ${sender}`}>
    {text}
</div>
);
export default MessageBubble; 