import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Themes/Theme';

const ListItem = styled.li`
	display: inline-block;
	margin-right: ${props => props.theme.sizing.gutter}px;
`;

interface ListItemProps {
	children?: any;
	theme?: Theme;
}

export default ( props: ListItemProps ) => <ListItem {...props} />;