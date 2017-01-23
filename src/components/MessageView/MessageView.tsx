import * as React from 'react';
import * as Moment from 'moment';
import Message from '../../data-types/Message';
import User from '../../data-types/User';
import TimeStamp from './primitives/TimeStamp';
import Wrapper from './primitives/Wrapper';

interface MessageViewProps {
    message: Message;
    author: User;
}

export default function MessageView( { message, author }: MessageViewProps ) {
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
                isAuthor={isAuthor}
                loopKey={message.getId()}
            >
                {message.getText()}
            </Wrapper>
        </div>
    );
}