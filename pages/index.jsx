import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Landing from '@/components/Home/Landing/Landing';
import Description from '@/components/Home/Description/Description';
import SelectedWork from '@/components/Home/SelectedWork/SelectedWork';
import Footer from '@/components/Home/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lewis Thagichu Full-stack Developer</title>
        <meta name="description" content="Developed by Lewis Thagichu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Landing />
        <Description />
        <SelectedWork />
        {/* <Footer /> */}
      </div>
    </>
  );
}
