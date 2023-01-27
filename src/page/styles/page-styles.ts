import { CSSProperties } from 'react';


const gridCss: CSSProperties = {
    boxSizing: 'border-box',
    height: '100%', margin: '0px',
    display: 'grid',
    gridTemplateColumns: '[start] 280px [left] minmax(0,1fr) [right] 220px [end]',
    gridTemplateRows: '[start] minmax(0, 1fr) [tab] 1px [end]',
    gridTemplateAreas: `
        "left-nav content right-nav"
        "code code code"
    `,
    columnGap: 0,
    rowGap: 0,
    // transition: 'all 1s'
};


const css = {
    grid: gridCss
}

export { css }
