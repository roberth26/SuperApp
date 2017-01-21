import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Match, Miss, Link, BrowserRouter } from 'react-router';
import { Theme } from '../../themes/Theme';
import Store from '../../stores/Store';
import Header from '../Header/Header';
import Card from '../primitives/Card';
import Container from '../primitives/Card';
import User from '../../data-types/User';
import UserPage from '../UserPage/UserPage';
import Wrapper from './primitives/Wrapper';
import GlobalStyles from './primitives/GlobalStyles';

interface AppProps {
	store?: Store;
}

const renderUserPage = ( user: User ) => (
	user
	? <UserPage user={user} />
	: null
);

@inject( 'store' )
@observer
class App extends React.Component<AppProps, any> {
	render() {
		const { store } = this.props;
		let userPage = null;
		if ( store.users.length ) {
			userPage = store.users.map( ( user: User, index: number ) => {
				if ( index === 0 ) {
					return (
						<Match
							pattern="/"
							exactly
							render={renderUserPage.bind( null, user )}
							key={user.getId()}
						/>
					);
				}
				return (
					<Match
						pattern={`/${user.getNameUrlFriendly()}`}
						render={renderUserPage.bind( null, user )}
						key={user.getId()}
					/>
				);
			});
		}
		return (
	   		<BrowserRouter>
		    	<Wrapper theme={store.activeTheme}>
		    		<GlobalStyles />
		    		<Header />
					{userPage}
					<Miss render={renderUserPage.bind( null, store.users ? store.users[ 0 ] : null )} />
	    		</Wrapper>
	    	</BrowserRouter>
	    );
	}
}

export default App;