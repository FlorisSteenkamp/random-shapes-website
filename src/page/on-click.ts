import { StateControl } from '../state-control/state-control.js';
import { gotoPrevViewbox } from './goto-prev-viewbox.js';


function onClick(
        stateControl: StateControl) {

    return (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        if (event.shiftKey) { 
            gotoPrevViewbox(stateControl); 
        }
    }
}


export { onClick }
