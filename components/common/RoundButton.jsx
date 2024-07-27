import { NeuehaasBody } from '@/public/fonts/fonts';
import Magnetic from './Magnetic';
import Link from 'next/link';

function RoundButton({
  styles = '',
  textStrength = 50,
  magneticStrength = 100,
  href = '#',
  text,
}) {
  return (
    <Link scroll={false} href={href}>
      <Magnetic>
        <button
          data-text-strength={textStrength}
          data-strength={magneticStrength}
          className={`roundBtn ${styles}`}
        >
          <span className={`btn-text ${NeuehaasBody.className}`}>{text}</span>
        </button>
      </Magnetic>
    </Link>
  );
}

export default RoundButton;
