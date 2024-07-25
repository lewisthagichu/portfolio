import { ArgesHeavy } from '@/public/fonts/fonts';

function CardTitle({ title, background }) {
  return (
    <h2 className={ArgesHeavy.className} style={{ color: background }}>
      {title}
    </h2>
  );
}

export default CardTitle;
