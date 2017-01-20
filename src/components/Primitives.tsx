import * as React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Store from '../stores/Store';
import Midnight from '../themes/Midnight';

interface PrimitiveProps {
	store?: Store;
	children?: any;
}

export const Card = inject( 'store' )(
	observer(
		( { store, children }: PrimitiveProps ) => {
			const { activeTheme } = store;
			const Div = styled.div`
				background-color: ${props => props.theme.color.secondary.toCss()};
				border-radius: 5px;
				box-shadow: ${props => props.theme.shading.boxShadow};
				padding: ${props => props.theme.sizing.gutter}px;
				color: ${props => props.theme.color.font.toCss()};
				margin-bottom: ${props => props.theme.sizing.gutter};

				&:last-of-type {
					margin-bottom: 0;
				}
			`;
			return <Div theme={activeTheme}>{children}</Div>;
		}
	)
);

export const Container = inject( 'store' )(
	observer(
		( { store, children }: PrimitiveProps ) => {
			const { activeTheme } = store;
			const Div = styled.div`
				max-width: 100%;
				max-width: ${props => props.theme.sizing.borderBox ?
					'100%' : `calc( 100% - ${props.theme.sizing.gutter}px )`}
				width: ${props => (
					props.theme.sizing.maxWidth
					+ props.theme.sizing.gutter
				)}px;
				padding: 0 ${props => ( props.theme.sizing.gutter / 2 )}px;
				margin: 0 auto;
			`;
			return <Div theme={activeTheme}>{children}</Div>;
		}
	)
);