import Head from 'next/head';
import Home from '@/components/Home/Home';
import PageTransition from '@/components/PageTransition/PageTransition';
import Lenis from 'lenis';
import { useEffect } from 'react';

export default function HomePage() {
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
    <>
      <Head>
        <title>Lewis Thagichu Full-stack Developer</title>
        <meta name="description" content="Developed by Lewis Thagichu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTransition>
        <Home />
      </PageTransition>
    </>
  );
}
