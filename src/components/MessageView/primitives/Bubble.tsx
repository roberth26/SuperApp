import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Themes/Theme';

const Bubble = styled.div`
    background-color: ${props => props.selfAuthored
        ? props.theme.color.secondary
        : props.theme.color.primary
    };
    color: ${props => props.selfAuthored
        ? props.theme.color.font
        : props.theme.color.secondaryFont
    };
    padding: ${props => props.theme.sizing.gutter / 2}px;
    border-radius: ${props => props.selfAuthored
        ? '5px 0 5px 5px'
        : '0 5px 5px 5px'
    };
    box-shadow: ${props => props.theme.shading.boxShadow};
    cursor: pointer;
`;

interface BubbleProps {
    selfAuthored?: boolean;
    children?: React.ReactChildren;
    theme?: Theme;
    onClick?: () => void;
}

export default ( props: BubbleProps ) => <Bubble {...props} />;