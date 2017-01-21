import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import * as Moment from 'moment';
import { Theme } from '../themes/Theme';
import Store from '../stores/Store';
import Message from '../data-types/Message';
import User from '../data-types/User';

const TimeStampDiv = styled.div`
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

const TimeStamp = inject( 'store' )( observer(
    ( { store, children, isAuthor }: TimeStampProps ) => (
        <TimeStampDiv
            theme={store.activeTheme}
            isAuthor={isAuthor}
        >
            {children}
        </TimeStampDiv>
    )
));

const WrapperDiv = styled.div`
    background-color: ${props => props.isAuthor
        ? props.theme.color.secondary.toCss()
        : props.theme.color.primary.toCss()
    };
    color: ${props => props.isAuthor
        ? props.theme.color.font.toCss()
        : props.theme.color.secondaryFont.toCss()
    };
    float: ${props => props.isAuthor ? 'right' : 'left'};
    clear: both;
    margin-bottom: ${props => props.theme.sizing.gutter / 2}px;
    padding: ${props => props.theme.sizing.gutter / 2}px;
    border-radius: ${props => props.isAuthor
        ? '5px 0 5px 5px'
        : '0 5px 5px 5px'
    };
    box-shadow: ${props => props.theme.shading.boxShadow};
`;

interface WrapperProps {
    store?: Store;
    children?: any;
    isAuthor: boolean;
    loopKey: string;
}

const Wrapper = inject( 'store' )( observer(
    ( { store, children, isAuthor, loopKey }: WrapperProps ) => (
        <WrapperDiv
            theme={store.activeTheme}
            isAuthor={isAuthor}
            key={loopKey}
        >
            {children}
        </WrapperDiv>
    )
));

interface MessageViewProps {
    message: Message;
    author: User;
}

function MessageView( { message, author }: MessageViewProps ) {
    const isAuthor = message.getAuthor() === author;
    const name = isAuthor
        ? null
        : message.getAuthor().getName().split( ' ' )[ 0 ] + ' - ';
    const date = Moment( message.getDate() ).format( 'h:mma' );
    return (
        <div>
            <TimeStamp
                isAuthor={isAuthor}
            >
                {name}{date}
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

export default MessageView;