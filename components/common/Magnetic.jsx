import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Magnetic({ children }) {
  const magnetic = useRef();

  useGSAP(() => {
    const textElement = magnetic.current.querySelector('.btn-text');

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top } = magnetic.current.getBoundingClientRect();
      const newX = (clientX - left) / magnetic.current.offsetWidth - 0.5;
      const newY = (clientY - top) / magnetic.current.offsetHeight - 0.5;
      const magneticStrength = magnetic.current.getAttribute('data-strength');
      const textMagneticStrength =
        magnetic.current.getAttribute('data-text-strength');

      gsap.to(magnetic.current, {
        duration: 1.5,
        x: newX * magneticStrength,
        y: newY * magneticStrength,
        ease: 'Power4.easeOut',
      });

      gsap.to(textElement, {
        duration: 1.5,
        x: newX * textMagneticStrength,
        y: newY * textMagneticStrength,
        ease: 'Power4.easeOut',
      });
    };

    const handleMouseLeave = (e) => {
      gsap.to(magnetic.current, {
        duration: 1.5,
        x: 0,
        y: 0,
        ease: 'Elastic.easeOut',
      });

      gsap.to(textElement, {
        duration: 1.5,
        x: 0,
        y: 0,
        ease: 'Elastic.easeOut',
      });
    };

    if (window.innerWidth > 540) {
      magnetic.current.addEventListener('mousemove', handleMouseMove);
      magnetic.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (magnetic.current) {
        magnetic.current.removeEventListener('mousemove', handleMouseMove);
        magnetic.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}

export default Magnetic;

//Method 2
// const xTo = gsap.quickTo(magnetic.current, 'x', {
//     duration: 1,
//     ease: 'elastic.out(1, 0.3)',
//   });
//   const yTo = gsap.quickTo(magnetic.current, 'y', {
//     duration: 1,
//     ease: 'elastic.out(1, 0.3)',
//   });

//   magnetic.current.addEventListener('mousemove', (e) => {
//     const { clientX, clientY } = e;
//     const { height, width, left, top } =
//       magnetic.current.getBoundingClientRect();
//     const x = clientX - (left + width / 2);
//     const y = clientY - (top + height / 2);
//     xTo(x);
//     yTo(y);
//   });
//   magnetic.current.addEventListener('mouseleave', (e) => {
//     xTo(0);
//     yTo(0);
//   });
