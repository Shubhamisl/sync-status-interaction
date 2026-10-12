import React, { useState, useEffect } from 'react';
import './SyncStatus.css';

export type SyncState = 'FAILED' | 'SYNCING';

export interface SyncStatusProps {
  initialState?: SyncState;
  onRetry?: () => void;
  autoRevertDelayMs?: number;
}

export const SyncStatus: React.FC<SyncStatusProps> = ({
  initialState = 'FAILED',
  onRetry,
  autoRevertDelayMs = 3200,
}) => {
  const [status, setStatus] = useState<SyncState>(initialState);

  const handleRetry = () => {
    if (status === 'SYNCING') return;
    setStatus('SYNCING');
    if (onRetry) onRetry();
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

  return (
    <div className="sync-status-wrapper">
      <div className={`sync-capsule ${isSyncing ? 'syncing' : ''}`}>
        <div className="sync-icon-slot">
          {/* Red Octagon */}
          <div className="sync-octagon-icon">
            <svg className="sync-octagon-svg" viewBox="0 0 40 40" fill="none">
              <path
                d="M12.5 3.5H27.5L36.5 12.5V27.5L27.5 36.5H12.5L3.5 27.5V12.5L12.5 3.5Z"
                fill="#FC3529"
                stroke="#E62A1F"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M20 12V22"
                stroke="#FFFFFF"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <circle cx="20" cy="28.5" r="2" fill="#FFFFFF" />
            </svg>
          </div>

          {/* Dotted Spinner */}
          <div className="sync-spinner-icon">
            <svg className="sync-spinner-svg" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="4" r="2.2" fill="#111111" fillOpacity="1.0" />
              <circle cx="24.48" cy="7.51" r="2.2" fill="#111111" fillOpacity="0.87" />
              <circle cx="28" cy="16" r="2.2" fill="#111111" fillOpacity="0.75" />
              <circle cx="24.48" cy="24.48" r="2.2" fill="#111111" fillOpacity="0.62" />
              <circle cx="16" cy="28" r="2.2" fill="#111111" fillOpacity="0.50" />
              <circle cx="7.51" cy="24.48" r="2.2" fill="#111111" fillOpacity="0.37" />
              <circle cx="4" cy="16" r="2.2" fill="#111111" fillOpacity="0.25" />
              <circle cx="7.51" cy="7.51" r="2.2" fill="#111111" fillOpacity="0.12" />
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
          className="sync-retry-btn"
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
