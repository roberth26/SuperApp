import * as React from 'react';
import { FormEvent } from '@types/react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Theme } from '../../../themes/Theme';
import Store from '../../../stores/Store';

export default styled.input`
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