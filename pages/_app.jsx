// import '@/styles/normalize.css';
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/Header/Header';
import Head from 'next/head';
import Preloader from '@/components/Preloader/Preloader';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useNextCssRemovalPrevention } from '@madeinhaus/nextjs-page-transition';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps, router }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);
  useNextCssRemovalPrevention();

  useEffect(() => {}, [isLoading]);

  return (
    <>
      <Head>
        <title>Lewis Thagichu Full-stack Developer</title>
        <meta
          name="description"
          content="Lewis Thagichu is a software engineer based in Nairobi, Kenya. Keen on partnering with ambitious brands to develop innovative software."
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

      {isLoading && isHome ? (
        <Preloader finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />

          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
            <ToastContainer />
          </AnimatePresence>
        </>
      )}
    </>
  );
}
