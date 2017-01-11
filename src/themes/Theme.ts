import Color from '../data-types/Color';

export interface Theme {
	color: {
		background: Color,
		primary: Color,
		secondary: Color,
		font: Color,
		secondaryFont: Color
	};

	shading: {
		boxShadow: string
	};

	sizing: {
		borderBox: boolean,
		gutter: number,
		maxWidth: number
	};

	font: {
		primary: string
	}
}