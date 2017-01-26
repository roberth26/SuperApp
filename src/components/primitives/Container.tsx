import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../Themes/Theme';

const Container = styled.div`
	max-width: ${props => props.theme.sizing.borderBox
		? '100%'
		: `calc( 100% - ${props.theme.sizing.gutter}px )`
	}
	width: ${props => (
		props.theme.sizing.maxWidth
		+ props.theme.sizing.gutter
	)}px;
	padding: 0 ${props => ( props.theme.sizing.gutter / 2 )}px;
	margin: 0 auto;
	position: relative;
`;

interface ContainerProps {
    children?: React.ReactChildren;
    theme?: Theme;
}

export default ( props: ContainerProps ) => <Container {...props} />;