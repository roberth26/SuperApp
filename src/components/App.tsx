import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Match, Miss, Link, BrowserRouter } from 'react-router';
import { Theme } from '../themes/Theme';
import Store from '../stores/Store';
import Header from './Header';
import HomePage from '../pages/HomePage';
import ToolsPage from '../pages/ToolsPage';

interface AppProps {
	store?: Store;
}

@inject( 'store' )
@observer
class App extends React.Component<AppProps, any> {
	render() {
		const { store } = this.props;
	    return (
	   		<BrowserRouter>
		    	<Wrapper theme={store.theme}>
		    		<GlobalStyles />
		    		<Header />
		    		<Match pattern="/" exactly render={() => (
		    			<HomePage />
					)} />
		    		<Match pattern="/tools" render={() => (
		    			<ToolsPage />
					)} />
		    		<Miss render={() => (
		    			<HomePage />
					)} />
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
	( { store }: { store?: Store } ) => (
		<style>{`
			${!store.theme.sizing.borderBox ? '' : `
				*,
				*:before,
				*:after {
					box-sizing: border-box;					
				}
			`}
			
			html {
				font-family: ${store.theme.font.primary};
			}
		`}</style>
	)
));