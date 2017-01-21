import * as React from 'react';
import { FormEvent } from '@types/react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Theme } from '../../../themes/Theme';
import Store from '../../../stores/Store';

const StyledButton = styled.button`
    appearance: none;
    border: 0;
    flex-basis: 100px;
    background-color: ${props => props.theme.color.primary.toCss()};
    color: ${props => props.theme.color.secondaryFont.toCss()};
    outline: 0;
    cursor: pointer;
`;

interface ButtonProps {
    store?: Store;
    children?: string;
    type: string;
}

export default inject( 'store' )( observer(
    ( { store, type, children }: ButtonProps ) => (
        <StyledButton
            type={type}
            theme={store.activeTheme}
        >
            {children}
        </StyledButton>
    )
));