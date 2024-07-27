export const expand = {
  initial: {
    top: 0,
    height: 0,
  },
  enter: (i) => ({
    // top: '0',
    height: '100%',
    transition: {
      duration: 0.5,
      delay: 0.07 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: '100%' },
  }),
  exit: (i) => ({
    top: '100%',
    transition: {
      duration: 0.5,
      delay: 0.07 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};
