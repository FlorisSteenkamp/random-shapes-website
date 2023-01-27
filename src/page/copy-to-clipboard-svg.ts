import { MouseEvent as MouseEvent_, MouseEventHandler } from 'react';
import { cache } from '../cache.js';
import { svgHeaderTop, svgHeaderBottom } from '../svg/svg-header.js';


const _$copyToClipboardSvg = cache(
    function copyToClipboardSvg(
            svg: SVGSVGElement,
            aspectRatio: [number,number]/*,
            backgroundColor: [number,number,number,number]*/): MouseEventHandler<HTMLButtonElement> {

        const style = svg.getAttributeNS(null, "style");

        return (): void => {
            const svgStr =
                svgHeaderTop(aspectRatio, style/*, backgroundColor*/) +
                svg.innerHTML +
                svgHeaderBottom;
            navigator.clipboard.writeText(svgStr);
        }
    },
    10
);


function $copyToClipboardSvg(
        svg: SVGSVGElement | null,
        aspectRatio: [number,number]/*,
        backgroundColor: [number,number,number,number]*/): MouseEventHandler<HTMLButtonElement> {

    if (svg === null) {
        return (event: MouseEvent_<HTMLButtonElement, MouseEvent>) => {};
    }

    return _$copyToClipboardSvg(svg, aspectRatio/*, backgroundColor*/);
}


export { $copyToClipboardSvg }
