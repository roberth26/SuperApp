import * as React from 'react';
import { EventHandler, MouseEvent } from '@types/react';
import { inject, observer } from 'mobx-react';
import { Link, Match, Redirect } from 'react-router';
import Store from '../../stores/Store';
import { Theme } from '../../themes/Theme';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import User from '../../data-types/User';
import Wrapper from './primitives/Wrapper';
import List from './primitives/List';
import ListItem from './primitives/ListItem';

const renderListItem = ( user: User, props ) => (
	<ListItem {...props}>
		{user.getName()}
	</ListItem>
);

const renderListItems = ( store: Store ) => {
    if ( !store.users.length ) {
        return null;
    }
    return (
		store.users.map( ( user: User, index: number ) => (
            index ? (
				<Link
					to={`/${user.getNameUrlFriendly()}`}
					key={user.getId()}
				>
					{renderListItem.bind( null, user )}
				</Link>
            ) : (
                <Link
                    to="/"
                    exactly
                    activeOnlyWhenExact
                    key={user.getId()}
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

function Navbar( props: NavbarProps ) {
	const { store } = props;
	return (
		<Wrapper theme={store.activeTheme}>
            <List theme={store.activeTheme}>
				{renderListItems( store )}
			</List>
			<ThemeSelect />
		</Wrapper>
	);
}

export default inject( 'store' )( observer( Navbar ) );