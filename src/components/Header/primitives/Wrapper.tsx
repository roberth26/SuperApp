import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Themes/Theme';

const Wrapper = styled.header`
	background: ${props => props.theme.color.primary};
	padding: ${props => props.theme.sizing.gutter}px 0;
	margin-bottom: ${props => props.theme.sizing.gutter};
`;

interface WrapperProps {
    children?: React.ReactChildren;
    theme?: Theme;
}

export default ( props: WrapperProps ) => <Wrapper {...props} />;