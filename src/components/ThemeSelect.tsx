import * as React from 'react';
import { SyntheticEvent, FormEvent } from '@types/react';
import { inject, observer } from 'mobx-react';
import Store from '../stores/Store';
import { Theme } from '../themes/Theme';

interface ThemeSelectProps {
	store?: Store;
}

function ThemeSelect( { store }: ThemeSelectProps ) {
	const { activeTheme, themes } = store;
	const activeThemeIndex = themes.findIndex( theme => (
		theme.constructor.name === activeTheme.constructor.name
	));
	const handleChange = ( event: FormEvent<HTMLSelectElement> ) => {
		const select = ( event.nativeEvent.target as HTMLInputElement );
		store.setActiveTheme( themes[ select.value ] );
	};
	const themeOptions = themes.map( ( theme: Theme, index: number ) => (
		<option
			value={index}
			key={theme.id}
		>
			{theme.name}
		</option>
	));
	return (
		<select
			value={activeThemeIndex}
			onChange={handleChange}
		>
			{themeOptions}
		</select>
	);
}

export default inject( 'store' )( observer( ThemeSelect ) );