import * as React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Store from '../stores/Store';
import Midnight from '../themes/Midnight';

interface PrimitiveProps {
	store?: Store;
	children?: any;
}

function renderCard( props: PrimitiveProps ) { 
	const { store, children } = props;
	const Div = styled.div`
		background-color: ${props => props.theme.color.secondary.toCss()};
		border-radius: 5px;
		box-shadow: ${props => props.theme.shading.boxShadow};
		padding: ${props => props.theme.sizing.gutter}px;
		color: ${props => props.theme.color.font.toCss()};
	`;
	return <Div theme={store.theme}>{children}</Div>;
}

export const Card = inject( 'store' )( observer( renderCard ) );

function renderContainer( props: PrimitiveProps ) {
	const { store, children } = props;
	const Div = styled.div`
		max-width: 100%;
		width: ${props => (
			props.theme.sizing.maxWidth
			+ props.theme.sizing.gutter
		)}px;
		padding: 0 ${props => ( props.theme.sizing.gutter / 2 )}px;
		margin: 0 auto;
	`;
	return <Div theme={store.theme}>{children}</Div>;
}

export const Container = inject( 'store' )( observer( renderContainer ) );