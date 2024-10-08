import styles from './header.module.scss';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { opacity } from '@/utils/anim';
import { useDateTime } from '@/utils/useDateTime';
import { NeuehaasBody } from '@/public/fonts/fonts';
import Nav from './nav/Nav';
import FlipText from '../FlipText/FlipText';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const pathname = usePathname();
  const dateTime = useDateTime();

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <div className={`${styles.header} ${NeuehaasBody.className}`}>
      <div className={styles.bar}>
        <Link scroll={false} onMouseDown={() => setIsActive(false)} href="/">
          <FlipText divStyles={styles.name}>LEWIS THAGICHU</FlipText>
        </Link>

        <div onMouseDown={toggleNav} className={styles.el}>
          <div className={styles.label}>
            <motion.p variants={opacity} animate={isActive ? 'closed' : 'open'}>
              MENU
            </motion.p>

            <motion.p variants={opacity} animate={isActive ? 'open' : 'closed'}>
              CLOSE
            </motion.p>
          </div>
        </div>

        <div className={styles.region}>
          <p className={styles.status}>
            <Link href="/contact" scroll={false}>
              Available for projects{' '}
              <span className={styles.blinkingDot}></span>
            </Link>
          </p>
          <p className={styles.location}>Nairobi, KE</p>
          <p className={styles.date}>{dateTime.date}</p>
          <p className={styles.time}>{dateTime.time}</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && <Nav isActive={isActive} />}
      </AnimatePresence>
    </div>
  );
}

export default Header;
