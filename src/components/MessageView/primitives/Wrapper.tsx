import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Themes/Theme';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignRight ? 'flex-end' : 'flex-start'};
    padding: 0 ${props => props.theme.sizing.gutter / 2}px;
    margin-bottom: ${props => props.theme.sizing.gutter / 2}px;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

interface WrapperProps {
    alignRight: boolean;
    children?: React.ReactChildren;
    theme?: Theme;
}

export default ( props: WrapperProps ) => <Wrapper {...props} />;