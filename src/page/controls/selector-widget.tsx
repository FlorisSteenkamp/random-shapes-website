import * as React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, ListSubheader } from '@mui/material';


interface Props<T extends string | number> {
    heading: string;
    val: T;
    options: ([string]|[string,T])[];
    valChanged?: ((value: T) => void) | undefined;
}


function SelectorWidget<T extends string | number>(props: Props<T>) {
    const { val, valChanged, heading, options } = props;

    function _handleChange(
            event: SelectChangeEvent<T>,
            child: React.ReactNode) {

        const value = event.target.value;
        if (valChanged === undefined) { return; }

        valChanged(value as any);
    }

    return (
        <FormControl fullWidth sx={{ marginTop: '15px', marginBottom: '15px' }}>
            <InputLabel id="aspect-ratio-select-label">{heading}</InputLabel>
            <Select<T>
                labelId="aspect-ratio-select-label"
                id="aspect-ratio-select"
                value={val}
                label={heading}
                onChange={_handleChange}
            >
                {options.map(([k,v]) => {
                    if (v === undefined) {
                        return <ListSubheader key={k}>{k}</ListSubheader>
                    }
                    return <MenuItem key={k} value={v}>{k}</MenuItem>;
                })}
            </Select>
        </FormControl>
    );
}


export { SelectorWidget }
