import * as React from 'react';
import { ReactElement } from '@types/react';
import { Container } from '../components/Primitives';

interface PageProps {
	children?: ReactElement<any>;
}

export default function Page( { children }: PageProps ) {
	return (
		<Container>
			{children}
		</Container>
	);
}