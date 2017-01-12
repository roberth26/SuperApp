import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Store from '../stores/Store';
import { Theme } from '../themes/Theme';
import Midnight from '../themes/Midnight';
import Daylight from '../themes/Daylight';

const themes = new Array<Theme>(
	new Midnight(),
	new Daylight()
);

interface ThemeSelectProps {
	store?: Store;
}

function ThemeSelect( { store }: ThemeSelectProps ) {
	const { theme } = store;
	const activeTheme = themes.findIndex( theme => (
		theme.constructor.name === store.theme.constructor.name
	));
	return (
		<select
			value={activeTheme}
			onChange={event => {
				const select = ( event.nativeEvent.target as HTMLInputElement );
				store.setTheme( themes[ select.value ] );
			}}
		>
			{themes.map( ( theme, index ) => (
				<option
					value={index}
					key={theme.constructor.name}
				>
					{theme.constructor.name}
				</option>
			))}
		</select>
	);
}

export default inject( 'store' )( observer( ThemeSelect ) );