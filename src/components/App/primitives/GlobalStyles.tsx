import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import Store from '../../../stores/Store';

export default inject( 'store' )( observer(
	( { store }: { store?: Store } ) => {
		const css = `
			${!store.activeTheme.sizing.borderBox ? '' : `
				*,
				*:before,
				*:after {
					box-sizing: border-box;		
				}
			`}
			
			html,
			* {
				font-family: ${store.activeTheme.font.primary};
				font-size: 14px;
				line-height: 1.5;
			}
		`;
		return <style>{css}</style>;
	}
));