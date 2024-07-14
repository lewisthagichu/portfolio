import Magnetic from './Magnetic';
import Link from 'next/link';

function MagneticButton({ styles, magneticStrength, href, text }) {
  return (
    <button className={`btnClick ${styles}`}>
      <Magnetic>
        <Link data-strength={magneticStrength} href={href}>
          <span>{text}</span>
        </Link>
      </Magnetic>
    </button>
  );
}

export default MagneticButton;
