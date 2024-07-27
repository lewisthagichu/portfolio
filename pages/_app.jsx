import '@/styles/normalize.css';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header/Header';

export default function App({ Component, pageProps, router }) {
  return (
    <div>
      <Header />
      <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
