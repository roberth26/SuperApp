import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Store from '../../stores/Store';
import Card from '../primitives/Card';
import Container from '../primitives/Container';
import User from '../../data-types/User';
import Chat from '../Chat/Chat';
import { Theme } from '../../themes/Theme';
import Select from '../Select/Select';
const ThemeSelect = Select as new () => Select<Theme>;
import UserMeta from './primitives/UserMeta';
import KeyValuePair from '../../data-types/KeyValuePair';

interface UserPageProps {
    store?: Store;
	user: User;
}

function UserPage( { store, user }: UserPageProps ) {
    const { themes } = store;

    const handleThemeChange = ( { value: theme }: KeyValuePair<string, Theme> ) => {
        user.setTheme( theme );
    };

    const selectedTheme = new KeyValuePair<string, Theme>(
        user.theme.name,
        user.theme
    );

    const allThemes = themes.map(
        theme => new KeyValuePair<string, Theme>( theme.name, theme )
    );

    return (
        <Container>
            <Card>
                <UserMeta>
                    {user.getName()}
                    <ThemeSelect
                        selectedItem={selectedTheme}
                        items={allThemes}
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