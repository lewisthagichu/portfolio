export const animm = (variants, custom = null) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
    custom,
  };
};

export const expand = {
  initial: {
    bottom: 0,
  },
  enter: (i) => ({
    bottom: '100%',
    transition: {
      duration: 0.7,
      delay: 0.07 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: '0', bottom: '0' },
  }),
  exit: (i) => ({
    height: '100vh',
    transition: {
      duration: 0.8,
      delay: 0.07 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const opacity = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
};
