import { ShapeDescriptor as InputDescriptor } from './shape-descriptor.js';
import { Descriptor } from '../state/descriptor.js';
import { shapeFromRandomPoints } from '../code/shape-from-random-points.js';
import { drawElements } from '../page/draw-elements.js';
import { dice1PathStr } from '../page/controls/custom-icons.ts/dice-1.js';
import { dice5PathStr } from '../page/controls/custom-icons.ts/dice-5.js';


const { EPSILON: eps } = Number;
// eslint-disable-next-line
const { random, PI: π } = Math;

const squarePathStr = 'M 12,4 L 20,20 L 4,20 z';
const starPathStr = 'm1.09375,9.81475l8.33169,0l2.57456,-8.68975l2.57456,8.68975l8.33169,0l-6.74047,5.3705l2.57469,8.68975l-6.74047,-5.37065l-6.74047,5.37065l2.57469,-8.68975l-6.74047,-5.3705z';
const fivePointDullPathStr10 = 'M 17.492545852344353 18.903398097414687 C 20.32400491360016 15.275218611693903 20.32400491360016 8.724781388306104 17.492545852344353 5.09660190258532  C 14.661086791088547 1.4684224168645343 3.5728044106527914 0.4957226206019296 3.685749657514986 5.09660190258532  C 3.765614007474033 8.349914842296467 10.58914775492967 8.745706928058514 10.58914775492967 12.000000000000004  C 10.58914775492967 15.254293071941492 3.765614007474033 15.65008515770354 3.685749657514986 18.903398097414687  C 3.5728044106527914 23.504277379398076 14.661086791088547 22.531577583135473 17.492545852344353 18.903398097414687  z';
const fivePointSharpPathStr10 = 'M 18.364348453583332 20.182174185647117 C 18.39790800050762 20.13917160038396 18.39790800050762 3.8608283996160377 18.364348453583332 3.817825814352881  C 18.33078890665904 3.774823229089723 1.9986614115790644 3.763294415234496 2.0000000822890946 3.817825814352881  C 2.0009466654259302 3.856385336457082 10.182174267936213 11.961428860989862 10.182174267936213 12  C 10.182174267936213 12.038571139010136 2.0009466654259302 20.143614663542916 2.0000000822890946 20.182174185647117  C 1.9986614115790644 20.236705584765502 18.33078890665904 20.225176770910277 18.364348453583332 20.182174185647117  z';
const smallPathStr = 'M 7.519090767962893 12.481197392074312 C 7.5876824637516105 14.938146476719417 10.076169046488086 18.26899662759322 12.50787765449739 17.911090395455478  C 16.380150666453318 17.341157534687103 17.475114829280525 7.481124612820938 13.76427842661749 6.236530326486335  C 10.973192709953302 5.300415402870337 7.4369370272123945 9.53845693616181 7.519090767962893 12.481197392074312  z';
const largePathStr = 'M 4.5318179466048205 12.801995653457187 C 4.6461374395860195 16.89691079453236 8.793615077480144 22.44832771265537 12.846462757495651 21.85181732575913  C 19.300251110755532 20.901929224478504 21.125191382134204 4.468541021368231 14.940464044362482 2.3942172108105577  C 10.288654516588837 0.8340256714505614 4.394895045353991 7.897428226936349 4.5318179466048205 12.801995653457187  z';
const rotateLeftPathStr = 'M7.11 8.53 5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z';
const rotateRightPathStr = 'M15.55 5.55 11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42 1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z';
const keyboardArrowLeftPathStr = 'M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z';
const keyboardArrowRightPathStr = 'M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z';
const keyboardArrowUpPathStr = 'm5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z';
const keyboardArrowDownPathStr = 'M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z';


const shapeFromRandomPointsDescriptor: Descriptor<InputDescriptor,number[][][]> = {
    name: 'shapeFromRandomPoints',  // <-- could be later made into a URI?
    executer: shapeFromRandomPoints,
    painter: drawElements,
    widgetsObj: {
        backgroundColor: {
            defaultVal: [30,30,30,255],
            name: 'Background',
            type: '[number,number,number,number]' as const,
            subtype: 'color'
        },
        color: {
            defaultVal: [0,150,200,255],
            name: 'Color',
            type: '[number,number,number,number]' as const,
            subtype: 'color'
        },
        seed: {
            defaultVal: random()/eps,
            name: 'Random seed',
            type: 'number',
            min: 1, max: 200, step: 1,
            iconLessPathStr: dice1PathStr,
            iconMorePathStr: dice5PathStr
        },
        numPoints: {
            defaultVal: 15,
            name: 'Complexity',
            type: 'number',
            min: 3, max: 50, step: 1,
            iconLessPathStr: squarePathStr,
            iconMorePathStr: starPathStr,
        },
        smoothness: {
            defaultVal: 1,
            name: 'Smoothness',
            type: 'number',
            min: 0, max: 1, step: 0.01,
            iconLessPathStr: fivePointSharpPathStr10,
            iconMorePathStr: fivePointDullPathStr10,
        },
        area: {
            defaultVal: 1,
            name: 'Size',
            type: 'number',
            min: 0.01, max: 4, step: 0.01,
            iconLessPathStr: smallPathStr,
            iconMorePathStr: largePathStr
        },
        rotation: {
            defaultVal: 0,
            name: 'Rotation',
            type: 'number',
            min: 0, max: 2*π, step: 2*π/360,
            iconLessPathStr: rotateLeftPathStr,
            iconMorePathStr: rotateRightPathStr
        },
        x: {
            defaultVal: 0,
            name: 'x',
            type: 'number',
            min: -2, max: 2, step: 0.05,
            iconLessPathStr: keyboardArrowLeftPathStr,
            iconMorePathStr: keyboardArrowRightPathStr
        },
        y: {
            defaultVal: 0,
            name: 'y',
            type: 'number',
            min: -2, max: 2, step: 0.05,
            iconLessPathStr: keyboardArrowUpPathStr,
            iconMorePathStr: keyboardArrowDownPathStr
        }
    }
}


export { shapeFromRandomPointsDescriptor }
