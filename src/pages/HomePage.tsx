import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Card } from '../components/Primitives';
import Page from './Page';
import Store from '../stores/Store';

interface HomePageProps {
	store?: Store;
}

function HomePage( { store }: HomePageProps ) {
	return (
		<Page>
			<Card>
				<div>This is the <strong>Home</strong> page!</div>
				<h1>{store.counter}</h1>
			</Card>
		</Page>
	);
}

export default inject( 'store' )( observer( HomePage ) );