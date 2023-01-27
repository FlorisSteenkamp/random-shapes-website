import { NumberControl } from '../../code/number-control.js';
import { StringControl } from '../../code/string-control.js';
import { RGBColorWidget } from '../../code/color-control.js';


type NumberWidget = NumberControl;
type StringWidget = StringControl;
type NNNNWidget = RGBColorWidget;

type Widget = NumberWidget | StringWidget | NNNNWidget;

// this actually maps a tuple, not an object
type MapToWidget<T> = { [K in keyof T]: 
      T[K] extends number 
    ? NumberWidget
    : T[K] extends string
    ? StringWidget
    : T[K] extends [number,number,number,number]
    ? NNNNWidget
    : T[K];
}


type MapFromWidget<T extends Widget> =
        T['type'] extends 'number'
      ? number 
      : T['type'] extends 'string'
      ? string
      : T['type'] extends '[number,number,number,number]'
      ? [number,number,number,number]
      : never;


export {
    MapToWidget, Widget, NumberWidget, StringWidget, NNNNWidget,
    MapFromWidget
}
