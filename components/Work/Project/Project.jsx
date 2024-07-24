'use client';
import styles from './project.module.scss';
import { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { NeuehaasBody } from '@/public/fonts/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { scaleAnimation } from '@/utils/anim';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Project({ title, description, link }) {
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const [active, setActive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  useGSAP(() => {
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor?.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });
    let yMoveCursor = gsap.quickTo(cursor?.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel?.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel?.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    });

    // Event handler for mousemove
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      xMoveCursor(clientX);
      yMoveCursor(clientY);
      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    };

    // Event handler for mouseenter
    const handleMouseEnter = () => {
      container.current.addEventListener('mousemove', handleMouseMove);
    };

    // Event handler for mouseleave
    const handleMouseLeave = () => {
      container.current.removeEventListener('mousemove', handleMouseMove);
    };

    // Adding mouseenter and mouseleave event listeners to the container
    if (container.current) {
      container.current.addEventListener('mouseenter', handleMouseEnter);
      container.current.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup function
    return () => {
      if (container.current) {
        container.current.removeEventListener('mouseenter', handleMouseEnter);
        container.current.removeEventListener('mouseleave', handleMouseLeave);
        container.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section className={`${styles.container} ${NeuehaasBody.className}`}>
      <Link href={link}>
        <div
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          ref={container}
          className={styles.imageContainer}
        >
          <motion.div style={{ y }} className={styles.image}>
            <Image
              src={`/media${link}/web1.jpg`}
              width={0}
              height={0}
              sizes="100vw"
              alt="image"
            />
          </motion.div>

          <div className={styles.videoContainer}>
            <div className={styles.video}>
              <video
                className={styles.videoElement}
                autoPlay
                muted
                playsInline
                loop
                aria-label="Video player"
                preload="none"
              >
                <source src={`/media${link}/homeVideo.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </Link>

      <div className={styles.title}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      >
        View
      </motion.div>
    </section>
  );
}

export default Project;
