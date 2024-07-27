import Head from 'next/head';
import Home from '@/components/Home/Home';
import PageTransition from '@/components/PageTransition/PageTransition';
import SmoothScroll from '@/components/common/SmoothScroll';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Lewis Thagichu Full-stack Developer</title>
        <meta name="description" content="Developed by Lewis Thagichu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTransition>
        <SmoothScroll>
          <Home />
        </SmoothScroll>
      </PageTransition>
    </>
  );
}
