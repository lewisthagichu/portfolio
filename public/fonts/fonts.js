import localFont from 'next/font/local';
import { Archivo_Black } from 'next/font/google';

const ArchivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400' });

const DrukCond = localFont({
  src: './DrukXCond-Super-Trial.otf',
});

const NeuehaasBody = localFont({
  src: './NeueHaasDisplayRoman.ttf',
});

const coign47BoldPro = localFont({
  src: './coign-47-bold-pro.ttf',
});

const ArgesCond = localFont({
  src: './ArgesCond.ttf',
});

const ArgesBold = localFont({
  src: './ArgesBold.ttf',
});

export {
  ArgesCond,
  ArgesBold,
  DrukCond,
  ArchivoBlack,
  NeuehaasBody,
  coign47BoldPro,
};
