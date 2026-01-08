import Magnetic from '@/components/common/Magnetic';
import FlipText from '@/components/FlipText/FlipText';

function SocialsLinks({ divStyles = '' }) {
  return (
    <div className={`socials ${divStyles}`}>
      <Magnetic>
        <p data-strength="20" data-text-strength="0">
          <span className="btn-text">© Lewis Thagichu 2026</span>
        </p>
      </Magnetic>{' '}
      <div className="links">
        <a href="https://github.com/lewisthagichu" target="_blank">
          <FlipText>Github</FlipText>
        </a>
        <a href="https://dev.to/thagichucodes" target="_blank">
          <FlipText>DEV</FlipText>
        </a>
        <a href="https://www.linkedin.com/in/lewis-thagichu/" target="_blank">
          <FlipText>Linkedln</FlipText>
        </a>
        <a href="https://x.com/thagichucodes" target="_blank">
          <FlipText>X</FlipText>
        </a>
      </div>
    </div>
  );
}

export default SocialsLinks;
