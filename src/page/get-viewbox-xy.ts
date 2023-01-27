
function getViewboxXY(
        svg$: SVGSVGElement,
        viewbox: number[][], 
        pixelsX: number, 
        pixelsY: number): number[] {

    const boundingRect = svg$.getBoundingClientRect(); 
    const pixelsW = boundingRect.width;
    const pixelsH = boundingRect.height;

    const vbW = viewbox[1][0] - viewbox[0][0];
    const vbH = viewbox[1][1] - viewbox[0][1];

    const vbX = ((pixelsX/pixelsW) * vbW) + viewbox[0][0];
    const vbY = ((pixelsY/pixelsH) * vbH) + viewbox[0][1];

    return [vbX, vbY];
}


export { getViewboxXY }
