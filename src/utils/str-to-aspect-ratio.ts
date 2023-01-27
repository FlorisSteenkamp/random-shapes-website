
function strToAspectRatio(
        aspectRatioStr: string): [number,number] {

    return aspectRatioStr.split(' / ').map(s => parseInt(s)) as [number, number];
}


export { strToAspectRatio }
