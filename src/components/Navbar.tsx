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
				<Link to="/" exactly activeOnlyWhenExact>
					{props => <NavLink {...props}>Home</NavLink>}
				</Link>
				<Link to="/tools">
					{props => <NavLink {...props}>Tools</NavLink>}
				</Link>
			</NavList>
			<ThemeSelect />
		</Nav>
	);
}

interface NavLinkProps {
	store?: Store;
	children: any;
	href: string;
	onClick: EventHandler<MouseEvent<HTMLAnchorElement>>;
	isActive: boolean;
}

const NavLink = inject( 'store' )( observer(
	( props: NavLinkProps ) => {
		const {
			store,
			children,
			href,
			onClick,
			isActive
		} = props;
		return (
			<StyledLink
				isActive={isActive}
				theme={store.theme}
				onClick={onClick}
				href={href}
			>
				{children}
			</StyledLink>
		);
	}
));

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