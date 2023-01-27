import { pipe } from 'ramda';
import { cache } from '../cache.js';
import { getRandomPointsInUnitCircle, pointsToSimplePolygon } from 'generate-random-shapes';
import { ShapeDescriptor } from '../descriptors/shape-descriptor.js';
import { cubicBeziersThroughPoints } from 'cubic-beziers-through-points';
import { setShapeSmoothness, moveShapeCentroidToOrigin, setShapeSize, setShapeRotation } from 'generate-random-shapes';



const getRandomPointsInUnitCircle$ = cache(getRandomPointsInUnitCircle, 100);
const cubicBeziersThroughPoints$ = cache(cubicBeziersThroughPoints, 100);
const pointsToSimplePolygon$ = cache(pointsToSimplePolygon, 100);

/**
 * @param shapeDescriptor the new shape descriptor
 */
function shapeFromRandomPoints(
        shapeDescriptor: ShapeDescriptor): number[][][] {
        
    const {
        seed, numPoints, smoothness, area, rotation,
        x, y
    } = shapeDescriptor;

    let cubics = pipe(
        getRandomPointsInUnitCircle$,
        pointsToSimplePolygon$,
        cubicBeziersThroughPoints$
    )(seed, numPoints);

    cubics = setShapeSmoothness(smoothness, cubics);
    cubics = moveShapeCentroidToOrigin(cubics);
    cubics = setShapeSize(area, cubics);
    cubics = setShapeRotation(rotation, cubics);
    cubics = cubics.map(ps => ps.map(p => [p[0] + x,p[1] + y]));

    return cubics;
}


export { shapeFromRandomPoints }
