import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Match, Miss, BrowserRouter } from 'react-router';
import { themeToJson } from '../../themes/Theme';
import Store from '../../stores/Store';
import Header from '../Header/Header';
import User from '../../data-types/User';
import UserPage from '../UserPage/UserPage';
import Wrapper from './primitives/Wrapper';
import GlobalStyles from './primitives/GlobalStyles';
import Lightbox from '../Lightbox/Lightbox';

const renderUserPage = ( user: User ) => (
	user
	? <UserPage user={user} />
	: null
);

interface AppProps {
	store?: Store;
}

@inject( 'store' )
@observer
class App extends React.Component<AppProps, any> {
	render() {
		const { store } = this.props;
		const { users, activeUser, defaultTheme } = store;

		if ( !users.length ) {
			return null;
		}

		const userPage = users.map( ( user: User, index: number ) => (
			index ? (
				<Match
					pattern={`/${user.getNameUrlFriendly()}`}
					render={renderUserPage.bind( null, user )}
					key={user.getId()}
				/>
			) : (
				<Match
					pattern="/"
					exactly
					render={renderUserPage.bind( null, user )}
					key={user.getId()}
				/>
			)
		));

		const theme = activeUser
			? themeToJson( activeUser.theme )
			: themeToJson( defaultTheme );

		return (
	   		<BrowserRouter>
			   <ThemeProvider theme={theme}>
					<Wrapper>
						<Lightbox>
							<DevTools />
							<GlobalStyles theme={theme} />
							<Header />
							{userPage}
							<Miss render={renderUserPage.bind( null, users )} />
						</Lightbox>
					</Wrapper>
				</ThemeProvider>
	    	</BrowserRouter>
	    );
	}
}

export default App;