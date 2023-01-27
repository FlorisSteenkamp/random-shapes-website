
interface NumberControl {
    defaultVal: number;
    type: 'number';
    name: string;
    min: number;
    max: number;
    step: number;
    iconLessPathStr?: string;
    iconMorePathStr?: string;
}


export { NumberControl }
