import styles from './footer.module.scss';
import { DrukCond, NeuehaasBody } from '@/public/fonts/fonts';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MagneticButton from '../common/MagneticButton';
import SocialsLinks from './SocialLinks/SocialsLinks';

function Footer() {
  const container = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
    // requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <motion.section
      ref={container}
      style={{ y }}
      className={`${styles.container} ${NeuehaasBody.className}`}
    >
      <div className={styles.tag}></div>

      <div className={styles.sliderContainer}>
        <div ref={slider} className={`${styles.slider} ${DrukCond.className}`}>
          <p ref={firstText}>
            Let's work together
            <span>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="221.000000pt"
                height="191.000000pt"
                viewBox="0 0 221.000000 191.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,191.000000) scale(0.100000,-0.100000)"
                  stroke="none"
                >
                  <path
                    d="M975 1606 c-100 -45 -144 -180 -111 -340 9 -43 25 -98 36 -123 32
-72 24 -79 -24 -21 -157 193 -369 265 -460 157 -51 -60 -42 -141 24 -221 42
-51 164 -110 273 -133 48 -10 87 -22 87 -26 0 -4 -21 -11 -47 -14 -170 -23
-305 -100 -352 -200 -33 -71 -27 -110 27 -168 55 -58 168 -56 270 6 56 33 152
120 191 171 30 41 34 29 10 -33 -26 -71 -49 -181 -49 -241 0 -100 65 -210 136
-229 81 -22 172 51 192 155 7 32 12 75 12 96 0 50 -27 170 -52 227 -24 56 -14
66 20 21 38 -50 120 -128 171 -161 126 -81 269 -71 314 24 23 48 21 79 -8 136
-44 88 -147 151 -309 189 -48 12 -90 23 -93 25 -2 3 25 10 60 16 138 24 237
71 304 144 78 85 80 177 6 234 -32 25 -45 28 -107 28 -61 0 -79 -5 -134 -34
-61 -33 -182 -140 -215 -190 -26 -39 -29 -20 -6 38 64 169 63 320 -2 412 -37
52 -113 78 -164 55z m101 -55 c17 -10 39 -36 50 -57 27 -55 25 -183 -4 -287
-25 -88 -27 -118 -10 -135 22 -22 39 -13 121 66 128 122 220 165 305 143 50
-14 72 -43 72 -96 0 -99 -123 -186 -326 -229 -17 -4 -42 -18 -55 -32 -23 -24
-23 -25 -3 -44 11 -11 60 -32 109 -46 145 -42 227 -91 261 -156 15 -28 19 -85
8 -113 -10 -26 -59 -45 -117 -45 -76 0 -142 36 -248 137 -90 87 -111 95 -134
58 -11 -17 -9 -33 12 -100 36 -113 37 -241 4 -308 -49 -100 -152 -102 -203 -4
-32 61 -31 181 5 305 21 76 24 97 14 113 -20 31 -50 22 -102 -32 -68 -69 -160
-140 -204 -155 -20 -7 -60 -13 -90 -14 -47 0 -57 4 -87 34 -39 39 -41 55 -15
111 35 78 131 139 266 170 82 19 115 38 115 65 0 27 -31 44 -125 70 -153 42
-242 106 -265 189 -14 50 9 98 57 117 81 34 184 -9 314 -132 50 -48 97 -84
108 -84 38 0 42 31 16 126 -32 116 -39 187 -25 249 26 115 99 163 176 116z"
                  />
                </g>
              </svg>
            </span>
          </p>
          <p ref={secondText}>
            Let's work together
            <span>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="221.000000pt"
                height="191.000000pt"
                viewBox="0 0 221.000000 191.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,191.000000) scale(0.100000,-0.100000)"
                  stroke="none"
                >
                  <path
                    d="M975 1606 c-100 -45 -144 -180 -111 -340 9 -43 25 -98 36 -123 32
-72 24 -79 -24 -21 -157 193 -369 265 -460 157 -51 -60 -42 -141 24 -221 42
-51 164 -110 273 -133 48 -10 87 -22 87 -26 0 -4 -21 -11 -47 -14 -170 -23
-305 -100 -352 -200 -33 -71 -27 -110 27 -168 55 -58 168 -56 270 6 56 33 152
120 191 171 30 41 34 29 10 -33 -26 -71 -49 -181 -49 -241 0 -100 65 -210 136
-229 81 -22 172 51 192 155 7 32 12 75 12 96 0 50 -27 170 -52 227 -24 56 -14
66 20 21 38 -50 120 -128 171 -161 126 -81 269 -71 314 24 23 48 21 79 -8 136
-44 88 -147 151 -309 189 -48 12 -90 23 -93 25 -2 3 25 10 60 16 138 24 237
71 304 144 78 85 80 177 6 234 -32 25 -45 28 -107 28 -61 0 -79 -5 -134 -34
-61 -33 -182 -140 -215 -190 -26 -39 -29 -20 -6 38 64 169 63 320 -2 412 -37
52 -113 78 -164 55z m101 -55 c17 -10 39 -36 50 -57 27 -55 25 -183 -4 -287
-25 -88 -27 -118 -10 -135 22 -22 39 -13 121 66 128 122 220 165 305 143 50
-14 72 -43 72 -96 0 -99 -123 -186 -326 -229 -17 -4 -42 -18 -55 -32 -23 -24
-23 -25 -3 -44 11 -11 60 -32 109 -46 145 -42 227 -91 261 -156 15 -28 19 -85
8 -113 -10 -26 -59 -45 -117 -45 -76 0 -142 36 -248 137 -90 87 -111 95 -134
58 -11 -17 -9 -33 12 -100 36 -113 37 -241 4 -308 -49 -100 -152 -102 -203 -4
-32 61 -31 181 5 305 21 76 24 97 14 113 -20 31 -50 22 -102 -32 -68 -69 -160
-140 -204 -155 -20 -7 -60 -13 -90 -14 -47 0 -57 4 -87 34 -39 39 -41 55 -15
111 35 78 131 139 266 170 82 19 115 38 115 65 0 27 -31 44 -125 70 -153 42
-242 106 -265 189 -14 50 9 98 57 117 81 34 184 -9 314 -132 50 -48 97 -84
108 -84 38 0 42 31 16 126 -32 116 -39 187 -25 249 26 115 99 163 176 116z"
                  />
                </g>
              </svg>
            </span>
          </p>
        </div>
      </div>

      <MagneticButton
        styles={styles.btnClickFooter}
        href={'/contact'}
        text={'Get in touch'}
      />

      <SocialsLinks divStyles={styles.socialsFooter} />
    </motion.section>
  );
}

export default Footer;
