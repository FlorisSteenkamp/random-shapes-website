import { MouseEvent as MouseEvent_, MouseEventHandler } from 'react';
import { cache } from '../cache.js';
import { svgHeaderTop, svgHeaderBottom } from '../svg/svg-header.js';
import { generateRandomStrOfLength } from '../utils/generate-random-string.js';

let linkCreated = false;
let link: HTMLAnchorElement;


const _$downloadSvg = cache(
    function downloadSvg(
            svg: SVGSVGElement,
            aspectRatio: [number,number]): MouseEventHandler<HTMLButtonElement> {

        return (): void => {
            if (!linkCreated) {
                linkCreated = true;
                link = document.createElement("a");
            }
            const style = svg.getAttributeNS(null, "style");
            const g = svg.getElementsByClassName('drawing-surface')[0] as SVGGElement;
            const svgStr =
                // svgHeaderTop(aspectRatio, backgroundColor) +
                svgHeaderTop(aspectRatio, style) +
                g.innerHTML +
                svgHeaderBottom;

            const contentType = 'image/svg+xml';
            const base64Data = window.btoa(svgStr);
            const source = `data:${contentType};base64,${base64Data}`;

            document.body.appendChild(link);
            link.href = source;
            link.download = `shape-${generateRandomStrOfLength(3)}.svg`;
            link.click();
            document.body.removeChild(link);
        }
    },
    10
);


function $downloadSvg(
        svg: SVGSVGElement | null,
        aspectRatio: [number,number]/*,
        backgroundColor: [number,number,number,number]*/): MouseEventHandler<HTMLButtonElement> {

    if (svg === null) {
        return (event: MouseEvent_<HTMLButtonElement, MouseEvent>) => {};
    }

    return _$downloadSvg(svg, aspectRatio/*, backgroundColor*/);
}


export { $downloadSvg }
