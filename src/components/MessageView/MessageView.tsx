import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import * as Moment from 'moment';
import { Theme } from '../../themes/Theme';
import Store from '../../stores/Store';
import Message from '../../data-types/Message';
import User from '../../data-types/User';
import TimeStamp from './primitives/TimeStamp';
import Wrapper from './primitives/Wrapper';

interface MessageViewProps {
    store?: Store;
    message: Message;
    author: User;
}

function MessageView( { message, author, store }: MessageViewProps ) {
    const isAuthor = message.getAuthor() === author;
    const name = isAuthor
        ? null
        : message.getAuthor().getName().split( ' ' )[ 0 ];
    const date = Moment( message.getDate() ).format( 'h:mma' );
    return (
        <div>
            <TimeStamp isAuthor={isAuthor}>
                {`${name ? `${name} - ${date}` : date}`}
            </TimeStamp>
            <Wrapper
                theme={store.activeTheme}
                isAuthor={isAuthor}
                loopKey={message.getId()}
            >
                {message.getText()}
            </Wrapper>
        </div>
    );
}

export default inject( 'store' )( observer( MessageView ) );