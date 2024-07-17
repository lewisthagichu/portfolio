import Magnetic from './Magnetic';
import Link from 'next/link';
import { NeuehaasBody } from '@/public/fonts/fonts';

function MagneticButton({ styles, magneticStrength, href, text }) {
  return (
    <button className={`btnClick ${styles} ${NeuehaasBody.className}`}>
      <Magnetic>
        <Link data-strength={magneticStrength} href={href}>
          <span>{text}</span>
        </Link>
      </Magnetic>
    </button>
  );
}

export default MagneticButton;
