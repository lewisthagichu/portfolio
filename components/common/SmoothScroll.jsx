import { useEffect } from 'react';
import Lenis from 'lenis';

function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 0.5,
      touchMultiplier: 0.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
}

export default SmoothScroll;
