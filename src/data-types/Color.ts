import * as ColorUtils from 'color';

export default class Color {
	private red: number;
	private green: number;
	private blue: number;

	constructor(
		red: number,
		green: number,
		blue: number
	) {
		this.red = red;
		this.green = green;
		this.blue = blue;
	}

	toArray(): number[] {
		return new Array<number>(
			this.red,
			this.green,
			this.blue
		);
	}

	toCss( hsl?: boolean ): string {
		const color = ColorUtils.rgb( this.toArray() );
		return hsl ? color.hsl().string() :	color.string();
	}

	static fromArray( arr: number[] ): Color {
		return new Color( arr[ 0 ], arr[ 1 ], arr[ 2] );
	}

	static fromCssRgb( cssRgb: string ): Color {
		const arr = cssRgb.split( '(' )[ 1 ]
			.split( ')' )[ 0 ]
			.split( ',' )
			.map( n => Number.parseInt( n ) );
		return Color.fromArray( arr );
	}
}