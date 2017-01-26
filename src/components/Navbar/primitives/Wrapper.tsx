import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Themes/Theme';

const Wrapper = styled.nav`
	color: ${props => props.theme.color.secondaryFont};
	display: flex;
	justify-content: space-between;
`;

interface WrapperProps {
    children?: React.ReactChildren;
    theme?: Theme;
}

export default ( props: WrapperProps ) => <Wrapper {...props} />;