import '@/styles/globals.css';
import Layout from '@/components/Layout/Layout';
import SmoothScrolling from '@/components/SmoothScrolling/SmoothScrolling';

export default function App({ Component, pageProps }) {
  return (
    <SmoothScrolling>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SmoothScrolling>
  );
}
