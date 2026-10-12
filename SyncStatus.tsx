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
                d="M27.5 15V29"
                stroke="#FFFFFF"
                strokeWidth="4.4"
                strokeLinecap="round"
              />
              <circle cx="27.5" cy="37.5" r="2.8" fill="#FFFFFF" />
            </svg>
          </div>

          {/* Dotted Chase Spinner */}
          <div className="sync-spinner-icon">
            <svg className="sync-spinner-svg" viewBox="0 0 45 45" fill="none">
              <circle cx="22.5" cy="5.5" r="3.2" fill="#000000" fillOpacity="1.00" />
              <circle cx="34.5" cy="10.5" r="3.2" fill="#000000" fillOpacity="0.87" />
              <circle cx="39.5" cy="22.5" r="3.2" fill="#000000" fillOpacity="0.75" />
              <circle cx="34.5" cy="34.5" r="3.2" fill="#000000" fillOpacity="0.62" />
              <circle cx="22.5" cy="39.5" r="3.2" fill="#000000" fillOpacity="0.50" />
              <circle cx="10.5" cy="34.5" r="3.2" fill="#000000" fillOpacity="0.37" />
              <circle cx="5.5" cy="22.5" r="3.2" fill="#000000" fillOpacity="0.25" />
              <circle cx="10.5" cy="10.5" r="3.2" fill="#000000" fillOpacity="0.12" />
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
