import * as React from 'react';
import { EventHandler, MouseEvent } from '@types/react';
import { inject, observer } from 'mobx-react';
import { Link, Match, Redirect } from 'react-router';
import styled from 'styled-components';
import Store from '../stores/Store';
import { Theme } from '../themes/Theme';
import ThemeSelect from './ThemeSelect';

interface NavbarProps {
	store?: Store;
}

function Navbar( props: NavbarProps ) {
	const { store } = props;
	return (
		<Nav theme={store.theme}>
			<NavList theme={store.theme}>
				<Link to="/home" exactly>
					{RenderNavLink.bind( null, 'Home', store.theme )}
				</Link>
				<Link to="/tools">
					{RenderNavLink.bind( null, 'Tools', store.theme )}
				</Link>
				{/*
				<li>
					<NavItem to="/">Home</NavItem>
				</li>
				<li>
					<NavItem to="/tools">Tools</NavItem>
				</li>
				*/}
			</NavList>
			<Match pattern="/" exactly render={() => (
				<Redirect to="/home"/>
			)}/>
			<ThemeSelect alignRight={true} />
		</Nav>
	);
}

function RenderNavLink(
	text: string,
	theme: Theme,
	inheritedProps: {
		href: string,
		onClick: EventHandler<MouseEvent<HTMLAnchorElement>>,
		isActive: boolean
	}
) {
	const {
		href,
		onClick,
		isActive
	} = inheritedProps;
	return (
		<StyledLink
			isActive={isActive}
			theme={theme}
			onClick={onClick}
			href={href}
		>
			{text}
		</StyledLink>
	);
}

const Nav = styled.nav`
	color: ${props => props.theme.color.secondaryFont.toCss()};
	display: flex;
	justify-content: space-between;
`;

const NavList = styled.ul`
	li {
		display: inline;
		margin-right: ${props => props.theme.sizing.gutter}px;
	}
`;

const StyledLink = styled.a`
	color: ${props => props.theme.color.secondaryFont.toCss()};
	opacity: ${props => props.isActive ? 1 : .65};
	margin-right: ${props => props.theme.sizing.gutter}px;
	text-decoration: none;
`;

export default inject( 'store' )( observer( Navbar ) );