import styles from './home.module.scss';
import Section2 from './Section2/Section2';
import Hero from './Hero/Hero';
import Description from './Description/Description';
import SelectedWork from './SelectedWork/SelectedWork';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      {/* <Section2 /> */}
      <Description />
      <SelectedWork />
      <Footer />
    </div>
  );
}
