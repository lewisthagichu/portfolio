import styles from './form.module.scss';

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <label htmlFor="name">Your Name*</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className={styles.formCol}>
          <label htmlFor="email">Enter address*</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="jane@doe.com"
            required
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <label htmlFor="message">Your message*</label>
          <textarea
            name="message"
            id="message"
            rows={12}
            placeholder="Hi lewis,I need assistance with..."
          ></textarea>
        </div>
      </div>
    </form>
  );
}

export default Form;
