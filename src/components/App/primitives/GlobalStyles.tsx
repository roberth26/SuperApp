import * as React from 'react';
import { ThemeJson } from '../../../themes/Theme';

export default ( { theme }: { theme: ThemeJson } ) => {
	const css = `
		${!theme.sizing.borderBox ? '' : `
			*,
			*:before,
			*:after {
				box-sizing: border-box;		
			}
		`}
		
		html,
		* {
			font-family: ${theme.font.primary};
			font-size: 14px;
			line-height: 1.5;
		}
	`;
	return <style>{css}</style>;
};