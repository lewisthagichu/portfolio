import Work from '@/components/Work/Work';
import PageTransition from '@/components/PageTransition/PageTransition';
import SmoothScroll from '@/components/common/SmoothScroll';

function WorkPage() {
  return (
    <PageTransition>
      <SmoothScroll>
        <Work />
      </SmoothScroll>
    </PageTransition>
  );
}

export default WorkPage;
