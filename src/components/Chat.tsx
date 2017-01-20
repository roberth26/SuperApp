import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Theme } from '../themes/Theme';
import Store from '../stores/Store';
import Message from '../data-types/Message';
import User from '../data-types/User';
import MessageView from './MessageView';
import ComposeMessage from './ComposeMessage';

const WrapperDiv = styled.div`
    background-color: ${props => props.theme.color.background.toCss()};
    height: 60px;
`;

interface WrapperProps {
    store?: Store;
    children?: any;
}

const Wrapper = inject( 'store' )( observer(
    ( { store, children }: WrapperProps ) => (
        <WrapperDiv theme={store.activeTheme}>
            {children}
        </WrapperDiv>
    )
));

interface ChatProps {
    store?: Store;
    user: User;
}

function Chat( { store, user }: ChatProps ) {
    const messages = store.messages.map((
        message: Message,
        index: number
    ) => (
        <MessageView
            key={message.getId()}
            message={message}
            author={user}
        />
    ));
    return (
        <Wrapper>
            {messages}
            <ComposeMessage user={user} />
        </Wrapper>
    );
}

export default inject( 'store' )( observer( Chat ) );