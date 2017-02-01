import * as React from 'react';
import KeyValuePair from '../../data-types/KeyValuePair';

interface SelectProps<T> {
	selectedItem: KeyValuePair<string, T>;
	items: Array<KeyValuePair<string, T>>;
	onChange: ( newItem: KeyValuePair<string, T> ) => void;
}

export default class Select<T> extends React.Component<SelectProps<T>, any> {
	handleChange = ( event: React.FormEvent<HTMLSelectElement> ) => {
		const { items, onChange } = this.props;
		const select = ( event.nativeEvent.target as HTMLSelectElement );
		const selectedIndex = items.findIndex(
			( item: KeyValuePair<string, T> ) => item.key === select.value
		);
		onChange( items[ selectedIndex ] );
	}

	render() {
		const { selectedItem, items } = this.props;

		const options = items.map( ( item: KeyValuePair<string, T>, index: number ) => (
			<option
				value={item.key}
				key={item.key}
			>
				{item.key}
			</option>
		));

		return (
			<select
				value={selectedItem.key}
				onChange={this.handleChange}
			>
				{options}
			</select>
		);
	}
}