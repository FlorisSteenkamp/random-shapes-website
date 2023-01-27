import { XMLNS } from "./xmlns.js";
import { beziersToSvgPathStr } from "flo-boolean";


function drawCubics(
        g: SVGGElement,
        cubics: number[][][],
        class_: string | undefined = undefined,
        style: string | undefined = undefined,
        delay? : number): SVGElement[] {

    const $path = document.createElementNS(XMLNS, 'path');

    const d = beziersToSvgPathStr(cubics)

    $path.setAttributeNS(null, "d", d);
    if (class_ !== undefined) { $path.setAttributeNS(null, "class", class_); }
    if (style !== undefined) { $path.setAttributeNS(null, "style", style); }
    
    g.appendChild($path);

    if (delay) { setTimeout(() => $path.remove(), delay); }

    return [$path];
}


export { drawCubics }
