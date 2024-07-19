'use client';
import styles from './section2.module.scss';
import { useRef } from 'react';
import ZoomParallax from '../ZoomParallax/ZoomParallax';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useHeaderContext from '@/hooks/useHeaderContext';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Section2({}) {
  const containerRef = useRef();
  const { setHeaderStyle } = useHeaderContext();

  // useGSAP(() => {
  //   ScrollTrigger.create({
  //     trigger: containerRef.current,
  //     start: 'center-=50 top',
  //     endTrigger: '#selectedWork',
  //     end: 'top top',
  //     onEnter: () => setHeaderStyle({ color: '#1C1D20' }),
  //     onLeave: () => setHeaderStyle({ color: '#E8E7CB' }),
  //     onEnterBack: () => setHeaderStyle({ color: '#1C1D20' }),
  //     onLeaveBack: () => setHeaderStyle({ color: '#E8E7CB' }),
  //     scrub: true,
  //   });
  // }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <ZoomParallax />
    </section>
  );
}

export default Section2;
