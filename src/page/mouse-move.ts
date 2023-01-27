import { StateControl } from '../state-control/state-control.js';
import { getViewboxXY } from './get-viewbox-xy.js';
import { drawRect } from './draw-rect.js';
import { RefObject } from 'react';


function mouseMove(
        stateControl: StateControl,
        svg: RefObject<SVGSVGElement>) {

    return (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        const svg$ = svg.current;
        if (!svg$) { return; }

        const { state, transientState } = stateControl;
        const { pageState } = state.appState;
        const { zoomState } = transientState;

        if (!zoomState.mouseIsDown) { return; }

        // Pixel coordinates
        const pixelsX = event.nativeEvent.offsetX;
        const pixelsY = event.nativeEvent.offsetY;
        
        const [viewboxX,viewboxY] = 
            getViewboxXY(svg$, pageState.viewbox, pixelsX, pixelsY);

        // const spanX = refs.spanX.current;
        // if (spanX) { spanX.innerHTML = viewboxX.toFixed(2); }
        // const spanY = refs.spanY.current;
        // if (spanY) { spanY.innerHTML = viewboxY.toFixed(2); }

        if (zoomState.zoomRect) { zoomState.zoomRect.remove(); }
        const prevViewboxXY = zoomState.prevViewboxXY!;

        const newZoomRect = [
            prevViewboxXY, 
            [viewboxX, viewboxY]
        ];

        const g$ = svg$.getElementsByTagName('g')[0];
        zoomState.zoomRect = drawRect(g$, newZoomRect);

        //setXY({x,y});
    }
}


export { mouseMove }
