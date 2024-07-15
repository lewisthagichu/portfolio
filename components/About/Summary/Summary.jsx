import styles from './summary.module.scss';
import { PPMori, NeuehaasBody } from '@/public/fonts/fonts';

function Summary() {
  return (
    <section className={`${NeuehaasBody.className} ${styles.container}`}>
      <div></div>
      <div className={styles.content}>
        <div className={styles.box}>
          <h4>About me</h4>
          <p>
            I'm Lewis Thagichu, a software engineer based in Nairobi, Kenya.
          </p>
          <p>
            I believe that the best products come from a blend of creativity,
            technical expertise, and strong teamwork. Therefore my strategy to
            building focuses on combining creative thinking with an analytical
            approach to solve problems at the intersection of business and
            technology.
          </p>
          <p>
            As someone dedicated to personal growth, I view each project as an
            opportunity for self-improvement. I can handle projects
            independently or seamlessly integrate into existing developer teams.
          </p>
          <p>
            I am a music and sports enthusiast, and I also consider myself to be
            quite the photographer.
          </p>
        </div>
        <div className={styles.box}>
          <h4>Technologies</h4>
          <div className={styles.tech}>
            <span>Next.JS</span>
            <span>React</span>
            <span>Express JS</span>
            <span>Flask</span>
            <span>Mongo DB</span>
            <span>MySQL</span>
            <span>Sass</span>
            <span>Git</span>
            <span>Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
