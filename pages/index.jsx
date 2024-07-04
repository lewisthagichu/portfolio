import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Landing from '@/components/Home/Landing/Landing';
import Description from '@/components/Home/Description/Description';
import SelectedWork from '@/components/Home/SelectedWork/SelectedWork';
import Contact from '@/components/Home/Contact/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lewis Thagichu Full-stack Developer</title>
        <meta name="description" content="Developed by Lewis Thagichu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preload" href="/images/bg-img.jpg" as="image" /> */}
      </Head>

      <div className={styles.container}>
        <Landing />
        <Description />
        <SelectedWork />
        <Contact />
      </div>
    </>
  );
}
