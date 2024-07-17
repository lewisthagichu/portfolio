import localFont from 'next/font/local';
import { Archivo_Black } from 'next/font/google';

const ArchivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400' });

const ArgesHeavy = localFont({
  src: './ArgesHeavy.woff2',
});

const BlackStone = localFont({
  src: './Blackstone.woff',
});

const DrukCond = localFont({
  src: './DrukXCond-Super-Trial.otf',
});

const NeuehaasBody = localFont({
  src: './NeueHaasDisplayRoman.ttf',
});

const PPMori = localFont({
  src: './PPMori-Regular.otf',
});

export { ArchivoBlack, ArgesHeavy, BlackStone, DrukCond, NeuehaasBody, PPMori };
