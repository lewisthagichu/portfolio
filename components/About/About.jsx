import styles from './about.module.scss';
import Services from './Services/Services';
import Summary from './Summary/Summary';
import Footer from '../Footer/Footer';
import AboutHero from './AboutHero/AboutHero';

function About() {
  return (
    <div className={styles.container}>
      <AboutHero />
      <Summary />
      <Services />
      <Footer />
    </div>
  );
}

export default About;
