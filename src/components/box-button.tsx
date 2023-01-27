import * as React from 'react';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

const { isArray } = Array;


interface Props {
    children: JSX.Element | JSX.Element[];
    sxOuter?: SxProps<Theme>;
    sxMid?: SxProps<Theme>;
    onClicked: () => void;
}


function $BoxButton(props: Props) {
    const {
        children: _children,
        sxOuter: _sxOuter,
        sxMid: _sxMid
    } = props;
    const children = isArray(_children) ? _children : [_children];
    const sxOuter = isArray(_sxOuter) ? _sxOuter : [_sxOuter];
    const sxMid = isArray(_sxMid) ? _sxMid : [_sxMid];
    const { onClicked } = props;


    function onClick(event: React.MouseEvent<HTMLDivElement>) {
        onClicked();
    }


    return (
        <Box
            component="div"
            sx={[{
                margin: '10px 3px 10px 3px',
            }, ...sxOuter]}
        >
            <Box component="div"
                sx={[{
                    verticalAlign: 'middle',
                    width: '180px',
                    margin: 'auto',
                    height: '120px',
                    display: 'block',
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
                }, ...sxMid]}
                onClick={onClick}
            >
                {children}
            </Box>
        </Box>
    );
}


export { $BoxButton }
