import styles from './contactDetails.module.scss';
import { motion } from 'framer-motion';
import { fade } from '@/utils/anim';
import { getChars } from '@/utils/getChars';

function ContactDetails({ selectedLink, setSelectedLink }) {
  const links = [
    {
      text: 'hello@lewisthagichu.com',
      url: 'mailto:thagichucodes@gmail.com',
      index: 4,
      src: null,
    },
    {
      text: 'Github',
      url: 'https://github.com/lewisthagichu',
      index: 5,
      src: null,
    },

    {
      text: 'DEV',
      url: 'https://dev.to/thagichucodes',
      index: 6,
      src: null,
    },
    {
      text: 'Twitter',
      url: 'https://x.com/thagichucodes',
      index: 7,
      src: null,
    },
  ];

  return (
    <div className={styles.container}>
      <h4>CONTACT</h4>

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
  );
}

export default ContactDetails;
