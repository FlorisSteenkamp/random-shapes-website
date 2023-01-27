import { getShapeBounds } from '../get-shape-bounds.js';


function getViewBoxForPoints(points: number[][]) {
    const lines = points.map((p,idx) => [p,points[(idx+1)%points.length]]);
    const { minX, maxX, minY, maxY } = getShapeBounds(lines);

    const width = maxX-minX;
    const height = maxY-minY;

    // The margin around the shape
    const c = Math.max(width, height) * 0.1;

    return [[minX-c, minY-c], [maxX+c, maxY+c]];
}


function toViewBoxStr(viewbox: number[][]) {
    const [[xS,yS],[xE,yE]] = viewbox;
    const w = xE - xS;
    const h = yE - yS;
    return '' + 
        xS.toFixed(5) + ' ' + 
        yS.toFixed(5) + ' ' + 
        w.toFixed(5) + ' ' + 
        h.toFixed(5);
}


export { 
    getViewBoxForPoints,
    toViewBoxStr
};
