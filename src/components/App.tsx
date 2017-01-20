import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Match, Miss, Link, BrowserRouter } from 'react-router';
import { Theme } from '../themes/Theme';
import Store from '../stores/Store';
import Header from './Header';
import { Card, Container } from './Primitives';
import User from '../data-types/User';
import UserPage from './UserPage';

interface AppProps {
	store?: Store;
}

const renderUserPage = ( user: User ) => (
	<UserPage user={user} />
);

@inject( 'store' )
@observer
class App extends React.Component<AppProps, any> {
	render() {
		const { store } = this.props;
		const userPage = store.users.map( ( user: User, index: number ) => {
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
		return (
	   		<BrowserRouter>
		    	<Wrapper theme={store.activeTheme}>
		    		<GlobalStyles />
		    		<Header />
					{userPage}
					<Miss render={renderUserPage.bind( null, store.users[ 0 ] )} />
	    		</Wrapper>
	    	</BrowserRouter>
	    );
	}
}

export default App;

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: ${props => props.theme.color.background.toCss()};
`;

const GlobalStyles = inject( 'store' )( observer(
	( { store }: { store?: Store } ) => {
		const css = `
			${!store.activeTheme.sizing.borderBox ? '' : `
				*,
				*:before,
				*:after {
					box-sizing: border-box;					
				}
			`}
			
			html {
				font-family: ${store.activeTheme.font.primary};
			}
		`;
		return <style>{css}</style>;
	}
));