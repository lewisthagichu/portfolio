import Magnetic from '@/components/common/Magnetic';

function SocialsLinks({ divStyles = '' }) {
  return (
    <div className={`socials ${divStyles}`}>
      <Magnetic>
        <p data-strength="20" data-text-strength="0">
          <span className="btn-text">© Lewis Thagichu 2024</span>
        </p>
      </Magnetic>{' '}
      <div className="links">
        <a href="https://github.com/lewisthagichu" target="_blank">
          <span>Github</span>
        </a>
        <a href="https://dev.to/thagichucodes" target="_blank">
          <span>DEV</span>
        </a>
        <a href="https://www.linkedin.com/in/lewis-thagichu/" target="_blank">
          <span>Linkedin</span>
        </a>
        <a href="https://x.com/thagichucodes" target="_blank">
          <span>X</span>
        </a>
      </div>
    </div>
  );
}

export default SocialsLinks;
