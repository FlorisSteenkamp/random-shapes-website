
interface TransientState {
    viewboxStack: number[][][];
    zoomState: Partial<{
        mouseIsDown: boolean;
        prevViewboxXY: number[];
        zoomRect: SVGRectElement;
    }>;
}


export { TransientState }
