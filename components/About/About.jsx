`use client`;
import styles from './about.module.scss';
import { useEffect } from 'react';
import useHeaderContext from '@/hooks/useHeaderContext';

function About() {
  const { setHeaderStyle } = useHeaderContext();

  useEffect(() => {
    setHeaderStyle({ color: '#1C1D20' });
  }, []);

  return <section className={styles.container}>About</section>;
}

export default About;
