import { StateControl } from '../state-control/state-control.js';
import { getViewboxXY } from './get-viewbox-xy.js';
import { RefObject } from 'react';


function mouseDown(
        stateControl: StateControl,
        svg: RefObject<SVGSVGElement>): React.MouseEventHandler<SVGSVGElement> {

    const { pageState } = stateControl.state.appState;

    return (event) => {
        if (event.shiftKey || event.ctrlKey || event.altKey) { return; }
        
        const svg$ = svg.current;
        if (!svg$) { return; }
        
        const ox = event.nativeEvent.offsetX;
        const oy = event.nativeEvent.offsetY;
        const viewboxXY = getViewboxXY(svg$, pageState.viewbox, ox, oy);
        
        clickedForNewViewboxFirst(stateControl, viewboxXY);
    }
}


function clickedForNewViewboxFirst(
        stateControl: StateControl, 
        viewboxXY: number[]) {

    const { transientState } = stateControl;
    const { zoomState } = transientState;

    // Just make sure previous rect is removed
    if (zoomState.zoomRect) { zoomState.zoomRect.remove(); }

    transientState.zoomState = { 
        mouseIsDown: true,
        prevViewboxXY: viewboxXY,
        zoomRect: undefined
    };
}


export { mouseDown }
