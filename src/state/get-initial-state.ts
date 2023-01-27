import { AppState } from "./app-state.js";
import { defaultAppState, defaultDeduced } from "./default-state.js";
import { jsonReviver } from "../utils/json-reviver.js";


function getInitialState(): AppState {
    const appStateJson = localStorage.getItem('app-state');
    if (!appStateJson) { return defaultAppState; }

    const storedState: AppState = JSON.parse(appStateJson, jsonReviver);
    if (storedState.version !== defaultAppState.version) {
        return defaultAppState;
    }

    return { 
        ...storedState, 
        pageState: { 
            ...storedState.pageState, 
            deduced: defaultDeduced
        } 
    };
}


export { getInitialState }
