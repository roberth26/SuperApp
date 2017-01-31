import * as React from 'react';

interface SelectProps<T> {
	selectedItem: T;
	items: T[];
	onChange: ( newItem: T ) => void;
}

export default class Select<T> extends React.Component<SelectProps<T>, any> {
	handleChange = ( event: React.FormEvent<HTMLSelectElement> ) => {
		const { items, onChange } = this.props;
		const select = ( event.nativeEvent.target as HTMLInputElement );
		const selectedItem = items.find( item => item.toString() === select.value );
		onChange( selectedItem );
	}

	render() {
		const { selectedItem, items } = this.props;

		const options = items.map( ( item: T, index: number ) => (
			<option
				value={index}
				key={item.toString()}
			>
				{item.toString()}
			</option>
		));

		const value = items.findIndex( item => item === selectedItem );

		return (
			<select
				value={value}
				onChange={this.handleChange}
			>
				{options}
			</select>
		);
	}
}