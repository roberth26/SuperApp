import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Store from '../stores/Store';
import { Container } from './Primitives';
import Navbar from './Navbar';

interface HeaderProps {
	store?: Store;
}

function Header( props: HeaderProps ) {
	const { store } = props;
	return (
		<StyledHeader theme={store.theme}>
			<Container>
				<Navbar />
			</Container>
		</StyledHeader>
	);
}

export default inject( 'store' )( observer( Header ) );

const StyledHeader = styled.header`
	background: ${props => props.theme.color.primary.toCss()};
	padding: ${props => props.theme.sizing.gutter}px 0;
	margin-bottom: ${props => props.theme.sizing.gutter};
`;