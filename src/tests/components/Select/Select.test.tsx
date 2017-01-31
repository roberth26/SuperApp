import * as React from 'react';
import { shallow } from 'enzyme';
import Select from '../../../components/Select/Select';

describe( '<Select />', () => {
    it( 'should render the items', () => {
        // arrange
        const items = new Array<string>(
            'test',
            'another',
            'something'
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

        const foundItems = select.find( 'option' )
            .map( option => option.props().children ) as string[];

        // assert
        expect( foundItems ).toEqual( items );
    });

    it( 'should return the selected item', () => {
        // arrange
        let selectedItem = 'test';
        const expectedItem = 'something';
        const items = new Array<string>(
            selectedItem,
            'another',
            expectedItem
        );
        function handleChange( newItem: string ) {
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
                    value : expectedItem
                }
            }
        };

        // act
        select.find( 'select' ).simulate( 'change', eventMock );

        // assert
        expect( selectedItem ).toEqual( expectedItem );
    });
});