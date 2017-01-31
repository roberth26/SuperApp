import * as React from 'react';

interface SelectProps<T> {
	selectedItem: T;
	items: T[];
	onChange: ( newItem: T ) => void;
}

export default class Select<T> extends React.Component<SelectProps<T>, any> {
	handleChange = ( event: React.FormEvent<HTMLSelectElement> ) => {
		const { items, onChange } = this.props;
		const select = ( event.nativeEvent.target as HTMLSelectElement );
		const selectedIndex = items.findIndex( item => item.toString() === select.value );
		onChange( items[ selectedIndex ] );
	}

	render() {
		const { selectedItem, items } = this.props;

		const options = items.map( ( item: T, index: number ) => (
			<option
				value={item.toString()}
				key={item.toString()}
			>
				{item.toString()}
			</option>
		));

		return (
			<select
				value={selectedItem.toString()}
				onChange={this.handleChange}
			>
				{options}
			</select>
		);
	}
}