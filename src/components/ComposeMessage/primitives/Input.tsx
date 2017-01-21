import * as React from 'react';
import { FormEvent } from '@types/react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Theme } from '../../../themes/Theme';
import Store from '../../../stores/Store';

const Input = styled.input`
    appearance: none;
    border: 0;
    background-color: ${props => props.theme.color.background.toCss()};
    flex-grow: 1;
    resize: none;
    padding: 0 ${props => props.theme.sizing.gutter}px;
    outline: 0;
    color: ${props => props.theme.color.font.toCss()};
    
    &:focus {
        border: ${props => `
            1px
            solid
            ${props.theme.color.primary.toCss()}
        `};
        border-right: 0;
    }
`;

interface InputProps {
    store?: Store;
    value: string;
    onChange: ( event: FormEvent<HTMLInputElement> ) => void;
    onKeyDown: ( event: KeyboardEvent ) => void;
}

export default inject( 'store' )( observer(
    ( props: InputProps ) => (
        <Input
            {...props}
            theme={props.store.activeTheme}
            placeholder="Compose a message..."
        />
    )
));