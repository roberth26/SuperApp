import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Store from '../../stores/Store';
import Card from '../primitives/Card';
import Container from '../primitives/Container';
import User from '../../data-types/User';
import Chat from '../Chat/Chat';
import { Theme } from '../../themes/Theme';
import Select from '../Select/Select';
import KeyValuePair from '../../data-types/KeyValuePair';
import UserMeta from './primitives/UserMeta';

interface UserPageProps {
    store?: Store;
	user: User;
}

function UserPage( { store, user }: UserPageProps ) {
    const { themes } = store;

    const selectedTheme = new KeyValuePair<string, string>(
        user.theme.id,
        user.theme.name
    );

    const themesList = themes.map( ( theme: Theme ) => (
        new KeyValuePair( theme.id, theme.name )
    ));

    const handleThemeChange = ( newTheme: KeyValuePair<string, string> ) => {
        const matchingTheme = themes.find( ( theme: Theme ) => theme.name === newTheme.value );
        user.setTheme( matchingTheme );
    };

    return (
        <Container>
            <Card>
                <UserMeta>
                    {user.getName()}
                    <Select
                        selectedItem={selectedTheme}
                        items={themesList}
                        onChange={handleThemeChange}
                    />
                </UserMeta>
            </Card>
            <Card>
                <Chat user={user} />
            </Card>
        </Container>
    );
}

export default inject( 'store' )( observer( UserPage ) );