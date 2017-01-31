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

        // assert
        expect( select.find( 'option' ).length ).toEqual( items.length );
    });
});