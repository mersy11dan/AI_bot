import React from 'react';
const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 16 }}>
    <div className="spinner" style={{ width: 32, height: 32, border: '4px solid #ccc', borderTop: '4px solid #6c63ff', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
    <style>{`
      @keyframes spin {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
      }
    `}</style>
  </div>
);

export default LoadingSpinner; 