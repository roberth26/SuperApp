import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Store from '../../../stores/Store';

const TimeStamp = styled.div`
    clear: both;
    float: ${props => props.isAuthor ? 'right' : 'left'};
    font-size: .8rem;
    margin-bottom: 5px;
    color: ${props => props.theme.color.font.toCss()};
`;

interface TimeStampProps {
    store?: Store;
    children?: any;
    isAuthor: boolean;
}

export default inject( 'store' )( observer(
    ( { store, children, isAuthor }: TimeStampProps ) => (
        <TimeStamp
            theme={store.activeTheme}
            isAuthor={isAuthor}
        >
            {children}
        </TimeStamp>
    )
));