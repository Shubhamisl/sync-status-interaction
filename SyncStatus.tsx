import React, { useState, useEffect } from 'react';
import './SyncStatus.css';

export type SyncState = 'FAILED' | 'SYNCING';
export type SyncScale = 'compact' | 'medium' | 'original';

export interface SyncStatusProps {
  initialState?: SyncState;
  scale?: SyncScale;
  onRetry?: () => void;
  autoRevertDelayMs?: number;
}

export const SyncStatus: React.FC<SyncStatusProps> = ({
  initialState = 'FAILED',
  scale = 'medium',
  onRetry,
  autoRevertDelayMs = 2600,
}) => {
  const [status, setStatus] = useState<SyncState>(initialState);
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handleRetry = () => {
    if (status === 'SYNCING') return;
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
      setStatus('SYNCING');
      if (onRetry) onRetry();
    }, 140);
  };

  useEffect(() => {
    if (status === 'SYNCING' && autoRevertDelayMs > 0) {
      const timer = setTimeout(() => {
        setStatus('FAILED');
      }, autoRevertDelayMs);
      return () => clearTimeout(timer);
    }
  }, [status, autoRevertDelayMs]);

  const isSyncing = status === 'SYNCING';
  const scaleClass = scale === 'compact' ? 'scale-compact' : scale === 'original' ? 'scale-original' : '';

  return (
    <div className={`sync-status-wrapper ${scaleClass}`}>
      <div className={`sync-capsule ${isSyncing ? 'syncing' : ''}`}>
        <div className="sync-icon-slot">
          {/* Red Octagon Stop-Sign */}
          <div className="sync-octagon-icon">
            <svg className="sync-octagon-svg" viewBox="0 0 55 53" fill="none">
              <path
                d="M16 2H39L53 16V37L39 51H16L2 37V16L16 2Z"
                fill="#FD332D"
                stroke="#E62822"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M27.5 14V29"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <circle cx="27.5" cy="36.5" r="2.6" fill="#FFFFFF" />
            </svg>
          </div>

          {/* Dotted Chase Spinner */}
          <div className="sync-spinner-icon">
            <svg className="sync-spinner-svg" viewBox="0 0 45 45" fill="none">
              <circle cx="22.5" cy="6.5" r="3.3" fill="#000000" fillOpacity="1.00" />
              <circle cx="33.8" cy="11.2" r="3.3" fill="#000000" fillOpacity="0.87" />
              <circle cx="38.5" cy="22.5" r="3.3" fill="#000000" fillOpacity="0.75" />
              <circle cx="33.8" cy="33.8" r="3.3" fill="#000000" fillOpacity="0.62" />
              <circle cx="22.5" cy="38.5" r="3.3" fill="#000000" fillOpacity="0.50" />
              <circle cx="11.2" cy="33.8" r="3.3" fill="#000000" fillOpacity="0.37" />
              <circle cx="6.5" cy="22.5" r="3.3" fill="#000000" fillOpacity="0.25" />
              <circle cx="11.2" cy="11.2" r="3.3" fill="#000000" fillOpacity="0.12" />
            </svg>
          </div>
        </div>

        <div className="sync-text-slot">
          <span className="sync-status-text sync-text-failed">Sync Failed</span>
          <span className="sync-status-text sync-text-syncing">Syncing</span>
        </div>
      </div>

      <div className={`sync-button-slot ${isSyncing ? 'hidden' : ''}`}>
        <button
          className={`sync-retry-btn ${isPressed ? 'pressed' : ''}`}
          onClick={handleRetry}
          aria-label="Retry Sync"
        >
          <svg className="sync-retry-icon-svg" viewBox="0 0 24 24">
            <path d="M21 12a9 9 0 1 1-2.63-6.36L21 8" />
            <polyline points="21 3 21 8 16 8" />
          </svg>
        </button>
      </div>
    </div>
  );
};
