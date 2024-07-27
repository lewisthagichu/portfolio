import About from '@/components/About/About';
import SmoothScroll from '@/components/common/SmoothScroll';
import PageTransition from '@/components/PageTransition/PageTransition';

function AboutPage() {
  return (
    <PageTransition>
      <SmoothScroll>
        <About />
      </SmoothScroll>
    </PageTransition>
  );
}

export default AboutPage;
