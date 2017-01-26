import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Themes/Theme';

const Wrapper = styled.div`
    background-color: ${props => props.theme.color.background};
    height: 360px;
    position: relative;
    display: flex;
    flex-direction: column;
`;

interface WrapperProps {
    children?: React.ReactChildren;
    theme?: Theme;
}

export default ( props: WrapperProps ) => <Wrapper {...props} />;