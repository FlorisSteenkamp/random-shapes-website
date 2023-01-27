
/**
 * A shape generation descriptor that contains *all* information to regenerate
 * the shape.
 */
interface ShapeDescriptor {
    seed: number;
    numPoints: number;
    smoothness: number;
    area: number;
    rotation: number;
    color: [number,number,number,number];
    backgroundColor: [number,number,number,number];
    x: number;
    y: number;
}


export {
    ShapeDescriptor
}