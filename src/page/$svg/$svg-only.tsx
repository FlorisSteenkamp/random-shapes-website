import * as React from 'react';
import { memo, useRef, useEffect } from 'react';
import { toViewBoxStr } from '../viewbox.js';
import { getViewbox } from '../../utils/get-viewbox-aspect-ratio-max-1.js';
import { drawShapeToSvg } from '../draw-shape-to-svg.js';
import { areEqual } from '../are-equal.js';
import { SxProps, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';


interface Props {
    descriptorName: string;
    descriptorObj: object;
    sx?: SxProps<Theme>;
}


const $SvgOnly = memo(function $SvgOnly(props: Props) {
    // Props
    const { descriptorName, descriptorObj, sx: _sx } = props;
    const sx = _sx === undefined ? [] : Array.isArray(_sx) ? _sx : [_sx];
    const aspectRatio = (180 - (2*10)) / (120 - (2*10));
    const viewbox = getViewbox(aspectRatio);

    // Hooks
    const svg = useRef<SVGSVGElement>(null);
    useEffect(function() {
		drawShapeToSvg(svg.current!, descriptorName, descriptorObj);
	}, [descriptorName, descriptorObj]);  // run only once


    return (
        <Box component='svg'
            sx={[{ position: 'absolute' }, ...sx]}
            ref={svg}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox={toViewBoxStr(viewbox)}
        >
            <g className='drawing-surface'/>
        </Box>
    );
}, areEqual(false));


export { $SvgOnly }
