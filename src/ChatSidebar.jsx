import React from 'react';
import './ChatSidebar.css';

function ChatSidebar({ theme, open, onClose, isMobile }) {
  return (
    <div className={`chat-sidebar${open ? ' open' : ''} ${theme === 'dark' ? ' dark' : ''}`}>
      <div className="chat-sidebar-header">
        <h2>Chat History</h2>
        {isMobile && open && onClose && (
          <button className="sidebar-close-btn" onClick={onClose} aria-label="Close sidebar">&times;</button>
        )}
      </div>
      <div className="chat-history-list">
        {/* Chat history items will go here */}
        <p className="chat-history-placeholder">No chat history yet.</p>
      </div>
    </div>
  );
}

export default ChatSidebar; 