import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Theme } from '../themes/Theme';
import Store from '../stores/Store';
import Message from '../data-types/Message';
import User from '../data-types/User';

const WrapperDiv = styled.div`
    background-color: ${props => props.isAuthor ? 'red' : 'grey'};
`;

interface WrapperProps {
    store?: Store;
    children?: any;
    isAuthor: boolean;
}

const Wrapper = inject( 'store' )( observer(
    ( { store, children, isAuthor }: WrapperProps ) => (
        <WrapperDiv isAuthor={isAuthor}>
            {children}
        </WrapperDiv>
    )
));

interface MessageViewProps {
    message: Message;
    author: User;
}

function MessageView( { message, author }: MessageViewProps ) {
    return (
        <Wrapper isAuthor={message.getAuthor() === author}>
            {message.getText()}
        </Wrapper>
    );
}

export default MessageView;