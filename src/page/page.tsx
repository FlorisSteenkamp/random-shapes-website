import * as React from 'react';
import { useRef, memo } from 'react';
import { Box, Button } from '@mui/material';
import { StateControl } from '../state-control/state-control.js';
import { PageState } from '../state/page-state.js';
import { NumberSlider } from './controls/number-slider.js';
import { $Svg } from './$svg/$svg.js';
import { isNumberWidget } from '../descriptors/is-number-widget.js';
import { isColorWidget } from '../descriptors/is-color-widget.js';
import { ColorPicker } from './controls/color-picker.js';
import { SelectorWidget } from './controls/selector-widget.js';
import { descriptors } from '../descriptors/descriptors.js';
import { $downloadSvg } from './download-svg.js';
import { $copyToClipboardSvg } from './copy-to-clipboard-svg.js';
import { $Save } from './$save.js';
import { $BoxButton } from '../components/box-button.js';
import { css } from './styles/page-styles.js';
import { cache } from '../cache.js';
import { MapToWidget } from './controls/map-to-widget.js';
import { ShapeDescriptor } from '../descriptors/shape-descriptor.js';
import { strToAspectRatio } from '../utils/str-to-aspect-ratio.js';
import { aspectRatioToStr } from '../utils/aspect-ratio-to-str.js';
import AddIcon from '@mui/icons-material/Add';
import useResizeObserver from "use-resize-observer";


interface Props {
	stateControl: StateControl;
	pageState: PageState;
}
 

const buttonStyle: React.CSSProperties = {
	fontWeight: 'bold', width: '100%', backgroundColor: '#222',
	color: 'white', marginTop: '0px'
};


const Page = memo(function Page(props: Props) {
	// Props
	const { stateControl, pageState } = props;
    const { upd, upd$ } = stateControl;
	const { descriptorName, inputDescriptorMap, saves, aspectRatio } = pageState;

	const descriptor = descriptors[descriptorName];
	const { widgetsObj } = descriptor!;
	const inputDescriptor = inputDescriptorMap.get(descriptorName)!;

	// Hooks
	const { ref, width = 200, height = 200 } = useResizeObserver<HTMLDivElement>();
	const sizes = { width, height };

    const $widgets = getWidgets(stateControl, widgetsObj);

	const svg = useRef<SVGSVGElement>(null);


	function addSaved() {
		const saves_ = saves.slice();

		const descriptorName = 'shapeFromRandomPoints';
		const descriptorObj = inputDescriptorMap.get(descriptorName)!;

		saves_.push({ descriptorName, descriptorObj, aspectRatio });

		upd(pageState, { saves: saves_ });
	}


	function onSaveClicked(idx: number) {
		const descriptorObj = inputDescriptorMap.get(descriptorName)!;

        const save = { descriptorName, descriptorObj, aspectRatio };
        const saves_ = saves.slice();
		saves_.splice(idx,1, save);

		upd(pageState, { saves: saves_ });
	}


	function onLoadClicked(idx: number) {
		const save = saves[idx];
        const { descriptorName, descriptorObj } = save;

		const inputDescriptorMap_ = new Map(inputDescriptorMap);
		inputDescriptorMap_.set(descriptorName, descriptorObj);

		upd(pageState, {
            descriptorName: descriptorName as 'shapeFromRandomPoints',
            inputDescriptorMap: inputDescriptorMap_
        });
	}

	function onDeleteClicked(idx: number) {
		const saves_ = saves.slice();
		saves_.splice(idx,1);

		upd(pageState, { saves: saves_ });
	}

    
    function onAspectRatioChanged(aspectRatioStr: string) {
        upd(pageState, { aspectRatio: strToAspectRatio(aspectRatioStr) });
    }


	return (<>
		{/* <span ref={refs.spanX} style={{ userSelect: 'none', position: 'absolute', bottom: '13px', left: '10px' }}>{x.toFixed(2)}</span> */}
		{/* <span ref={refs.spanY} style={{ userSelect: 'none', position: 'absolute', bottom: '13px', left: '80px' }}>{y.toFixed(2)}</span> */}
		<div style={css.grid}>
			<div 
			    id='left-nav' 
			    style={{
					gridArea: 'left-nav',
					backgroundColor: '#181818',
				}}
			>
				<Button
					style={buttonStyle}
					onClick={$downloadSvg(svg.current, aspectRatio/*, backgroundColor*/)}
				>
					DOWNLOAD SVG
				</Button>
				<Button
					style={{...buttonStyle, marginTop: '3px' }}
					onClick={$copyToClipboardSvg(svg.current, aspectRatio/*, backgroundColor*/)}
				>
					COPY TO CLIPBOARD
				</Button>
                <SelectorWidget<string>
                    heading='Aspect ratio'
                    val={aspectRatioToStr(aspectRatio)}
                    options={[
                        ['Horizontal'],
                        ['2 / 1' , '2 / 1'],
                        ['16 / 9', '16 / 9'],
                        ['3 / 2' , '3 / 2'],
                        ['4 / 3' , '4 / 3'],
                        ['Vertical'],
                        ['1 / 2' , '1 / 2'],
                        ['9 / 16', '9 / 16'],
                        ['2 / 3' , '2 / 3'],
                        ['3 / 4' , '3 / 4'],
                        ['Square'],
                        ['1 / 1' , '1 / 1'],
                    ]}
                    valChanged={onAspectRatioChanged}
                />
                {$widgets}
			</div>
			<div 
				id="outer-div"
				ref={ref}
				style={{
					position: 'relative',
					gridArea: 'content',
					margin: '20px',
				}}
			>
				<$Svg
                    aspectRatio={aspectRatio}
                    svg={svg}
					sizes={sizes}
					descriptorName={descriptorName}
					descriptorObj={inputDescriptor}
				/>
			</div>
			<Box
				component='div'
				sx={{
					gridArea: 'right-nav',
					backgroundColor: '#232323',
					overflowY: 'scroll',
					scrollbarWidth: 'thin',
					scrollbarColor: '#ffffff88 transparent',
					'&::-webkit-scrollbar': { width: '4px' },
					'&::-webkit-scrollbar-thumb': { background: '#ffffff88' },
					'&::-webkit-scrollbar-track': {}
				}}>
				{saves.map((save,i) => {
					return (
						<$Save
							key={i}
							idx={i}
							save={save}
							onSaveClicked={onSaveClicked}
							onLoadClicked={onLoadClicked}
							onDeleteClicked={onDeleteClicked}
						/>
					);
				})}
				<$BoxButton
					sxMid={{}}
					onClicked={addSaved}
				>
                    <AddIcon
                        style={{
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer'
                        }}
                    />
				</$BoxButton>
			</Box>
			<div style={{ gridArea: 'code', backgroundColor: '#232323' }}>
			</div>
		</div>
    </>);
});


