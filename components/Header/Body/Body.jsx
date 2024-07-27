import styles from './body.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fade } from '@/utils/anim';
import { getChars } from '@/utils/getChars';
import { NeuehaasBody } from '@/public/fonts/fonts';

function Body({ links, selectedLink, setSelectedLink }) {
  return (
    <div className={`${styles.body} ${NeuehaasBody.className}`}>
      <div>
        {links.map((link, index) => {
          const { to, title } = link;
          return (
            <div className={styles.wrapper} key={`wrapper_${index}`}>
              <Link
                scroll={false}
                href={to}
                key={`link_${index}`}
                onMouseEnter={() => setSelectedLink({ isActive: true, index })}
                onMouseLeave={() => setSelectedLink({ isActive: false, index })}
              >
                <motion.p
                  variants={fade}
                  initial="initial"
                  animate={
                    selectedLink.isActive && selectedLink.index !== index
                      ? 'open'
                      : 'closed'
                  }
                >
                  {getChars(title)}
                </motion.p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
