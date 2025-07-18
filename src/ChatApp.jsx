import React, { useState, useEffect } from 'react';
import './ChatApp.css';
import ChatHeader from './ChatHeader';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import ChatSidebar from './ChatSidebar';

const MOBILE_WIDTH = 900;

const ChatApp = ({ theme, onToggleTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= MOBILE_WIDTH;
  const showSidebar = isMobile ? sidebarOpen : true;
  const showHamburger = isMobile && !sidebarOpen;

  return (
    <div className="chat-app-layout">
      <ChatSidebar
        theme={theme}
        open={showSidebar}
        onClose={isMobile ? () => setSidebarOpen(false) : undefined}
        isMobile={isMobile}
      />
      <div className="chat-app-main">
        <div className="chat-app-hamburger-container">
          {showHamburger && (
            <button
              className="chat-app-hamburger"
              aria-label="Open chat history sidebar"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          )}
        </div>
        <ChatHeader theme={theme} onToggleTheme={onToggleTheme} />
        <ChatWindow />
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatApp;
