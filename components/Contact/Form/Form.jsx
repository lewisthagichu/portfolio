import styles from './form.module.scss';
import { useState, useRef } from 'react';
import { NeuehaasBody } from '@/public/fonts/fonts';
import { toast } from 'react-toastify';
import Magnetic from '@/components/common/Magnetic';
import emailjs from '@emailjs/browser';

function Form() {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (name.trim() === '') {
        setErrors((prevState) => ({
          ...prevState,
          name: 'Please enter your name',
        }));
        return;
      }

      if (email.trim() === '' || !email.includes('@')) {
        setErrors((prevState) => ({
          ...prevState,
          email: 'Please enter a valid email address.',
        }));
        return;
      }

      if (message.trim() === '') {
        setErrors((prevState) => ({
          ...prevState,
          message: 'Please enter your message.',
        }));

        return;
      }

      emailjs
        .sendForm('service_c9uerbf', 'template_pijqjbw', formRef.current, {
          publicKey: '51GrnnqtQ3FE-YPhq',
        })
        .then(
          () => {
            setFormData({
              name: '',
              email: '',
              message: '',
            });
            setErrors({
              name: '',
              email: '',
              message: '',
            });
            toast.success('Message sent successfully');
          },
          (error) => {
            console.log(error);
            throw new Error('Something went wrong. Please try again');
          }
        );
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <label style={{ opacity: name === '' ? 1 : 0.5 }} htmlFor="name">
            Your Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter your name"
            autoComplete="on"
            required
          />
          {errors.name && (
            <div className={styles.alert}>
              <span>{errors.name}</span>
            </div>
          )}
        </div>

        <div className={styles.formCol}>
          <label style={{ opacity: email === '' ? 1 : 0.5 }} htmlFor="email">
            Enter address*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="jane@doe.com"
            autoComplete="on"
            // required
          />
          {errors.email && (
            <div className={styles.alert}>
              <span>{errors.email}</span>
            </div>
          )}
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <label
            style={{ opacity: message === '' ? 1 : 0.5 }}
            htmlFor="message"
          >
            Your message*
          </label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={handleChange}
            rows={12}
            placeholder="Hello Lewis, I need assistance with..."
            // required
          ></textarea>
          {errors.message && (
            <div className={styles.alert}>
              <span>{errors.message}</span>
            </div>
          )}
        </div>
      </div>

      <Magnetic>
        <button
          data-strength="100"
          data-text-strength="50"
          className={`roundBtn ${styles.btnClickForm}`}
          type="submit"
        >
          <span className={`btn-text ${NeuehaasBody.className}`}>Submit</span>
        </button>
      </Magnetic>
    </form>
  );
}

export default Form;
