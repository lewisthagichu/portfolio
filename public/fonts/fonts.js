import localFont from 'next/font/local';
import { Archivo_Black } from 'next/font/google';

const ArchivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400' });

const DrukCond = localFont({
  src: './Druk_Collection/DrukCondensedFamily/DrukXCond-Super-Trial.otf',
});

const NeuehaasBody = localFont({
  src: './neue-haas-display/NeueHaasDisplayRoman.ttf',
});

export { DrukCond, ArchivoBlack, NeuehaasBody };
