import * as React from 'react';
import { useState } from 'react';
import { _upd } from './state-control/upd.js';
import { State } from './state/state.js';
import { StateControl } from './state-control/state-control.js';
import { getInitialState } from './state/get-initial-state.js';
import { defaultTransientState } from './state/default-state.js';
import { Page } from './page/page.js';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    const [appState, setAppState] = useState(getInitialState);
    const [state] = useState((): State => ({ appState }));
    const [{upd, upd$}] = useState(() => _upd(state, setAppState));
    const [stateControl] = useState((): StateControl => ({ 
        state, upd, upd$, transientState: defaultTransientState,
    }));

    const { pageState } = appState;

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <main style={{ height: '100%', margin: '0px' }}>
                <Page
                    stateControl={stateControl}
                    pageState={pageState}
                />
            </main>
        </ThemeProvider>
    );
}


export { App }
