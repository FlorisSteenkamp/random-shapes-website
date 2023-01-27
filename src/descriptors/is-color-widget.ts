import { RGBColorWidget } from '../code/color-control.js';
import { Widget } from "../page/controls/map-to-widget";


function isColorWidget(w: Partial<Widget>): w is RGBColorWidget {
    return (
        w.type === '[number,number,number,number]' && 
        w.subtype === 'color'
    );
}


export { isColorWidget }


// TEST
// const w: Partial<Widget> = {
//     type: '[number,number,number,number]'
// }
// if (isColorWidget(w)) {
//     w.defaultVal = [2,3,4,5];
// }