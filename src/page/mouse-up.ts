import { StateControl } from '../state-control/state-control.js';
import { getViewboxXY } from './get-viewbox-xy.js';
import { fixViewboxAspectRatio } from './fix-viewbox-aspect-ratio.js';
import { RefObject } from 'react';


const { min, max } = Math;


function mouseUp(
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
		
		clickedForNewViewboxSecond(stateControl, viewboxXY);
    }
}


function clickedForNewViewboxSecond(
        stateControl: StateControl, 
        pE: number[]) {

    // Get info
    const { state, upd, transientState } = stateControl;
    const { pageState } = state.appState;
    const { viewbox } = pageState;
    const { zoomState } = transientState;
    const { prevViewboxXY: pS } = zoomState;

    // Update transient info
    zoomState.mouseIsDown = false;
    if (zoomState.zoomRect) { zoomState.zoomRect.remove(); }

    const [_pSx,_pSy] = pS!;
    const [_pEx,_pEy] = pE;

    const pSx = min(_pSx,_pEx);
    const pEx = max(_pSx,_pEx);
    const pSy = min(_pSy,_pEy);
    const pEy = max(_pSy,_pEy);

    const newViewbox = [[pSx,pSy], [pEx,pEy]] as [[number,number],[number,number]];

    const vbW = viewbox[1][0] - viewbox[0][0];
    const vbH = viewbox[1][1] - viewbox[0][1];

    const relW = (pEx - pSx) / vbW;
    const relH = (pEy - pSy) / vbH;
    if (relW < 0.01 || relH < 0.01) { return; }

    const newViewbox_ = fixViewboxAspectRatio(3/1, newViewbox);
    console.log((newViewbox_[1][0] - newViewbox_[0][0])/(newViewbox_[1][1] - newViewbox_[0][1]));
    transientState.viewboxStack.push(viewbox);
    upd(pageState, { viewbox: newViewbox_ });
}


export { mouseUp }
