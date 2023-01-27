import * as React from 'react';
import { RefObject, CSSProperties, memo, useEffect } from 'react';
import { toViewBoxStr } from '../viewbox.js';
import { backgroundSvgBase64Str } from '../background-svg-base64-str.js';
import { getViewbox } from '../../utils/get-viewbox-aspect-ratio-max-1.js';
import { getWidthAndHeight } from './get-width-and-height.js';
import { drawShapeToSvg } from '../draw-shape-to-svg.js';
import { areEqual } from '../are-equal.js';


interface Props {
    svg: RefObject<SVGSVGElement>;
    aspectRatio: [number,number];
    sizes: {
        width: number;
        height: number;
    },
    descriptorName: string;
    descriptorObj: object;
}


const divCss: CSSProperties = {
    background: '#fff',
    backgroundImage: `url(data:image/svg+xml;base64,${backgroundSvgBase64Str})`,
    backgroundSize: '1rem',
    backgroundRepeat: 'repeat',
    display: 'block',
    margin: '0px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}


const $Svg = memo(function $Svg(props: Props) {
    // Props
    const { svg, aspectRatio, descriptorName, descriptorObj } = props;
    const aspectRatio_ = aspectRatio[0] / aspectRatio[1];

    // Hooks
    useEffect(function() {
		drawShapeToSvg(svg.current!, descriptorName, descriptorObj);
	}, [descriptorName, descriptorObj]);  // run only once


    const { sizes } = props;
    const viewbox = getViewbox(aspectRatio_);

    const { width, height } = getWidthAndHeight(aspectRatio_, sizes);

    return (
        <div style={{ ...divCss, aspectRatio: aspectRatio_, width, height }}>
            <svg 
                style={{ position: 'absolute' }}
                ref={svg}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox={toViewBoxStr(viewbox)}

                // Zoom currently disabled
                // the line below (and others) could be made faster by using e.g.: `e => mouseDown(stateControl,refs,e)`
                //  onMouseDown={mouseDown(stateControl,refs)}
                //  onMouseUp={mouseUp(stateControl,refs)}
                //  onMouseMove={mouseMove(stateControl,refs)}
                //  onClick={onClick(stateControl,refs)}
            >
                <g className='drawing-surface'/>
            </svg>
        </div>
    );
}, areEqual(false));


export { $Svg }
