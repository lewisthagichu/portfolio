import Transition from '@/components/Transition/Transition';
import Work from '@/components/Work/Work';
import Lenis from 'lenis';
import { useEffect } from 'react';

function WorkPage() {
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
    <Transition>
      <Work />;
    </Transition>
  );
}

export default WorkPage;
