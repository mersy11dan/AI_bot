import React from 'react';

const ErrorBanner = ({ error, onRetry }) => (
  <div style={{ background: '#ffdddd', color: '#a00', padding: '12px', borderRadius: 8, margin: '8px 0', textAlign: 'center' }}>
    <span>{error}</span>
    {onRetry && (
      <button onClick={onRetry} style={{ marginLeft: 16, padding: '4px 12px', borderRadius: 4, border: 'none', background: '#a00', color: '#fff' }}>
        Retry
      </button>
    )}
  </div>
);

export default ErrorBanner; 