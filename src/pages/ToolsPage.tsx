import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Card } from '../components/Primitives';
import Page from './Page';
import Store from '../stores/Store';

interface ToolsPageProps {
	store?: Store;
}

function ToolsPage( { store }: ToolsPageProps ) {
	return (
		<Page>
			<Card>
				<div>This is the <strong>Tools</strong> page!</div>
			</Card>
		</Page>
	);
}

export default inject( 'store' )( observer( ToolsPage ) );