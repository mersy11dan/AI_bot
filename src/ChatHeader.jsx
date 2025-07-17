import React from 'react';
import lightLogo from './assets/light.png';
import darkLogo from './assets/darklogo.png';

const lampStyle = {
  fontSize: 28,
  cursor: 'pointer',
  marginLeft: 16,
  transition: 'filter 0.2s',
};

const ChatHeader = ({ theme, onToggleTheme }) => (
  <header className="chat-header" style={{ display: 'flex', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #ccc', justifyContent: 'space-between', background: theme === 'dark' ? '#222' : '#fff' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={theme === 'dark' ? darkLogo : lightLogo}
        alt="Logo"
        style={{ width: 40, height: 40, objectFit: 'contain' }}
      />
      <span style={{ fontWeight: 'bold', fontSize: '1.5rem', marginLeft: 8 }}>AI Bot</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {/* Lamp icon for theme toggle */}
      <span
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        style={lampStyle}
        onClick={onToggleTheme}
        role="button"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '💡' : '🪔'}
      </span>
      {/* User icon, settings placeholder */}
      <span style={{ width: 32, height: 32, background: '#eee', borderRadius: '50%' }} />
      <span style={{ width: 32, height: 32, background: '#eee', borderRadius: '50%' }} />
    </div>
  </header>
);

export default ChatHeader; 