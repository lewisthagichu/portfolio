import styles from './contact.module.scss';
import Form from './Form/Form';
import Info from './Info/Info';
import { NeuehaasBody } from '@/public/fonts/fonts';
import Link from 'next/link';
import Magnetic from '../common/Magnetic';
import SocialsLinks from '../Footer/SocialLinks/SocialsLinks';
import Header from '../Header/Header';

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

      <button className={`btnClick ${styles.btnClickContact}`}>
        <Magnetic>
          <Link data-strength="60" href="/work">
            <span>Submit</span>
          </Link>
        </Magnetic>
      </button>

      <SocialsLinks divStyles={styles.socialsContact} />
    </section>
  );
}

export default Contact;
