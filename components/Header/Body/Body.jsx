'use client';
import styles from './body.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fade } from '@/utils/anim';
import { getChars } from '@/utils/getChars';

function Body({ links, selectedLink, setSelectedLink }) {
  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { to, title } = link;
        return (
          <Link
            href={to}
            key={`l_${index}`}
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
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}

export default Body;
