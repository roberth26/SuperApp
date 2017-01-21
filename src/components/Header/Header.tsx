import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Store from '../../stores/Store';
import Container from '../primitives/Container';
import Navbar from '../Navbar/Navbar';
import Wrapper from './primitives/Wrapper';

interface HeaderProps {
	store?: Store;
}

function Header( { store }: HeaderProps ) {
	return (
		<Wrapper theme={store.activeTheme}>
			<Container>
				<Navbar />
			</Container>
		</Wrapper>
	);
}

export default inject( 'store' )( observer( Header ) );