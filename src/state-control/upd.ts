import { State } from "../state/state.js";
import { AppState } from "../state/app-state.js";
import { _updObj } from "./upd-obj.js";
import { NestedObj } from './nested-obj.js';
import { jsonReplacer } from '../utils/json-replacer.js';
import { asyncScheduler } from 'rxjs/internal/scheduler/async';
import { Subscription, Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';


type UpdFunction = <T extends NestedObj>(v: T, newV: Partial<T>) => T;

interface Upd {
    upd: UpdFunction;
    upd$: UpdFunction;
}


function _upd(
        state: State,
        setState: React.Dispatch<React.SetStateAction<AppState>>) {

    const map: Map<any,string[]> = new Map();
    const weakMap: WeakMap<any,string[]> = new WeakMap();
    const updObj = _updObj(state, map, weakMap);

    const subject$ = createSubject(toLocalStorage);

    /** 
     * @param triggerUpdate If true, then triggers a react and localstorage 
     * update
     */
    function _upd<T extends NestedObj>(triggerUpdate: boolean) {
        return(v: T, newV: Partial<T>) => {

            const { appState, newV_ } = updObj(v,newV);
            state.appState = appState;

            if (triggerUpdate) {
                setState(appState);
                subject$.next(appState);
            }

            return newV_;
        }
    }

    /** 
     * Updates state and triggers react render 
     */
    const upd = _upd(true);
    /** 
     * Updates state and *does not* trigger react render 
     */
    const upd$ = _upd(false);

    return { upd, upd$ };
}


function toLocalStorage(appState: AppState) {
    // omit transient (lazy loaded, etc) properties from state
    const appState_: AppState = { 
        ...appState,
        pageState: {
            ...appState.pageState,
            deduced: undefined,
        }
    };
    localStorage.setItem(
        'app-state', 
        JSON.stringify(appState_, jsonReplacer)
    );
}


// https://github.com/FlorisSteenkamp/fontsite/blob/master/src/state-control/upd.ts
function createSubject(
        f: (newState: AppState) => void): Subject<AppState> {

    const subject$: Subject<AppState> = new Subject();
    const subscription = subject$.pipe(
        throttleTime(2500, asyncScheduler, { leading: true, trailing: true })
    )
    .subscribe(f);

    return subject$;
}


export { _upd, Upd, UpdFunction }