const getWidgets = cache(function getWidgets(
        stateControl: StateControl,
        widgetsObj: MapToWidget<ShapeDescriptor>) {

    return Object.entries(widgetsObj).map(kw => mapToWidget(stateControl, kw))
}, 0);


const valChanged = cache(function valChanged(
        stateControl: StateControl, key: string) {

	const { upd, state } = stateControl;

	return (val: any) => {
		const { pageState } = state.appState;
		const { descriptorName, inputDescriptorMap } = pageState;

		const descriptorObj = inputDescriptorMap.get(descriptorName)!;
		const inputDescriptorMap_ = new Map(inputDescriptorMap);
		const inputDescriptor_ = { ...descriptorObj, ...{ [key]: val } };
		inputDescriptorMap_.set(descriptorName, inputDescriptor_);

		upd(pageState, { inputDescriptorMap: inputDescriptorMap_ });
	}
}, 0);


const mapToWidget = cache(function mapToWidget(
        stateControl: StateControl,
        keyAndWidget: [string,any]) {

    const [k,w] = keyAndWidget;
    const { descriptorName, inputDescriptorMap } = stateControl.state.appState.pageState;

    const descriptorObj = inputDescriptorMap.get(descriptorName)! as any;

    if (isNumberWidget(w)) {
        return (
            <NumberSlider
                key={w.name}
                heading={w.name}
                min={w.min} max={w.max} step={w.step}
                iconLessPathStr={w.iconLessPathStr}
                iconMorePathStr={w.iconMorePathStr}
                val={descriptorObj[k]}
                valChanged={valChanged(stateControl,k)}
            />
        );
    } else if (isColorWidget(w)) {
        return (
            <ColorPicker
                key={w.name}
                heading={w.name}
                color={descriptorObj[k]}
                colorChanged={valChanged(stateControl,k)}
            />
        );
    }
}, 0);


export { Page }


// •s → Δs → (⬡ → ⛻), 0 ≡ empty

// function list (by output type)
//   * [named-points]:  0  → •s
//   * randomPsInShape: ⛻ → •s
//   * [shape]:         0  → ⬡
//     - e.g. circle, ellipse, square, rectangle
//   * delunay:         •s → Δs
//   * trianglesToPoly: Δs → ⬡|⛻  (really 2/4 functions)
//   * psToShape:       •s → ⬡|⛻  (this is a shortcut)
//   * [transform]:     ⬡|⛻|⬡s|⛻s → ⬡|⛻|⬡s|⛻s  (really 2/4 functions)
//     - e.g. matrix, skew, etc.
//   * pointsToShapes:  •s → ⬡s|⛻s (really 1/2 functions)
// points → triangles