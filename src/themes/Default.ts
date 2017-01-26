import * as Shortid from 'shortid';
import { Theme } from './Theme';
import Color from '../data-types/Color';

export default class Default implements Theme {
	id: string;
	name: string;

	constructor() {
		this.id = Shortid.generate();
		this.name = 'Default';
	}

	color = {
		background: new Color( 220, 220, 220 ),
		primary: new Color( 0, 150, 220 ),
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