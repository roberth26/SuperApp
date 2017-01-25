import * as React from 'react';
import * as Moment from 'moment';
import Message from '../../data-types/Message';
import TimeStamp from './primitives/TimeStamp';
import Wrapper from './primitives/Wrapper';
import Bubble from './primitives/Bubble';

interface MessageViewProps {
    message: Message;
    selfAuthored: boolean;
}

export default function MessageView( { message, selfAuthored }: MessageViewProps ) {
    const date = Moment( message.getDate() ).format( 'h:mma' );
    const firstName = message.getAuthor().getName().split( ' ' )[ 0 ];
    const meta = selfAuthored ? date : `${firstName} - ${date}`;

    return (
        <Wrapper alignRight={selfAuthored}>
            <TimeStamp>
                {meta}
            </TimeStamp>
            <Bubble>
                {message.getText()}
            </Bubble>
        </Wrapper>
    );
}