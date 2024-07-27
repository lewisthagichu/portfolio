import SmoothScroll from '@/components/common/SmoothScroll';
import Contact from '@/components/Contact/Contact';
import PageTransition from '@/components/PageTransition/PageTransition';

function ContactPage() {
  return (
    <PageTransition>
      <SmoothScroll>
        <Contact />
      </SmoothScroll>
    </PageTransition>
  );
}

export default ContactPage;
