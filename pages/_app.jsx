import '@/styles/globals.css';
import Layout from '@/components/Layout/Layout';
import SmoothScrolling from '@/components/SmoothScrolling/SmoothScrolling';
import { HeaderContextProvider } from '@/context/HeaderContext';

export default function App({ Component, pageProps }) {
  return (
    <HeaderContextProvider>
      <SmoothScrolling>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SmoothScrolling>
    </HeaderContextProvider>
  );
}
