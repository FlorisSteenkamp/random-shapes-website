import * as React from 'react';
import { Box } from '@mui/material';
import { Save } from './save';
import { $SvgOnly } from './$svg/$svg-only.js';


interface Props {
    idx: number;
    save: Save;
    onSaveClicked: (idx: number) => void;
    onLoadClicked: (idx: number) => void;
    onDeleteClicked: (idx: number) => void;
}


const svgOnlyCss = {
    border: '5px solid black',
    borderRadius: '10px'
};


function $Save(props: Props) {
    const { save, idx, onSaveClicked, onLoadClicked, onDeleteClicked } = props;
    const { descriptorName, descriptorObj } = save;

    function _onSaveClicked() {
        onSaveClicked(idx);
    }

    function _onLoadClicked() {
        onLoadClicked(idx);
    }

    function _onDeleteClicked() {
        onDeleteClicked(idx);
    }

    return (
        <Box
            component="div"
            sx={{ margin: '10px 3px 10px 3px' }}
        >
            <Box component="div"
                sx={{
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
                    position: 'relative',
                    '&:hover': {
                        background: '#141414',
                        color: 'white',
                        '.boxes': {
                            '.box1': { display: 'block' },
                            '.box2': { display: 'block' },
                            '.box3': { display: 'block' }
                        }
                    },
                }}
            >
                {/* The DIV containing the SVG */}
                <Box
                    className="boxes"
                    component="div"
                    sx={{
                        position: 'absolute',
                        left: '0px',
                        top: '0px',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <$SvgOnly
                        sx={svgOnlyCss}
                        descriptorName={descriptorName}
                        descriptorObj={descriptorObj}
                    />
                </Box>

                {/* The DIV containing the buttons */}
                <Box
                    className="boxes"
                    component="div"
                    sx={{
                        position: 'absolute',
                        left: '8px',
                        top: '8px',
                        width: 'calc(100% - 16px)',
                        height: 'calc(100% - 16px)'
                    }}
                >
                    <Box
                        component="div"
                        className="box1"
                        sx={{
                            display: 'none',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            cursor: 'pointer'
                        }}
                        onClick={_onSaveClicked}
                    >
                        Save
                    </Box>
                    <Box
                        component="div"
                        className="box2"
                        textAlign="center"
                        sx={{
                            display: 'none',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            cursor: 'pointer'
                        }}
                        onClick={_onLoadClicked}
                    >
                        Load
                    </Box>
                    <Box
                        className="box3"
                        component="div"
                        textAlign="center"
                        sx={{
                            display: 'none',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                        onClick={_onDeleteClicked}
                    >
                        Delete
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}


export { $Save }
