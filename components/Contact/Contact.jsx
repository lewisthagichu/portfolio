import styles from './contact.module.scss';
import { NeuehaasBody } from '@/public/fonts/fonts';
import Link from 'next/link';
import Form from './Form/Form';
import Info from './Info/Info';
import Magnetic from '../common/Magnetic';
import SocialsLinks from '../Footer/SocialLinks/SocialsLinks';

function Contact() {
  return (
    <section className={`${NeuehaasBody.className} ${styles.container}`}>
      <div className={styles.cta}>
        <h2>Get in Touch!</h2>
        <p>
          Have a question, proposal, or just want to say hello? Send me an
          email/text.
        </p>
      </div>

      <div className={styles.wrapper}>
        <Form />
        <Info />
      </div>

      <SocialsLinks divStyles={styles.socialsContact} />
    </section>
  );
}

export default Contact;
