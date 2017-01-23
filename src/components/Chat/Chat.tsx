import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Store from '../../stores/Store';
import Message from '../../data-types/Message';
import User from '../../data-types/User';
import MessageView from '../MessageView/MessageView';
import ComposeMessage from '../ComposeMessage/ComposeMessage';
import ScrollPane from '../ScrollPane/ScrollPane';
import Wrapper from './primitives/Wrapper';

const renderMessages = ( messages: Message[], user: User ) => (
    !messages.length
        ? null
        : (
            messages.map((
                message: Message,
                index: number
            ) => (
                <MessageView
                    key={message.getId()}
                    message={message}
                    author={user}
                />
            ))
        )
);

interface ChatProps {
    store?: Store;
    user: User;
}

function Chat( { store, user }: ChatProps ) {
    return (
        <Wrapper>
            <ScrollPane>
                {renderMessages( store.messages, user )}
            </ScrollPane>
            <ComposeMessage user={user} />
        </Wrapper>
    );
}

export default inject( 'store' )( observer( Chat ) );