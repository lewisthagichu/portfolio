import styles from './nav.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '@/utils/anim';
import Body from '../Body/Body';
import ContactDetails from '../ContactDetails/ContactDetails';

const links = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Work',
    to: '/work',
  },
  {
    title: 'Contact',
    to: '/contact',
  },
];

function Nav() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      id="nav"
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.container}>
        <ContactDetails
          selectedLink={selectedLink}
          setSelectedLink={setSelectedLink}
        />
        <Body
          links={links}
          selectedLink={selectedLink}
          setSelectedLink={setSelectedLink}
        />
      </div>
    </motion.div>
  );
}

export default Nav;
