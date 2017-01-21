import * as React from 'react';
import { FormEvent } from '@types/react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Theme } from '../../../themes/Theme';
import Store from '../../../stores/Store';

const StyledForm = styled.form`
    display: flex;
    flex-shrink: 0;
    flex-basis: 50px;
    flex-basis: ${props => (
        props.theme.sizing.borderBox
        ? 70
        : 70 - ( props.theme.sizing.gutter / 2 )
    )}px;
    border-top: ${props => `
        ${props.theme.sizing.gutter / 2}px
        solid
        ${props.theme.color.secondary.toCss()}
    `};
`;

interface FormProps {
    store?: Store;
    onSubmit: ( event: FormEvent<HTMLFormElement> ) => void;
    children?: any;
}

export default inject( 'store' )( observer(
    ( { store, onSubmit, children }: FormProps ) => (
        <StyledForm
            theme={store.activeTheme}
            onSubmit={onSubmit}
        >
            {children}
        </StyledForm>
    )
));