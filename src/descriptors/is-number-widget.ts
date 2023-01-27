import { NumberWidget, Widget } from "../page/controls/map-to-widget";


function isNumberWidget(w: any): w is NumberWidget {
    return w.type === 'number';
}


export { isNumberWidget }


// TEST
// const w: Partial<Widget> = {
//     type: 'number'
// }
// if (isNumberWidget(w)) {
//     w.val = 2;
// }