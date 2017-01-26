import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Themes/Theme';

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: ${props => props.theme.color.background};
`;

interface WrapperProps {
    children?: React.ReactChildren;
    theme?: Theme;
}

export default ( props: WrapperProps ) => <Wrapper {...props} />;