import Magnetic from './Magnetic';
import Link from 'next/link';
import { NeuehaasBody } from '@/public/fonts/fonts';

function MagneticButton({
  styles = '',
  textStrength = 15,
  magneticStrength = 80,
  href,
  text,
}) {
  return (
    <div className={`btnClick ${styles} ${NeuehaasBody.className}`}>
      <Magnetic>
        <Link
          scroll={false}
          data-text-strength={textStrength}
          data-strength={magneticStrength}
          href={href}
        >
          <span className="btn-text">{text}</span>
        </Link>
      </Magnetic>
    </div>
  );
}

export default MagneticButton;
