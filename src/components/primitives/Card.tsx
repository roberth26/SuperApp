import * as React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Store from '../../stores/Store';

const Card = styled.div`
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

interface CardProps {
	store?: Store;
	children?: any;
}

export default inject( 'store' )(
	observer(
		( props: CardProps ) => (
			<Card
				{...props}
				theme={props.store.activeTheme}
			/>
		)
	)
);