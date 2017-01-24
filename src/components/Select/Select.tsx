import * as React from 'react';
import KeyValuePair from '../../data-types/KeyValuePair';

interface SelectProps<K, V> {
	selectedItem: KeyValuePair<K, V>;
	items: Array<KeyValuePair<K, V>>;
	onChange: ( newItem: KeyValuePair<K, V> ) => void;
}

export default function Select( { selectedItem, items, onChange }: SelectProps<any, any> ) {
	const handleChange = ( event: React.FormEvent<HTMLSelectElement> ) => {
		const select = ( event.nativeEvent.target as HTMLInputElement );
		const matchingItem = items.find( ( item: KeyValuePair<any, any> ) => item.key === select.value );
		onChange( matchingItem );
	};

	const options = items.map( ( item: KeyValuePair<any, any>, index: number ) => (
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