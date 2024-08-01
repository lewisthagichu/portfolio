import styles from './home.module.scss';
import Hero from './Hero/Hero';
import Description from './Description/Description';
import SelectedWork from './SelectedWork/SelectedWork';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import { slideUp, animm } from '@/utils/anim';
import MarqueesWrapper from './Marquees/MarqueesWrapper';

export default function Home() {
  return (
    <motion.div {...animm(slideUp)} className={styles.container}>
      <Hero />
      <MarqueesWrapper />
      <Description />
      <SelectedWork />
      <Footer />
    </motion.div>
  );
}
