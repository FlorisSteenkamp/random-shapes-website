
function fixViewboxAspectRatio(
        r: number,
        box: [[number,number],[number,number]]): [[number,number],[number,number]] {

    const [[xS,yS],[xE,yE]] = box;
    const w = xE - xS;
    const h = yE - yS;
    
    if (w/h > r) {  // width is too large
        const w_ = r*h;
        const halfW = (w - w_)/2;
        const xS_ = xS + halfW;
        const xE_ = xE - halfW;

        return [[xS_,yS],[xE_,yE]];
    }

    if (w/h < r) {  // height is too large
        const h_ = w/r;
        const halfH = (h - h_)/2;
        const yS_ = yS + halfH;
        const yE_ = yE - halfH;

        return [[xS,yS_],[xE,yE_]];
    }

    return box;
}


export { fixViewboxAspectRatio }
