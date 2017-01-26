import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Themes/Theme';

const Wrapper = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    padding: ${props => props.theme.sizing.gutter / 2}px 0;
    position: relative;
    box-shadow: inset ${props => props.theme.shading.boxShadow};
`;

interface WrapperProps {
    children?: React.ReactChildren;
    theme?: Theme;
    innerRef?: ( el: Element ) => void;
}

export default ( props: WrapperProps ) => <Wrapper {...props} />;