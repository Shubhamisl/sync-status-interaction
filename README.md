# Sync Status Micro-interaction

A micro-interaction for a sync status badge with fluid shape morphing, elastic physics, and a dotted chase spinner.

Based on keyframe breakdown of the failed-to-syncing state transition.

## Features

- Two states: `Sync Failed` and `Syncing`.
- Fluid morphing pill capsule with spring physics (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- Collapsible circular retry button.
- Dotted ring chase spinner.
- Available as standalone HTML/CSS/JS and as a React TypeScript component.

## Files

- `index.html`: Standalone browser demonstration with manual trigger and auto-loop simulation.
- `SyncStatus.tsx`: Reusable React component.
- `SyncStatus.css`: Companion styles and animation curves.

## Running Locally

Open `index.html` directly in any web browser, or serve it:

```bash
npx serve .
```
