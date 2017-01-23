import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Theme, ThemeJson } from '../../../themes/Theme';

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