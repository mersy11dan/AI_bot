import React from 'react';
import './ErrorBanner.css';
const ErrorBanner = ({ error, onRetry }) => (
  <div className="error-banner">
    <span>{error}</span>
    {onRetry && (
      <button className="error-retry-btn" onClick={onRetry}>
        Retry
      </button>
    )}
  </div>
);
export default ErrorBanner; 