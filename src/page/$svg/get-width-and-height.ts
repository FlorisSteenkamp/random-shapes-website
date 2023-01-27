
function getWidthAndHeight(
        aspectRatio: number,
        sizes: { width: number; height: number; }) {

    let width: number;
    let height: number;
    let { width: _width, height: _height } = sizes;
    _width = _width < 200 ? 200 : _width;
    _height = _height < 200 ? 200 : _height;
    const r = _width/_height;
    if (r > aspectRatio) {  // if container div is wider
        height = _height;
        width = aspectRatio * _height;
    } else {
        width = _width;
        height = _width / aspectRatio;
    }

    return { width, height };
}


export { getWidthAndHeight }
