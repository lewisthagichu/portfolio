'use client';
import { useEffect } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Landing from '@/components/Home/Landing/Landing';
import Description from '@/components/Home/Description/Description';

const inter = Inter({ subsets: ['latin'] });

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
        {/* <Description /> */}
      </div>
    </>
  );
}
