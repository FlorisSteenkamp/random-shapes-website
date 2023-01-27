import * as React from 'react';
import { memo } from 'react';
import { Box, Stack, Slider, Typography, IconButton } from '@mui/material';
import { memoizeByStr } from '../../utils/memoize-by-str.js';
import { createSvgIcon } from '../../utils/create-svg-icon.js';
import { areEqual } from '../are-equal.js';


const createSvgIcon_ = memoizeByStr(createSvgIcon);


interface Props {
    val: number;
    valChanged?: ((value: number) => void) | undefined;
    heading: string;
    min: number;
    max: number;
    step: number;
    iconLessPathStr: string | undefined;
    iconMorePathStr: string | undefined;
}


const NumberSlider = memo(function NumberSlider(props: Props) {
    const { val, valChanged, heading, min, max, step, iconLessPathStr, iconMorePathStr } = props;

    function _valChanged(
            event: Event,
            value: number | number[],
            activeThumb: number) {

        if (valChanged === undefined || typeof value !== 'number') { return; }

        valChanged(value);
    }


    function lessClicked() {
        if (valChanged === undefined) { return; }

        valChanged(Math.max(min, val - step));
    }

    function moreClicked() {
        if (valChanged === undefined) { return; }

        valChanged(Math.min(max, val + step));
    }


    const LessIcon = createSvgIcon_(iconLessPathStr || '');
    const MoreIcon = createSvgIcon_(iconMorePathStr || '');

    return (
        <Box sx={{ /*width: 240,*/ margin: '10px' }}>
            <Typography id="input-slider" gutterBottom style={{ color: '#888' }}>
                {heading}
            </Typography>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <IconButton
                    onClick={lessClicked}
                >
                    <LessIcon style={{ width: '30px', height: '30px' }} />
                </IconButton>
                <Slider
                    style={{ color: '#888'}}
                    valueLabelDisplay="auto"
                    aria-label={heading}
                    min={min} max={max} step={step}
                    value={val}
                    onChange={_valChanged}
                />
                <IconButton
                    onClick={moreClicked}
                >
                    <MoreIcon style={{ width: '30px', height: '30px' }} />
                </IconButton>
            </Stack>
        </Box>
    );
}, areEqual(false));


export { NumberSlider }
