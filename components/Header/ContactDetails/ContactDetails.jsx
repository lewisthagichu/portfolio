'use client';
import styles from './contactDetails.module.scss';
import { motion } from 'framer-motion';
import { fade } from '@/utils/anim';
import { getChars } from '@/utils/getChars';

function ContactDetails({ selectedLink, setSelectedLink }) {
  const links = [
    {
      text: 'THAGICHUCODES@GMAIL.COM',
      url: 'mailto:thagichucodes@gmail.com',
      index: 4,
      src: null,
    },
    {
      text: 'GITHUB',
      url: 'https://github.com/lewisthagichu',
      index: 5,
      src: null,
    },
    {
      text: 'TWITTER',
      url: 'https://x.com/thagichucodes',
      index: 6,
      src: null,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h5>CONTACT</h5>
        {links.map((link) => {
          const { text, url, index } = link;
          return (
            <a
              key={`a_${index}`}
              href={url}
              target="_blank"
              onMouseEnter={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
            >
              <motion.p
                variants={fade}
                initial="initial"
                animate={
                  selectedLink.isActive && selectedLink.index != index
                    ? 'open'
                    : 'closed'
                }
              >
                {getChars(text)}
              </motion.p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default ContactDetails;
