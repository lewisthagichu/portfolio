'use client';
import styles from './nav.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '@/utils/anim';
import Body from '../Body/Body';
import ContactDetails from '../ContactDetails/ContactDetails';

const links = [
  {
    title: 'About',
    to: '/about',
    src: 'about.webp',
  },
  {
    title: 'Work',
    to: '/projects',
    src: 'projects.webp',
  },
  {
    title: 'Contact',
    to: '/contact',
    src: 'contact.jpg',
  },
];

function Nav({ background, color }) {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
      style={{ background }}
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
