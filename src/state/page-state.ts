import { DeducedState } from './deduced-state.js';
import { descriptors } from '../descriptors/descriptors.js';
import { Save } from '../page/save.js';


interface PageState {
    /** Won't be save to localstorage */
    deduced: DeducedState | undefined;
    inputDescriptorMap: Map<string,object>;
    descriptorName: keyof typeof descriptors;
    saves: Save[];
    aspectRatio: [number,number];
    backgroundColor: [number,number,number,number];
}



export { PageState }
