import { toViewBoxStr } from "../page/viewbox.js";
import { getViewbox } from "../utils/get-viewbox-aspect-ratio-max-1.js";


function svgHeaderTop(
        aspectRatio: [number,number],
        style: string | null) {

    const aspectRatio_  = aspectRatio[0] / aspectRatio[1];

    return (
`
<svg
    viewBox="${toViewBoxStr(getViewbox(aspectRatio_))}"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    style="${style}"
>
`
    );
}


const svgHeaderBottom = `

</svg>
`;


export { svgHeaderTop, svgHeaderBottom }
