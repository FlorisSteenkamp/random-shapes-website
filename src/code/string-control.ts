
interface StringControl {
    defaultVal: string;
    type: 'string';
    name: string;
    minLength?: number;
    maxLenght?: number;
    regex?: RegExp;
}


export { StringControl }
