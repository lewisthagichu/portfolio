'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

function SmoothScrolling({ children }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <>{children}</>;
}

export default SmoothScrolling;
