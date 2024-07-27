import '@/styles/normalize.css';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header/Header';
import Head from 'next/head';

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Lewis Thagichu Full-stack Developer</title>
        <meta
          name="description"
          content="Lewis Thagichu is a software engineer based in Nairobi, Kenya. Keen on partnering with ambitious brands to develop innovative
          software."
        />
        <meta name="author" content="Lewis Thagichu" />
        <meta
          name="keywords"
          content="portfolio, software engineer, web developer, Nairobi, Kenya"
        />

        {/* Twitter Card meta tags */}
        <meta name="twitter:site" content="@thagichucodes" />
        <meta name="twitter:title" content="Lewis Thagichu's Portfolio" />
        <meta
          name="twitter:description"
          content="Lewis Thagichu is a software engineer based in Nairobi, Kenya."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </>
  );
}
