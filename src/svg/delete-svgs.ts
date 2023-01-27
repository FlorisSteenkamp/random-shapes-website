
function deleteSvgs(svg: SVGSVGElement) {
    const g = svg.getElementsByClassName('drawing-surface')[0] as SVGGElement;
    while (g.lastChild) {
        g.removeChild(g.lastChild);
    }
}


export { deleteSvgs }
