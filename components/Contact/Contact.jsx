import styles from './contact.module.scss';
import Form from './Form/Form';
import Info from './Info/Info';
import { NeuehaasBody } from '@/public/fonts/fonts';

function Contact() {
  return (
    <div className={`${NeuehaasBody.className} ${styles.container}`}>
      <div className={styles.cta}>
        <h2>Get in Touch!</h2>
        <p>
          Have a question, proposal, or just want to say hello? Drop me an
          email.
        </p>
      </div>
      <div className={styles.wrapper}></div>
      <Form />
      <Info />
    </div>
  );
}

export default Contact;
