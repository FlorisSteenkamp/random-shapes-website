import { /* tree-shaking no-side-effects-when-called */createSvgIcon } from '../../../utils/create-svg-icon.js';


const dice5PathStr = `
M 19 3 H 5 c -1.1 0 -2 0.9 -2 2 v 14 c 0 1.1 0.9 2 2 2 h 14 c 1.1 0 2 -0.9 2 -2 V 5 c 0 -1.1 -0.9 -2 -2 -2 Z M 7.5 18 c -0.83 0 -1.5 -0.67 -1.5 -1.5 S 6.67 15 7.5 15 s 1.5 0.67 1.5 1.5 S 8.33 18 7.5 18 Z m 0 -9 C 6.67 9 6 8.33 6 7.5 S 6.67 6 7.5 6 S 9 6.67 9 7.5 S 8.33 9 7.5 9 Z m 4.5 4.5 c -0.83 0 -1.5 -0.67 -1.5 -1.5 s 0.67 -1.5 1.5 -1.5 s 1.5 0.67 1.5 1.5 s -0.67 1.5 -1.5 1.5 Z m 4.5 4.5 c -0.83 0 -1.5 -0.67 -1.5 -1.5 s 0.67 -1.5 1.5 -1.5 s 1.5 0.67 1.5 1.5 s -0.67 1.5 -1.5 1.5 Z m 0 -9 c -0.83 0 -1.5 -0.67 -1.5 -1.5 S 15.67 6 16.5 6 s 1.5 0.67 1.5 1.5 S 17.33 9 16.5 9 Z
`;


const Dice5Icon = createSvgIcon(dice5PathStr);


export { Dice5Icon, dice5PathStr }
