import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Store from '../../stores/Store';
import Card from '../primitives/Card';
import Container from '../primitives/Container';
import User from '../../data-types/User';
import Chat from '../Chat/Chat';
import { Theme } from '../../themes/Theme';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import UserMeta from './primitives/UserMeta';

interface UserPageProps {
    store?: Store;
	user: User;
}

function UserPage( { store, user }: UserPageProps ) {
    const handleThemeChange = ( newTheme: Theme ) => {
        user.setTheme( newTheme );
    };

    return (
        <Container>
            <Card>
                <UserMeta>
                    {user.getName()}
                    <ThemeSelect
                        activeTheme={user.theme}
                        themes={store.themes}
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