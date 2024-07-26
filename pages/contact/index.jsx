import Contact from '@/components/Contact/Contact';
import Transition from '@/components/Transition/Transition';
import Lenis from 'lenis';
import { useEffect } from 'react';

function ContactPage() {
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
      <Contact />;
    </Transition>
  );
}

export default ContactPage;
