'use client';
import styles from './contact.module.scss';
import Form from './Form/Form';
import Info from './Info/Info';
import { NeuehaasBody } from '@/public/fonts/fonts';
import { useEffect } from 'react';
import useHeaderContext from '@/hooks/useHeaderContext';
import Link from 'next/link';

function Contact() {
  const { setHeaderStyle } = useHeaderContext();

  useEffect(() => {
    setHeaderStyle({ color: '#fff' });
  }, []);

  return (
    <section className={`${NeuehaasBody.className} ${styles.container}`}>
      <div className={styles.cta}>
        <h2>Get in Touch!</h2>
        <p>
          Have a question, proposal, or just want to say hello? Drop me an
          email.
        </p>
      </div>

      <div className={styles.wrapper}>
        <Form />
        <Info />
      </div>

      <button className={`btnClick ${styles.btnClickContact}`}>
        <Link href="/projects">
          <span>Submit</span>
        </Link>
      </button>

      <div className={styles.socials}>
        <p>© Lewis Thagichu 2024 </p>
        <div className={styles.links}>
          <a href="https://github.com/lewisthagichu">Github</a>
          <a href="https://dev.to/thagichucodes">DEV</a>
          <a href="https://www.linkedin.com/in/lewis-thagichu/">Linkedln</a>
          <a href="https://x.com/thagichucodes">X</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
