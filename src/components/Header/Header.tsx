import * as React from 'react';
import Container from '../primitives/Container';
import Navbar from '../Navbar/Navbar';
import Wrapper from './primitives/Wrapper';

export default function Header() {
	return (
		<Wrapper>
			<Container>
				<Navbar />
			</Container>
		</Wrapper>
	);
}