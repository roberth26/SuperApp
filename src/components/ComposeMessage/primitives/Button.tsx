import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Themes/Theme';

const Button = styled.button`
    appearance: none;
    border: 0;
    flex-basis: 100px;
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.secondaryFont};
    outline: 0;
    cursor: pointer;
`;

interface ButtonProps {
    type: string;
    children?: React.ReactChildren;
    theme?: Theme;
}

export default ( props: ButtonProps ) => <Button {...props} />;