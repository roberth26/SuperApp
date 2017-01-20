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
}