import Contact from '@/components/Contact/Contact';
import PageTransition from '@/components/PageTransition/PageTransition';
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
    <PageTransition>
      <Contact />;
    </PageTransition>
  );
}

export default ContactPage;
