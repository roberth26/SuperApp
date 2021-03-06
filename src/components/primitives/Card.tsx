import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../Themes/Theme';

const Card = styled.div`
	background-color: ${props => props.theme.color.secondary};
	border-radius: 5px;
	box-shadow: ${props => props.theme.shading.boxShadow};
	padding: ${props => props.theme.sizing.gutter}px;
	color: ${props => props.theme.color.font};
	margin-bottom: ${props => props.theme.sizing.gutter};
	position: relative;

	&:last-of-type {
		margin-bottom: 0;
	}
`;

interface CardProps {
    children?: React.ReactChildren;
    theme?: Theme;
}

export default ( props: CardProps ) => <Card {...props} />;