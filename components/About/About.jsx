import styles from './about.module.scss';
import Services from './Services/Services';
import Summary from './Summary/Summary';
import Footer from '../Footer/Footer';
import AboutHero from './AboutHero/AboutHero';
import { motion } from 'framer-motion';
import { slideUp, animm } from '@/utils/anim';

function About() {
  return (
    <motion.div {...animm(slideUp)} className={styles.container}>
      <AboutHero />
      <Summary />
      <Services />
      <Footer />
    </motion.div>
  );
}

export default About;
