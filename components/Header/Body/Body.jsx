import styles from './body.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fade, translate } from '@/utils/anim';
import { NeuehaasBody } from '@/public/fonts/fonts';
import { usePathname } from 'next/navigation';

function Body({ links, selectedLink, setSelectedLink }) {
  const pathname = usePathname();
  console.log(pathname);
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
                  <motion.span
                    className={pathname === to ? styles.active : ''}
                    variants={translate}
                    custom={[0.4, 0.1]}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <span>{title}</span>
                  </motion.span>
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
