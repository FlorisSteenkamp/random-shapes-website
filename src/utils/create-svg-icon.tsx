import * as React from 'react';
import { SvgIcon } from '@mui/material';


function createSvgIcon(path: string) {
    return function Icon(props: any) {
        return (
            <SvgIcon {...props}>
                <path d={path} />
            </SvgIcon>
        );
    }
}


export { createSvgIcon }
