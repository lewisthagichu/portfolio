import styles from './home.module.scss';
import Section2 from './Section2/Section2';
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
      {/* <Section2 /> */}
      <MarqueesWrapper />
      <Description />
      <SelectedWork />
      <Footer />
    </motion.div>
  );
}
