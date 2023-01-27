import { StateControl } from '../state-control/state-control.js';

const { min, max } = Math;


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

    const newViewbox = [[pSx,pSy], [pEx,pEy]];

    const vbW = viewbox[1][0] - viewbox[0][0];
    const vbH = viewbox[1][1] - viewbox[0][1];

    const relW = (pEx - pSx) / vbW;
    const relH = (pEy - pSy) / vbH;
    if (relW < 0.01 || relH < 0.01) { return; }

    transientState.viewboxStack.push(viewbox);
    upd(pageState, { viewbox: newViewbox });
}


export { clickedForNewViewboxSecond }
