import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from '../Header/Header';

function Layout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 0.7,
      touchMultiplier: 0.7,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="main-wrap rel">
      {/* <Header /> */}
      {children}
    </div>
  );
}

export default Layout;
