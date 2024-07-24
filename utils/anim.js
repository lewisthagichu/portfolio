const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
};

export const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: '100vh',
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};

export const translate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i) => ({
    y: '100%',
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};

export const fade = {
  initial: {
    filter: 'saturate(1)',
    opacity: 1,
  },
  open: {
    filter: 'saturate(0.3)',
    opacity: 0.6,
    transition: { ease: 'linear', duration: 0.7 },
  },
  closed: {
    filter: 'saturate(1)',
    opacity: 1,
    transition: { ease: 'linear', duration: 0.7 },
  },
};

export const background = {
  initial: {
    height: 0,
  },
  open: {
    height: '100vh',
    transition,
  },
  closed: {
    height: 0,
    transition,
  },
};

export const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
