import React from 'react';
import './ChatHeader.css';
import lightLogo from './assets/light.png';
import darkLogo from './assets/darklogo.png';

const ChatHeader = ({ theme, onToggleTheme }) => (
  <header className={`chat-header${theme === 'dark' ? ' dark' : ''}`}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={theme === 'dark' ? darkLogo : lightLogo}
        alt="Logo"
        className="logo"
      />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <span
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        className="lamp-toggle"
        onClick={onToggleTheme}
        role="button"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️' : '🌑'}
      </span>
      {/* User icon, settings placeholder */}
      <span style={{ width: 32, height: 32, background: '#eee', borderRadius: '50%' }} />
      <span style={{ width: 32, height: 32, background: '#eee', borderRadius: '50%' }} />
    </div>
  </header>
);

export default ChatHeader; 