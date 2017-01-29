import * as React from 'react';
import KeyValuePair from '../../data-types/KeyValuePair';

interface SelectProps {
	selectedItem: KeyValuePair<string, string>;
	items: Array<KeyValuePair<string, string>>;
	onChange: ( newItem: KeyValuePair<string, string> ) => void;
}

export default function Select<T>( { selectedItem, items, onChange }: SelectProps ) {
	const handleChange = ( event: React.FormEvent<HTMLSelectElement> ) => {
		const select = ( event.nativeEvent.target as HTMLInputElement );
		const matchingItem = items.find(
			( item: KeyValuePair<string, string> ) => item.key === select.value
		);
		onChange( matchingItem );
	};

	const options = items.map( ( item: KeyValuePair<string, string>, index: number ) => (
		<option
			value={item.key}
			key={item.key}
		>
			{item.value}
		</option>
	));

	return (
		<select
			value={selectedItem.key}
			onChange={handleChange}
		>
			{options}
		</select>
	);
}