import styles from './form.module.scss';
import { useState } from 'react';
import { NeuehaasBody } from '@/public/fonts/fonts';
import Magnetic from '@/components/common/Magnetic';
import RoundButton from '@/components/common/RoundButton';

function Form() {
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  const { username, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (username.trim() === '') {
      setUsernameError('Please enter your name.');
      hasError = true;
    } else {
      setUsernameError('');
    }

    if (email.trim() === '') {
      setEmailError('Please enter your email address.');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (message.trim() === '') {
      setMessageError('Please enter your message.');
      hasError = true;
    } else {
      setMessageError('');
    }

    if (!hasError) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <label
            style={{ opacity: username === '' ? 1 : 0.5 }}
            htmlFor="username"
          >
            Your Name*
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Enter your name"
            autoComplete="on"
            // required
          />
          {usernameError && (
            <div className={styles.alert}>
              <span>{usernameError}</span>
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
          {emailError && (
            <div className={styles.alert}>
              <span>{emailError}</span>
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
            placeholder="Hi lewis, I need assistance with..."
            // required
          ></textarea>
          {messageError && (
            <div className={styles.alert}>
              <span>{messageError}</span>
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
