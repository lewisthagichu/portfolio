import { useState, useEffect } from 'react';

const useEnableAnimation = (breakpoint = 1024) => {
  const [enableAnimation, setEnableAnimation] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handleMediaChange = (e) => {
      setEnableAnimation(!e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    // Set initial value based on current screen size
    setEnableAnimation(!mediaQuery.matches);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [breakpoint]);

  return enableAnimation;
};

export default useEnableAnimation;
