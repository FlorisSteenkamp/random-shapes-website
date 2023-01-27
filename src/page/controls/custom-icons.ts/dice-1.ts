import { /* tree-shaking no-side-effects-when-called */createSvgIcon } from '../../../utils/create-svg-icon.js';


const dice1PathStr = `
m19,3l-14,0c-1.1,0 -2,0.9 -2,2l0,14c0,1.1 0.9,2 2,2l14,0c1.1,0 2,-0.9 2,-2l0,-14c0,-1.1 -0.9,-2 -2,-2zm-7,10.5c-0.83,0 -1.5,-0.67 -1.5,-1.5s0.67,-1.5 1.5,-1.5s1.5,0.67 1.5,1.5s-0.67,1.5 -1.5,1.5z
`;

const Dice1Icon = createSvgIcon(dice1PathStr);


export { Dice1Icon, dice1PathStr }
