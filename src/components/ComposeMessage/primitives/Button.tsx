import * as React from 'react';
import { FormEvent } from '@types/react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Theme } from '../../../themes/Theme';
import Store from '../../../stores/Store';

export default styled.button`
    appearance: none;
    border: 0;
    flex-basis: 100px;
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.secondaryFont};
    outline: 0;
    cursor: pointer;
`;