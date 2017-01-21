import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Theme } from '../themes/Theme';
import Store from '../stores/Store';
import Message from '../data-types/Message';
import User from '../data-types/User';
import MessageView from './MessageView';
import ComposeMessage from './ComposeMessage/ComposeMessage';

const WrapperDiv = styled.div`
    background-color: ${props => props.theme.color.background.toCss()};
    height: 360px;
    position: relative;
    display: flex;
    flex-direction: column;
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

interface MessageWrapperProps {
    store?: Store;
    children?: any;
}

@inject( 'store' )
@observer
class MessageWrapper extends React.Component<MessageWrapperProps, any> {
    scrollPane: Element;

    wrapper = styled.div`
        flex-grow: 1;
        overflow-y: auto;
        padding: ${props => props.theme.sizing.gutter / 2}px;
        position: relative;
        box-shadow: inset ${props => props.theme.shading.boxShadow};
    `;

    setScrollPane = ( scrollPane ) => {
        this.scrollPane = scrollPane;
    }

    componentDidMount() {
        this.scrollPane.scrollTop = this.scrollPane.scrollHeight;
    }

    componentDidUpdate() {
        this.scrollPane.scrollTop = this.scrollPane.scrollHeight;
    }

    render() {
        const { children, store } = this.props;
        return (
            <this.wrapper
                innerRef={this.setScrollPane}
                theme={store.activeTheme}
            >
                {children}
            </this.wrapper>
        );
    }
}

interface ChatProps {
    store?: Store;
    user: User;
}

function Chat( { store, user }: ChatProps ) {
    let messages = null;
    if ( store.messages.length ) {
        messages = store.messages.map((
            message: Message,
            index: number
        ) => (
            <MessageView
                key={message.getId()}
                message={message}
                author={user}
            />
        ));
    }
    return (
        <Wrapper>
            <MessageWrapper>
                {messages}
            </MessageWrapper>
            <ComposeMessage user={user} />
        </Wrapper>
    );
}

export default inject( 'store' )( observer( Chat ) );