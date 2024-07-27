import Home from '@/components/Home/Home';
import PageTransition from '@/components/PageTransition/PageTransition';
import SmoothScroll from '@/components/common/SmoothScroll';

export default function HomePage() {
  return (
    <PageTransition>
      <SmoothScroll>
        <Home />
      </SmoothScroll>
    </PageTransition>
  );
}
