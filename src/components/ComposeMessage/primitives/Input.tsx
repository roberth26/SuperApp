import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../Themes/Theme';

const Input = styled.input`
    appearance: none;
    border: 0;
    background-color: ${props => props.theme.color.background};
    flex-grow: 1;
    resize: none;
    padding: 0 ${props => props.theme.sizing.gutter}px;
    outline: 0;
    color: ${props => props.theme.color.font};
    
    &:focus {
        border: ${props => `
            1px
            solid
            ${props.theme.color.primary}
        `};
        border-right: 0;
    }
`;

interface InputProps {
    theme?: Theme;
    value: string;
    innerRef: ( el: Element ) => void;
    onChange: ( event: React.FormEvent<HTMLInputElement> ) => void;
    onKeyDown: ( event: KeyboardEvent ) => void;
}

export default ( props: InputProps ) => <Input {...props} />;