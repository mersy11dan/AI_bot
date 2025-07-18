import React from 'react';
import './ChatApp.css';
import ChatHeader from './ChatHeader';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

const ChatApp = ({ theme, onToggleTheme }) => (
  <div className="chat-app">
    <ChatHeader theme={theme} onToggleTheme={onToggleTheme} />
    <ChatWindow />
    <ChatInput />
  </div>
);

export default ChatApp;
