# Sync Status Micro-interaction

A micro-interaction for a sync status badge with fluid shape morphing, elastic physics, and a dotted chase spinner.

Based on keyframe breakdown of the failed-to-syncing state transition.

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
- Fluid morphing pill capsule with spring physics (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- Collapsible circular retry button.
- Dotted ring chase spinner.
- Available as standalone HTML/CSS/JS and as a React TypeScript component.

## Files

- `index.html`: Standalone browser demonstration with manual trigger and auto-loop simulation.
- `SyncStatus.tsx`: Reusable React component.
- `SyncStatus.css`: Companion styles and animation curves.
- `BqZVWnp9CwJobYo3_frames.zip`: Original keyframes archive for frame-by-frame reference.

## Running Locally

Open `index.html` directly in any web browser, or serve it:

```bash
npx serve .
```
