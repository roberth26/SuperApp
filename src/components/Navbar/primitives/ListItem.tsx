import * as React from 'react';
import { EventHandler, MouseEvent } from '@types/react';
import styled from 'styled-components';
import Link from './Link';

const ListItem = styled.li`
	display: inline-block;
	margin-right: ${props => props.theme.sizing.gutter}px;
`;

interface ListItemProps {
	children: any;
	href: string;
	onClick: EventHandler<MouseEvent<HTMLAnchorElement>>;
	isActive: boolean;
}

export default ( props: ListItemProps ) => (
	<ListItem>
		<Link {...props} />
	</ListItem>
);