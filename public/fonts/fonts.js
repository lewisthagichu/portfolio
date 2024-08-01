import localFont from 'next/font/local';
import { Big_Shoulders_Display } from 'next/font/google';

const ArgesHeavy = localFont({
  src: './ArgesHeavy.woff2',
});

const BigShoulders = Big_Shoulders_Display({ subsets: ['latin'] });

const BlackStone = localFont({
  src: './Blackstone.woff',
});

const NeuehaasBody = localFont({
  src: './NeueHaasDisplayRoman.ttf',
});

const PPMori = localFont({
  src: './PPMori-Regular.otf',
});

export { ArgesHeavy, BigShoulders, BlackStone, NeuehaasBody, PPMori };
