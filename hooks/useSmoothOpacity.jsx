import { useTransform, useSpring } from 'framer-motion';

const useSmoothOpacity = (scrollYProgress, progressRange, outputRange) => {
  const opacity = useTransform(scrollYProgress, progressRange, outputRange);
  return useSpring(opacity, { stiffness: 50, damping: 20 });
};

export default useSmoothOpacity;
