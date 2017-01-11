import { Theme } from './Theme';
import Color from '../data-types/Color';

export default class Midnight implements Theme {
	color = {
		background: new Color( 40, 40, 40 ),
		primary: new Color( 255, 180, 0 ),
		secondary: new Color( 60, 60, 60 ),
		font: new Color( 220, 220, 220 ),
		secondaryFont: new Color( 0, 0, 0 )
	};

	shading =  {
		boxShadow: '0 1px 4px rgba( 0, 0, 0, .4 )'
	};

	sizing = {
		borderBox: false,
		gutter: 20,
		maxWidth: 920
	};

	font = {
		primary: 'verdana'
	}
};