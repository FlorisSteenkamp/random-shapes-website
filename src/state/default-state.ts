import { AppState } from './app-state.js';
import { TransientState } from './transient-state.js';
import { PageState } from './page-state.js';
import { DeducedState } from './deduced-state.js';
import { Save } from '../page/save.js';


const defaultTransientState: TransientState = {
    viewboxStack: [],
    zoomState: {},
}


const defaultDeduced: DeducedState = {

}


const defaultTransient = {

};


const defaultInputDescriptorMap: Map<string,object> = new Map([
    ['shapeFromRandomPoints', {
        seed: 0,
        numPoints: 15,
        smoothness: 1,
        area: 0.45,
        rotation: 0,
        color: [245,66,105,255],
        x: 0,
        y: 0,
        backgroundColor: [30,30,30,255]
    }]
]);


const defaultSaves: Save[] = [
    {
        descriptorName: "shapeFromRandomPoints",
        descriptorObj: {
            seed: 127,
            numPoints: 50,
            smoothness: 1,
            area: 0.45,
            rotation: 2.8099800957108707,
            color: [136,95,146,255],
            x: 0,
            y: 0,
            backgroundColor: [30,30,30,255]
        },
        aspectRatio: [3,2]
    },
    {
        descriptorName: "shapeFromRandomPoints",
        descriptorObj: {
            seed: 127,
            numPoints: 3,
            smoothness: 0.66,
            area: 0.45,
            rotation: 2.8099800957108707,
            color: [169,104,104,255],
            x: 0,
            y: 0,
            backgroundColor: [30,30,30,255]
        },
        aspectRatio: [3,2]
    },
    {
        descriptorName: "shapeFromRandomPoints",
        descriptorObj: {
            seed: 150,
            numPoints: 14,
            smoothness: 1,
            area: 0.45,
            rotation: 0.8377580409572782,
            color: [255,0,0,87],
            x: 0,
            y: 0,
            backgroundColor: [30,30,30,255]
        },
        aspectRatio: [3,2]
    }
];


const defaultPageState: PageState = {
    deduced: defaultDeduced,
    aspectRatio: [3,2],
    inputDescriptorMap: defaultInputDescriptorMap,
    descriptorName: 'shapeFromRandomPoints',
    saves: defaultSaves,
    backgroundColor: [30,30,30,255]
}


const defaultAppState: AppState = {
    version: 2,
    pageState: defaultPageState
};


export { 
    defaultAppState, 
    defaultPageState, 
    defaultTransientState, 
    defaultDeduced,
    defaultTransient
}
