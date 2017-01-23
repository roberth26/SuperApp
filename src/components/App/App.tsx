import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Match, Miss, Link, BrowserRouter } from 'react-router';
import { Theme, themeToJson } from '../../themes/Theme';
import Store from '../../stores/Store';
import Header from '../Header/Header';
import Card from '../primitives/Card';
import Container from '../primitives/Card';
import User from '../../data-types/User';
import UserPage from '../UserPage/UserPage';
import Wrapper from './primitives/Wrapper';
import GlobalStyles from './primitives/GlobalStyles';

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
		let userPage = null;
		if ( store.users.length ) {
			userPage = store.users.map( ( user: User, index: number ) => (
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
		} else {
			return null;
		}
		const theme = store.activeUser
			? themeToJson( store.activeUser.theme )
			: themeToJson( store.defaultTheme );
		return (
	   		<BrowserRouter>
			   <ThemeProvider theme={theme}>
					<Wrapper>
						<DevTools />
						<GlobalStyles theme={theme} />
						<Header />
						{userPage}
						<Miss render={renderUserPage.bind( null, store.users ? store.users[ 0 ] : null )} />
					</Wrapper>
				</ThemeProvider>
	    	</BrowserRouter>
	    );
	}
}

export default App;