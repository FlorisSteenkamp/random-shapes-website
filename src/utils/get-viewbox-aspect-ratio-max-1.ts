
/**
 * Returns a viewbox (rectangle with top-left and bottom-right coordinates)
 * with:
 * * the given aspect ratio
 * * the viewbox width or height is maximum
 * * but not more than 1.
 * 
 * @param r the aspect ratio
 */
function getViewbox(
        r: number): [[number,number],[number,number]] {

    return r > 1
        ? [[-r/2,-1/2],[+r/2,+1/2]]
        : [[-1/2,-(1/r)/2],[1/2,+(1/r)/2]];
}


export { getViewbox }

