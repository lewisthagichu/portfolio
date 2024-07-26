export const expand = {
  initial: {
    top: '100%',
  },
  enter: (i) => ({
    top: '0',
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: '100%' },
  }),
  exit: (i) => ({
    top: '100%',
    transition: {
      duration: 0.7,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};
