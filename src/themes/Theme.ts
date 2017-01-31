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

	toString(): string;
}

export interface ThemeJson {
	id: string;
	name: string;

	color: {
		background: string,
		primary: string,
		secondary: string,
		font: string,
		secondaryFont: string
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
		background: Color.fromCssRgb( json.color.background ),
		primary: Color.fromCssRgb( json.color.primary ),
		secondary: Color.fromCssRgb( json.color.secondary ),
		font: Color.fromCssRgb( json.color.font ),
		secondaryFont: Color.fromCssRgb( json.color.secondaryFont )
	};
	theme.toString = () => theme.name;
	return theme;
}

export function themeToJson( theme: Theme ): ThemeJson {
	return {
		id: theme.id,
		name: theme.name,
		color: {
			background: theme.color.background.toCss(),
			primary: theme.color.primary.toCss(),
			secondary: theme.color.secondary.toCss(),
			font: theme.color.font.toCss(),
			secondaryFont: theme.color.secondaryFont.toCss()
		},
		shading: theme.shading,
		sizing: theme.sizing,
		font: theme.font
	};
}