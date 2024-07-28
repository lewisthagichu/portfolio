import styles from './preloader.module.scss';
import anime from 'animejs';
import { useState, useEffect, useRef } from 'react';

const words = [
  'Habari',
  'Afande please',
  'Chief',
  'Mkuu',
  'やあ',
  'Salimia',
  'Bazuu',
  'Anguka nayo',
];

// Inspired by Hasna Qasmei https://www.youtube.com/watch?v=I-2Qwlw24u0
function Preloader({ finishLoading }) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const text = useRef(null);

  useEffect(() => {
    const animateWords = () => {
      if (currentIndex < 0) {
        setTimeout(() => setCurrentIndex(0), 200);
        return;
      }

      let duration = currentIndex === 0 ? 1000 : 150;

      anime({
        targets: text.current,
        opacity: [0, 0.75],
        duration: 150,
        easing: 'easeInOutQuad',
        complete: () => {
          setTimeout(() => {
            if (currentIndex < words.length - 1) {
              setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
              finishLoading();
            }
          }, duration);
        },
      });
    };

    animateWords();
  }, [currentIndex, finishLoading]);

  return (
    <div className={styles.container}>
      <p id="text" ref={text} className={styles.word}>
        {words[currentIndex] || ''}
      </p>
    </div>
  );
}

export default Preloader;
