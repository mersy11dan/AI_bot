import React, { useState } from 'react';
import './ChatHeader.css';
import lightLogo from './assets/light.png';
import darkLogo from './assets/darklogo.png';
import { FaUserCircle } from 'react-icons/fa';
import { FiSettings, FiEye, FiEyeOff } from 'react-icons/fi';

function PasswordInput({ value, onChange, placeholder, required, name }) {
  const [show, setShow] = useState(false);
  return (
    <div className="password-input-wrapper">
      <input
        type={show ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        name={name}
        autoComplete="off"
      />
      <span className="password-eye" onClick={() => setShow(s => !s)} tabIndex={0} role="button" aria-label={show ? 'Hide password' : 'Show password'}>
        {show ? <FiEyeOff /> : <FiEye />}
      </span>
    </div>
  );
}

function LoginForm({ onClose, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    onLogin({ name: username });
    onClose();
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Login</h3>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username or Email" required value={username} onChange={e => setUsername(e.target.value)} />
          <PasswordInput value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required name="login-password" />
          <button type="submit">Login</button>
        </form>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function SignupForm({ onClose, onProfilePicUpload, onSignup }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState('');
  const [showPasswordWarning, setShowPasswordWarning] = useState(false);

  const passwordRequirements =
    'Password must be at least 8 characters, include at least one letter, one number, and one special character.';

  function isPasswordValid(pw) {
    return (
      pw.length >= 8 &&
      /[A-Za-z]/.test(pw) &&
      /[0-9]/.test(pw) &&
      /[^A-Za-z0-9]/.test(pw)
    );
  }

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setProfilePic(ev.target.result);
        if (onProfilePicUpload) onProfilePicUpload(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isPasswordValid(password)) {
      setShowPasswordWarning(true);
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    setShowPasswordWarning(false);
    // Simulate signup
    onSignup({ name: username, profilePic });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Sign Up</h3>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required value={username} onChange={e => setUsername(e.target.value)} />
          <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
          <PasswordInput value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required name="signup-password" />
          <div className="password-requirements">{passwordRequirements}</div>
          <PasswordInput value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required name="signup-confirm-password" />
          <label className="profile-pic-label">
            <span>Profile Picture (optional):</span>
            <label className="custom-file-upload">
              Choose Photo
              <input type="file" accept="image/*" onChange={handleProfilePicChange} />
            </label>
          </label>
          {error && <div className="form-error">{error}</div>}
          <button type="submit">Sign Up</button>
        </form>
        <button className="modal-close" onClick={onClose}>Close</button>
        {showPasswordWarning && (
          <div className="modal-overlay" onClick={() => setShowPasswordWarning(false)}>
            <div className="modal password-warning-modal" onClick={e => e.stopPropagation()}>
              <h4>Password Requirements</h4>
              <p>{passwordRequirements}</p>
              <button className="modal-close" onClick={() => setShowPasswordWarning(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MyAccountModal({ user, onClose, onUpdate, onChangePassword }) {
  const [name, setName] = useState(user.name || '');
  const [profilePic, setProfilePic] = useState(user.profilePic || null);
  const [editMode, setEditMode] = useState(false);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setProfilePic(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onUpdate({ name, profilePic });
    setEditMode(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>My Account</h3>
        <div className="account-info-vertical">
          <div className="account-field">
            <label className="account-label">User Name</label>
            {editMode ? (
              <input type="text" value={name} onChange={e => setName(e.target.value)} className="account-name-input" />
            ) : (
              <div className="account-name">{name}</div>
            )}
          </div>
          <div className="account-field">
            <label className="account-label">Profile</label>
            <div className="account-pic-section">
              {profilePic ? (
                <img src={profilePic} alt="Profile" className="profile-pic-thumb" />
              ) : (
                <FaUserCircle size={48} />
              )}
              {editMode && (
                <label className="custom-file-upload" style={{marginTop:8}}>
                  Change Photo
                  <input type="file" accept="image/*" onChange={handleProfilePicChange} />
                </label>
              )}
            </div>
          </div>
        </div>
        <div className="account-actions">
          {editMode ? (
            <>
              <button onClick={handleSave}>Save</button>
              <button onClick={()=>setEditMode(false)}>Cancel</button>
            </>
          ) : (
            <button onClick={()=>setEditMode(true)}>Edit</button>
          )}
          <button onClick={onChangePassword}>Change Password</button>
        </div>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function ChangePasswordModal({ onClose, onChange }) {
  const [current, setCurrent] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const passwordRequirements = 'Password must be at least 8 characters (1 letter, 1 number, 1 special character)';
  function isPasswordValid(pw) {
    return (
      pw.length >= 8 &&
      /[A-Za-z]/.test(pw) &&
      /[0-9]/.test(pw) &&
      /[^A-Za-z0-9]/.test(pw)
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate current password check: always accept for demo
    if (!isPasswordValid(newPw)) {
      setShowWarning(true);
      return;
    }
    if (newPw !== confirm) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    setShowWarning(false);
    onChange();
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Change Password</h3>
        <form className="auth-form" onSubmit={handleSubmit}>
          <PasswordInput value={current} onChange={e => setCurrent(e.target.value)} placeholder="Current Password" required name="current-password" />
          <PasswordInput value={newPw} onChange={e => setNewPw(e.target.value)} placeholder="New Password" required name="new-password" />
          <div className="password-requirements">({passwordRequirements})</div>
          <PasswordInput value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Confirm New Password" required name="confirm-new-password" />
          {error && <div className="form-error">{error}</div>}
          <button type="submit">Change Password</button>
        </form>
        <button className="modal-close" onClick={onClose}>Close</button>
        {showWarning && (
          <div className="modal-overlay" onClick={() => setShowWarning(false)}>
            <div className="modal password-warning-modal" onClick={e => e.stopPropagation()}>
              <h4>Password Requirements</h4>
              <p>{passwordRequirements}</p>
              <button className="modal-close" onClick={() => setShowWarning(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function InfoModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Tech Adiss Info Bot</h3>
        <p>This bot is called <b>Tech Adiss Info Bot</b> and is used to give information about tech companies in Addis Abeba.</p>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

const ChatHeader = ({ theme, onToggleTheme }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState(null); // 'login' | 'signup' | null
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [user, setUser] = useState(null);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [changePwModalOpen, setChangePwModalOpen] = useState(false);

  const handleProfileClick = () => {
    setProfileMenuOpen(v => !v);
    setSettingsMenuOpen(false);
  };
  const handleSettingsClick = () => {
    setSettingsMenuOpen(v => !v);
    setProfileMenuOpen(false);
  };
  const handleMenuSelect = (type) => {
    setProfileMenuOpen(false);
    setAuthModal(type);
  };
  const closeModal = () => setAuthModal(null);
  const handleInfoClick = () => {
    setSettingsMenuOpen(false);
    setInfoModalOpen(true);
  };
  const closeInfoModal = () => setInfoModalOpen(false);
  const handleProfilePicUpload = (img) => setProfilePic(img);
  const handleLogin = (userObj) => {
    setUser({ ...userObj, profilePic });
    setProfilePic(userObj.profilePic || profilePic);
  };
  const handleSignup = (userObj) => {
    setUser(userObj);
    setProfilePic(userObj.profilePic || null);
  };
  const handleLogout = () => {
    setUser(null);
    setProfilePic(null);
    setProfileMenuOpen(false);
  };
  const handleAccountUpdate = (updates) => {
    setUser(u => ({ ...u, ...updates }));
    setProfilePic(updates.profilePic || profilePic);
  };
  const handleChangePassword = () => {
    setChangePwModalOpen(true);
  };
  const closeChangePwModal = () => setChangePwModalOpen(false);
  const handlePasswordChanged = () => {
    setChangePwModalOpen(false);
  };

  return (
    <header className={`chat-header${theme === 'dark' ? ' dark' : ''}`}>
      <div className="header-logo-container">
        <img
          src={theme === 'dark' ? darkLogo : lightLogo}
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="header-actions">
        <span
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="lamp-toggle"
          onClick={onToggleTheme}
          role="button"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌑'}
        </span>
        <span className="header-profile-icon" title="Profile" onClick={handleProfileClick} tabIndex={0} role="button">
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="profile-pic-thumb" />
          ) : (
            <FaUserCircle size={32} />
          )}
          {profileMenuOpen && (
            <div className="profile-menu" onClick={e => e.stopPropagation()}>
              {!user && <div className="profile-menu-item" onClick={() => handleMenuSelect('login')}>Login</div>}
              {!user && <div className="profile-menu-item" onClick={() => handleMenuSelect('signup')}>Signup</div>}
              {user && <div className="profile-menu-item" onClick={() => { setAccountModalOpen(true); setProfileMenuOpen(false); }}>My Account</div>}
              {user && <div className="profile-menu-item" onClick={handleLogout}>Logout</div>}
            </div>
          )}
        </span>
        <span className="header-settings-icon" title="Settings" onClick={handleSettingsClick} tabIndex={0} role="button">
          <FiSettings size={32} />
          {settingsMenuOpen && (
            <div className="settings-menu" onClick={e => e.stopPropagation()}>
              <div className="settings-menu-item" onClick={handleInfoClick}>Information</div>
            </div>
          )}
        </span>
      </div>
      {authModal === 'login' && <LoginForm onClose={closeModal} onLogin={handleLogin} />}
      {authModal === 'signup' && <SignupForm onClose={closeModal} onProfilePicUpload={handleProfilePicUpload} onSignup={handleSignup} />}
      {infoModalOpen && <InfoModal onClose={closeInfoModal} />}
      {accountModalOpen && user && <MyAccountModal user={user} onClose={() => setAccountModalOpen(false)} onUpdate={handleAccountUpdate} onChangePassword={handleChangePassword} />}
      {changePwModalOpen && <ChangePasswordModal onClose={closeChangePwModal} onChange={handlePasswordChanged} />}
    </header>
  );
};

export default ChatHeader; 