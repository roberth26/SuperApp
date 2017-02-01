import * as React from 'react';
import { shallow } from 'enzyme';
import Select from '../../../components/Select/Select';
import KeyValuePair from '../../../data-types/KeyValuePair';

describe( '<Select />', () => {
    it( 'should render the items', () => {
        // arrange
        const items = new Array<KeyValuePair<string, string>>(
            new KeyValuePair( 'test', 'test' ),
            new KeyValuePair( 'another', 'another' ),
            new KeyValuePair( 'something', 'something' ),
        );
        const StringSelect = Select as new () => Select<string>;

        // act
        const select = shallow(
            <StringSelect
                items={items}
                selectedItem={items[ 0 ]}
                onChange={() => null}
            />
        );

        const foundItems = select.find( 'option' ).map(
            option => new KeyValuePair<string, string>(
                option.props().value as string,
                option.props().children as string
            )
        );

        // assert
        expect( foundItems ).toEqual( items );
    });

    it( 'should return the selected item', () => {
        // arrange
        let selectedItem = new KeyValuePair<string, string>( 'test', 'test' );
        const expectedItem = new KeyValuePair<string, string>( 'something', 'something' );
        const items = new Array<KeyValuePair<string, string>>(
            selectedItem,
            new KeyValuePair<string, string>( 'another', 'another' ),
            expectedItem
        );
        function handleChange( newItem: KeyValuePair<string, string> ) {
            selectedItem = newItem;
        };

        const StringSelect = Select as new () => Select<string>;

        const select = shallow(
            <StringSelect
                items={items}
                selectedItem={selectedItem}
                onChange={handleChange}
            />
        );

        const eventMock = {
            nativeEvent: {
                target: {
                    value : expectedItem.key
                }
            }
        };

        // act
        select.find( 'select' ).simulate( 'change', eventMock );

        // assert
        expect( selectedItem ).toEqual( expectedItem );
    });
});