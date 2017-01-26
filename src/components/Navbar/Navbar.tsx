import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link as RouterLink } from 'react-router';
import Store from '../../stores/Store';
import User from '../../data-types/User';
import Wrapper from './primitives/Wrapper';
import List from './primitives/List';
import ListItem from './primitives/ListItem';
import Link from './primitives/Link';

const handleClick = ( user: User, store: Store ) => {
    store.setActiveUser( user );
};

const renderListItem = ( user: User, props ) => (
	<ListItem>
        <Link {...props}>
		    {user.getName()}
        </Link>
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
                <RouterLink
                    to={`/${user.getNameUrlFriendly()}`}
                    key={user.getId()}
                    onClick={handleClick.bind( null, user, store )}
                >
                    {renderListItem.bind( null, user )}
                </RouterLink>
            ) : (
                <RouterLink
                    to="/"
                    exactly
                    activeOnlyWhenExact
                    key={user.getId()}
                    onClick={handleClick.bind( null, user, store )}
                >
                    {renderListItem.bind( null, user )}
                </RouterLink>
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