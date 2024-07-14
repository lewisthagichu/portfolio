import localFont from 'next/font/local';
import { Archivo_Black } from 'next/font/google';

const ArchivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400' });

const BlackStone = localFont({
  src: './Blackstone.woff',
});

const DrukCond = localFont({
  src: './DrukXCond-Super-Trial.otf',
});

const NeuehaasBody = localFont({
  src: './NeueHaasDisplayRoman.ttf',
});

const coign47BoldPro = localFont({
  src: './coign-47-bold-pro.ttf',
});

const ArgesHeavy = localFont({
  src: './ArgesHeavy.woff2',
});

const PPMori = localFont({
  src: './PPMori-Regular.otf',
});

export {
  ArgesHeavy,
  BlackStone,
  DrukCond,
  ArchivoBlack,
  NeuehaasBody,
  PPMori,
  coign47BoldPro,
};
