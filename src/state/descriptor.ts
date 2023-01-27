import { MapToWidget } from '../page/controls/map-to-widget.js';


/**
 * A complete description of what to create and how to draw it to the screen.
 */
interface Descriptor<IN,OUT> {
    name: string;  // unique name
    executer: (o: IN) => OUT;
    painter: (svg$: SVGSVGElement) => (
        t: OUT,
        color: [number,number,number,number],
        backgroundColor: [number,number,number,number]
    ) => SVGElement[][];
    widgetsObj: MapToWidget<IN>;
}


export { Descriptor }
