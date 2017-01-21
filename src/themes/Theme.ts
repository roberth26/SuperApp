import Color from '../data-types/Color';

export interface Theme {
	id: string;
	name: string;

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
	};
}

export interface ThemeJson {
	id: string;
	name: string;

	color: {
		background: number[],
		primary: number[],
		secondary: number[],
		font: number[],
		secondaryFont: number[],
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
	};
}

export function themeFromJson( json ): Theme {
	const theme = json;
	theme.color = {
		background: Color.fromArray( json.color.background ),
		primary: Color.fromArray( json.color.primary ),
		secondary: Color.fromArray( json.color.secondary ),
		font: Color.fromArray( json.color.font ),
		secondaryFont: Color.fromArray( json.color.secondaryFont )
	};
	return theme;
}