'use client';
import styles from './home.module.scss';
import { useEffect } from 'react';
import Section2 from './Section2/Section2';
import useHeaderContext from '@/hooks/useHeaderContext';
import Hero from './Hero/Hero';
import Description from './Description/Description';
import SelectedWork from './SelectedWork/SelectedWork';
import Footer from '../Footer/Footer';

export default function Home() {
  const { setHeaderStyle } = useHeaderContext();

  useEffect(() => {
    setHeaderStyle({ color: '#E8E7CB' });
  }, []);

  return (
    <div className={styles.container}>
      <Hero />
      <Section2 />
      <Description />
      <SelectedWork />
      <Footer />
    </div>
  );
}
