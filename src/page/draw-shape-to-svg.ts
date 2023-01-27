import { descriptors } from '../descriptors/descriptors.js';
import { deleteSvgs } from '../svg/delete-svgs.js';


function drawShapeToSvg(
        svg: SVGSVGElement,
        descriptorName: string,
        inputDescriptor: any) {

    const descriptor = descriptors[descriptorName as 'shapeFromRandomPoints'];
    const { executer, painter } = descriptor!;
    const drawElements_ = painter(svg);

    deleteSvgs(svg);

    const r = executer(inputDescriptor);
    const $elemss = drawElements_(
        r,
        inputDescriptor.color,
        inputDescriptor.backgroundColor
    );
}


export { drawShapeToSvg }
