'use client';
import styles from './header.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity } from '@/utils/anim';
import Nav from './nav/Nav';
import { usePathname } from 'next/navigation';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const pathname = usePathname();

  const toggleNav = () => {
    setIsActive(!isActive);
    // document.body.style.overflow = isActive ? 'auto' : 'hidden';
  };

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link onMouseDown={() => setIsActive(false)} href="/">
          Lewis Thagichu
        </Link>

        <div onMouseDown={toggleNav} className={styles.el}>
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ''
            } `}
          ></div>
          <div className={styles.label}>
            <motion.p variants={opacity} animate={isActive ? 'closed' : 'open'}>
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={!isActive ? 'closed' : 'open'}
            >
              Close
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={opacity}
          animate={isActive ? 'closed' : 'open'}
          className={styles.shopContainer}
        >
          <p className={styles.shop}>TWITTER</p>
          <div className={styles.el}>
            <p>INSTAGRAM</p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}

export default Header;
