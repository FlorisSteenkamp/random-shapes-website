
function rgbaToHexStr(color: [number,number,number,number]) {
    const [red,green,blue,alpha] = color;
	
    return (
        (blue | green << 8 | red << 16 | 1 << 24).toString(16).slice(1) +
        (alpha | 1 << 8).toString(16).slice(1)
    );
}


export { rgbaToHexStr }


// TEST
// import { hexStrToRgb } from "./hex-str-to-rgb.js";
// 
// rgbToHexStr([10,11,12,255]);  //?
// hexStrToRgb('0a0b0cff');      //?
