import * as React from 'react';
import { SyntheticEvent, FormEvent } from '@types/react';
import { inject, observer } from 'mobx-react';
import Store from '../../stores/Store';
import { Theme } from '../../themes/Theme';

interface ThemeSelectProps {
	activeTheme: Theme;
	themes: Theme[];
	onChange: ( newTheme: Theme ) => void;
}

function ThemeSelect( { activeTheme, themes, onChange }: ThemeSelectProps ) {
	const activeThemeIndex = themes.findIndex( theme => (
		theme.constructor.name === activeTheme.constructor.name
	));

	const handleChange = ( event: FormEvent<HTMLSelectElement> ) => {
		const select = ( event.nativeEvent.target as HTMLInputElement );
		onChange(
			themes.find( theme => select.value === theme.id )
		);
	};

	const themeOptions = themes.map( ( theme: Theme, index: number ) => (
		<option
			value={theme.id}
			key={theme.id}
		>
			{theme.name}
		</option>
	));

	return (
		<select
			value={activeTheme.id}
			onChange={handleChange}
		>
			{themeOptions}
		</select>
	);
}

export default inject( 'store' )( observer( ThemeSelect ) );