import styles from './header.module.scss';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { opacity } from '@/utils/anim';
import { useDateTime } from '@/utils/useDateTime';
import { NeuehaasBody } from '@/public/fonts/fonts';
import Nav from './nav/Nav';

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
        <Link onMouseDown={() => setIsActive(false)} href="/">
          LEWIS THAGICHU
        </Link>

        <div onMouseDown={toggleNav} className={styles.el}>
          {/* <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ''
            }`}
          ></div> */}
          <div className={styles.label}>
            <motion.p variants={opacity} animate={isActive ? 'closed' : 'open'}>
              MENU
            </motion.p>
            <motion.p
              variants={opacity}
              animate={!isActive ? 'closed' : 'open'}
            >
              CLOSE
            </motion.p>
          </div>
        </div>

        <div className={styles.region}>
          <p className={styles.date}>{dateTime.date}</p>
          <p className={styles.status}>
            Available for projects <span className={styles.blinkingDot}></span>
          </p>
          <p className={styles.time}>{dateTime.time}</p>
          <p className={styles.location}>Nairobi, KE</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && <Nav isActive={isActive} />}
      </AnimatePresence>
    </div>
  );
}

export default Header;
