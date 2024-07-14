import Magnetic from '@/components/common/Magnetic';

function SocialsLinks({ divStyles = '' }) {
  return (
    <div className={`socials ${divStyles}`}>
      <Magnetic>
        <p data-strength="20">© Lewis Thagichu 2024 </p>
      </Magnetic>{' '}
      <div className="links">
        <a href="https://github.com/lewisthagichu" target="_blank">
          Github
        </a>
        <a href="https://dev.to/thagichucodes" target="_blank">
          DEV
        </a>
        <a href="https://www.linkedin.com/in/lewis-thagichu/" target="_blank">
          Linkedin
        </a>
        <a href="https://x.com/thagichucodes" target="_blank">
          X
        </a>
      </div>
    </div>
  );
}

export default SocialsLinks;
