import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';
import Store from '../../stores/Store';
import User from '../../data-types/User';
import Wrapper from './primitives/Wrapper';
import List from './primitives/List';
import ListItem from './primitives/ListItem';

const handleClick = ( user: User, store: Store ) => {
    store.setActiveUser( user );
};

const renderListItem = ( user: User, props ) => (
	<ListItem {...props}>
		{user.getName()}
	</ListItem>
);

const renderListItems = ( store: Store ) => {
    const { users } = store;

    if ( !users.length ) {
        return null;
    }

    return (
		users.map( ( user: User, index: number ) => (
            index ? (
                <Link
                    to={`/${user.getNameUrlFriendly()}`}
                    key={user.getId()}
                    onClick={handleClick.bind( null, user, store )}
                >
                    {renderListItem.bind( null, user )}
                </Link>
            ) : (
                <Link
                    to="/"
                    exactly
                    activeOnlyWhenExact
                    key={user.getId()}
                    onClick={handleClick.bind( null, user, store )}
                >
                    {renderListItem.bind( null, user )}
                </Link>
            )
        ))
    );
};

interface NavbarProps {
	store?: Store;
}

function Navbar( { store }: NavbarProps ) {
	return (
		<Wrapper>
            <List>
				{renderListItems( store )}
			</List>
		</Wrapper>
	);
}

export default inject( 'store' )( observer( Navbar ) );