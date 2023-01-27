import * as React from 'react';
import { Box, Popover, Typography } from '@mui/material';
import { useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import { generateRandomStrOfLength } from '../../utils/generate-random-string.js';
import { hexStrToRgba } from '../../utils/hex-str-to-rgba.js';
import { rgbaToHexStr } from '../../utils/rgba-to-hex-str.js';


interface Props {
    color: [number,number,number,number];
    colorChanged?: ((color: [number,number,number,number]) => void) | undefined;
    heading: string;
}


const id = generateRandomStrOfLength(5);

function ColorPicker(props: Props) {
    const { color, colorChanged, heading } = props;
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    function _colorChanged(hexColorStr: string) {
		const color = hexStrToRgba(hexColorStr) as [number,number,number,number];
        if (colorChanged === undefined) { return; }
            
        colorChanged(color);
    }

    function colorClicked(event: React.MouseEvent<HTMLButtonElement>) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const open = !!anchorEl;
    const id_ = open ? id : undefined;

    return (
        <div
            style={{ marginLeft: '10px', marginBottom: '10px' }}
        >
            <Typography id="input-slider" gutterBottom style={{ color: '#888' }}>
                {heading}
            </Typography>
            <Box component="div"
                sx={{ margin: 'auto' }}
            >
                <Box component="button"
                    sx={{
                        verticalAlign: 'middle',
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        color: '#444',
                        transition: 'all 250ms ease 0s',
                        background: 'transparent',
                        border: '2px solid currentcolor',
                        padding: '3px',
                        '&:hover': {
                            background: '#141414',
                            color: 'white'
                        }
                    }}
                    onClick={colorClicked}
                >
                    <Box component="div"
                        sx={{
                            backgroundColor: '#'+rgbaToHexStr(color),
                            width: '26px',
                            height: '26px',
                            borderRadius: '4px'
                        }}
                    >
                    </Box>
                </Box>
                <div
                    style={{
                        display: 'inline-block',
                        marginLeft: '10px'
                    }}
                >
                    {'#'+rgbaToHexStr(color)}
                </div>
            </Box>
            <Popover
                id={id_}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <HexAlphaColorPicker
                    style={{ width: '240px', overflow: 'hidden' }}
                    color={rgbaToHexStr(color)}
                    onChange={_colorChanged}
                />
            </Popover>
        </div>
    );
}


export { ColorPicker }
