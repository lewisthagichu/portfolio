import gsap from 'gsap';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { scaleAnimation } from '@/utils/anim';

function Cursor({ active }) {
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useGSAP(() => {
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });
    let yMoveCursor = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', {
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

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <>
      <motion.div
        ref={cursor}
        className="cursor roundBtn"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className="cursorLabel roundBtn"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      >
        View
      </motion.div>
    </>
  );
}

export default Cursor;
