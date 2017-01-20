import { Theme } from './Theme';
import Color from '../data-types/Color';

export default class Daylight implements Theme {
	color = {
		background: new Color( 220, 220, 220 ),
		primary: new Color( 0, 77, 155 ),
		secondary: new Color( 255, 255, 255 ),
		font: new Color( 60, 60, 60 ),
		secondaryFont: new Color( 255, 255, 255 )
	};

	shading = {
		boxShadow: '0 1px 4px rgba( 0, 0, 0, .2 )'
	};

	sizing = {
		borderBox: true,
		gutter: 30,
		maxWidth: 720
	};

	font = {
		primary: 'arial'
	};
};