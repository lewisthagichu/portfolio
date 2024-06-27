'use client';
import styles from './nav.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '@/utils/anim';
import Body from '../Body/Body';
import ContactDetails from '../ContactDetails/ContactDetails';
import HoverImage from '../HoverImage/HoverImage';

const links = [
  {
    title: 'About',
    to: '/about',
    src: 'home.png',
  },
  {
    title: 'Work',
    to: '/work',
    src: 'lookbook.png',
  },
  {
    title: 'Contact',
    to: '/contact',
    src: 'contact.png',
  },
];

function Nav() {
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
    >
      <div className={styles.wrapper}>
        <ContactDetails
          selectedLink={selectedLink}
          setSelectedLink={setSelectedLink}
        />
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <HoverImage
            src={links[selectedLink.index]?.src}
            isActive={selectedLink.isActive}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Nav;
