// Apple's default: critically damped (no overshoot), ~0.4s response.
export const spring = { type: "spring", bounce: 0, duration: 0.4 } as const;

// Snappier variant for small controls such as the segmented thumb.
export const springSnappy = { type: "spring", bounce: 0, duration: 0.3 } as const;
