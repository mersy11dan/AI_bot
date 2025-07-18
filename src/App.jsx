import { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import ChatApp from './ChatApp';
function AppWrapper() {
  const [showSplash, setShowSplash] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  },[]);
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.style.background = theme === 'dark' ? '#222' : '#ede8ee';
    document.body.style.color = theme === 'dark' ? '#fff' : '#222';
  }, [theme]);
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  return showSplash
    ? <SplashScreen theme={theme} />
    : <ChatApp theme={theme} onToggleTheme={toggleTheme} />;
}
export default AppWrapper;