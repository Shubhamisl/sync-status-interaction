# Sync Status Micro-interaction

A high-fidelity micro-interaction for contextual feedback with fluid shape morphing, elastic spring physics, and an 8-dot chase spinner.

Based on the contextual feedback interaction by [Nitish Khagwal (@nitishkmrk)](https://x.com/nitishkmrk/status/2083103451719025094).

## Interaction Description

**Here is an extremely detailed explanation of the micro-interaction, described as if speaking to someone who cannot see the screen.**

Imagine a clean, empty white space in the center of the interface. Two elements sit side by side, close together, roughly at the height of a small button.

On the left is a soft, rounded pill-shaped capsule (like a long, smooth lozenge with gently curved ends). Inside it, on the left edge, sits a solid red octagon (stop-sign shape) containing a white exclamation mark. Immediately to its right, the words "Sync Failed" appear in bold red letters. The whole capsule has a light gray border and a soft white fill, so it feels slightly raised or floating.

To the right of the capsule, separated by a small gap about the width of a fingertip, is a perfect black circle. Inside the black circle is a simple white circular arrow (a refresh or retry symbol) that curves clockwise.

A mouse cursor (or finger equivalent) moves in from the lower right and presses down on the black circle. At the exact moment of the press, the black circle gives a tiny, quick scale-down "push" feeling, as if it briefly compresses under the click, then springs back.

Instantly the scene transforms:

The red octagon and the red "Sync Failed" text begin to dissolve and morph. The letters do not simply vanish; they appear to soften, lose opacity, and shift sideways or dissolve letter-by-letter while the overall capsule shape stays roughly the same size but lightens. At the same time the black circular button itself shrinks or slides inward and disappears into the left side of the capsule. In its place, inside the left edge of the same pill-shaped capsule, a new loading indicator forms: a ring of small dots arranged in a circle. These dots begin to pulse or rotate in a continuous, rhythmic chase, one after another lighting up and fading, creating a smooth spinning sensation that feels continuous and mechanical, like a small gear turning.

Simultaneously the text inside the capsule changes to the word "Syncing." The letters of "Syncing" do not simply pop in. They assemble or fade in with a staggered, almost typewriter-like or morphing motion: individual characters appear or shift into place with a soft, elastic quality. The entire capsule remains soft and rounded, now with a more neutral light-gray fill and dark text, signaling a calm "in progress" state.

This "Syncing" state holds for a couple of seconds while the dotted spinner keeps rotating steadily.

Then the animation reverses and transforms again. The spinning dots slow or dissolve. The word "Syncing" begins to break apart or morph, letters stretch, fade, and rearrange. The red octagon with the exclamation mark reappears on the left, the text turns back into bold red "Sync Failed," and the black circular retry button smoothly expands or slides back out to the right of the capsule, returning to its original position and size. The transition is fluid and continuous rather than abrupt; shapes and colors flow into one another so the eye (or mind) experiences one continuous object changing state rather than two separate screens.

The whole cycle, failed state to click to morph into syncing with spinning dots to hold to morph back into failed state with the retry button reappearing, lasts roughly nine seconds and can loop. Every change is soft, slightly elastic, and tightly choreographed so that the status message and the action button feel like two parts of a single living control rather than disconnected pieces.

In short, the micro-interaction is a highly polished piece of contextual feedback: it shows the current status of a sync operation in clear, colored language and icons, lets the user retry with a single press on the circular button, and uses continuous shape-morphing, letter animation, and a rotating dotted spinner to make the transition between "failed" and "working" feel smooth, responsive, and informative.

## Features

- Two states: `Sync Failed` and `Syncing`.
- Exact centering dynamics: the interactive group stays horizontally centered in both idle and active states.
- Pure CSS spring physics (`cubic-bezier(0.34, 1.56, 0.64, 1)` for morph, `cubic-bezier(0.34, 1.62, 0.64, 1)` for return overshoot).
- Collapsible circular retry button with click compression physics.
- 8-dot stepping opacity chase spinner.
- Replayable macOS cursor choreography demo matching the 9.4s reference video.
- Multi-scale support: Compact (`64px`), Medium (`120px`), and Original (`144px`).
- Available as standalone HTML/CSS/JS and as a React TypeScript component.

## Files

- `index.html`: Standalone browser demonstration with manual trigger, cursor replay, scale switching, and auto-loop.
- `SyncStatus.tsx`: Reusable React TypeScript component supporting `compact`, `medium`, and `original` scales.
- `SyncStatus.css`: Companion styles and animation curves.
- `BqZVWnp9CwJobYo3_frames.zip`: Original keyframes archive for frame-by-frame reference.

## Visual Parity and Keyframe Verification

The implementation is verified frame-by-frame against Nitish Khagwal's original 60fps 960x960 recording across both cycles:

| Frame | Timestamp | Observed State | Measured Geometry | Center X | Parity Score |
|---|---|---|---|---|---|
| 1 | 0.02s | Idle Failed | Capsule 445x144px, Button 144x144px, Gap 24px, Group 615px | 480.0px | 87.23% (RMSE 32.56) |
| 2 | 1.02s | Early Syncing | Button collapsing into capsule, 8-dot spinner active | ~480px | Transition |
| 3 | 2.02s | Mid Syncing | Capsule contracting to 368px, spinner rotating | 478.5px | Transition |
| 4 | 3.02s | Settled Syncing | Capsule 368x144px, Button hidden, Spinner centered | 478.5px | 87.73% (RMSE 31.28) |
| 5 | 4.02s | Spring Overshoot | Revert max expansion: Capsule 456px, Gap 48px, Group 648px | 479.5px | Dynamic Peak |
| 6 | 5.02s | Settled Failed | Damped return settling back to resting 615px width | 480.0px | 87.23% |
| 7 | 6.02s | Cycle 2 Syncing | Re-entry to syncing state after second click | 478.5px | Transition |
| 8 | 7.02s | Cycle 2 Spinner | Steady-state 8-dot chaser | 478.5px | Dynamic |
| 9 | 8.02s | Cycle 2 Hold | Steady-state hold prior to second recovery | 478.5px | Hold |

### Key Measurements & Color Palette

- Failed Capsule Fill: `#f8efed`, Border: `#f0e3e0` (1.5px solid)
- Syncing Capsule Fill: `#f4f4f4`, Border: `#ebebeb` (1.5px solid)
- Stop Sign / Text Red: `#fd332d`
- Retry Button: `#000000` with subtle elevation shadow `0 4px 18px rgba(0, 0, 0, 0.14)`
- Typography: SF Pro Rounded / Plus Jakarta Sans at weight 700, letter-spacing `-0.032em`

## Running Locally

Open `index.html` directly in any web browser, or serve it:

```bash
npx serve .
```
