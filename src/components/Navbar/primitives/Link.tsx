import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Themes/Theme';

const Link = styled.a`
	color: ${props => props.theme.color.secondaryFont};
	opacity: ${props => props.isActive ? 1 : .65};
	text-decoration: none;
`;

interface LinkProps {
    children?: React.ReactChildren;
    theme?: Theme;
	isActive: boolean;
}

export default ( props: LinkProps ) => <Link {...props} />;