import { StateControl } from '../state-control/state-control.js';


function gotoPrevViewbox(stateControl: StateControl) {
    const { transientState, state, upd } = stateControl;
    const { pageState } = state.appState;
    const viewbox =
        transientState.viewboxStack.pop() ||
        [[-1,-1],[1,1]];

    upd(pageState, { viewbox });
}


export { gotoPrevViewbox }
