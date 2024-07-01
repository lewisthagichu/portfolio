import localFont from 'next/font/local';
import { Archivo_Black } from 'next/font/google';

const DrukCond = localFont({
  src: './Druk_Collection/DrukCondensedFamily/DrukXCond-Super-Trial.otf',
});
const ArchivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400' });

export { DrukCond, ArchivoBlack };
