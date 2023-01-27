import { drawCubics } from '../draw/draw-cubics.js';
import { rgbaToHexStr } from '../utils/rgba-to-hex-str.js';


/**
 * **NODE FUNCTION!** (of type 'painter')
 * 
 * @param svg$ 
 * @param cubics 
 */
function drawElements(
        svg$: SVGSVGElement) {

    return (cubics: number[][][],
            color: [number,number,number,number],
            backgroundColor: [number,number,number,number]): SVGElement[][] => {

        if (!svg$) { return []; }

        svg$.setAttributeNS(null, "style",  `background-color: #${rgbaToHexStr(backgroundColor)}`);
                
        const g = svg$.getElementsByClassName('drawing-surface')[0] as SVGGElement;
        const $elems: SVGElement[][] = [];

        $elems.push(drawCubics(g, cubics, undefined, `fill: #${rgbaToHexStr(color)}`));

        return $elems;
    }
}


export { drawElements }
