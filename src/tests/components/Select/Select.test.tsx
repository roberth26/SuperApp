import * as React from 'react';
import { shallow } from 'enzyme';
import Select from '../../../components/Select/Select';
import KeyValuePair from '../../../data-types/KeyValuePair';

describe( '<Select />', () => {
    it( 'should render the items', () => {
        // arrange
        const items = new Array<KeyValuePair<string, string>>(
            new KeyValuePair( 'test', 'assaasasas' ),
            new KeyValuePair( 'test', 'assaasasas' )
        );

        // act
        const select = shallow(
            <Select
                items={items}
                selectedItem={items[ 0 ]}
                onChange={() => null}
            />
        );

        // assert
        expect( select.find( 'option' ).length ).toEqual( items.length );
    });
});