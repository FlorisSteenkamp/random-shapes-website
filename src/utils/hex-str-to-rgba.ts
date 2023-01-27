
const { parseInt } = Number;

function hexStrToRgba(hex: string) {
    hex = hex.replace(/^#/, '');

	if (hex.length === 6) { hex = hex + 'ff'; }

	const v = parseInt(hex.slice(0, 6), 16);
	const red = v >> 16;
	const green = (v >> 8) & 255;
	const blue = v & 255;
	const alpha = parseInt(hex.slice(6), 16);

	return [red, green, blue, alpha];
}


export { hexStrToRgba }


// TEST
// hexStrToRgb('0a0b0c00');  //?