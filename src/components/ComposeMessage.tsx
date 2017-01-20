import * as React from 'react';
import { FormEvent } from '@types/react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Theme } from '../themes/Theme';
import Store from '../stores/Store';
import Message from '../data-types/Message';
import User from '../data-types/User';

const StyledTextArea = styled.textarea`
    appearance: none;
    height: 60px;
    background-color: red;
`;

interface TextAreaProps {
    store?: Store;
    value: string;
    onChange: ( event: FormEvent<HTMLTextAreaElement> ) => void;
    onKeyDown: ( event: KeyboardEvent ) => void;
}

const TextArea = inject( 'store' )( observer(
    ( { store, value, onChange, onKeyDown }: TextAreaProps ) => (
        <StyledTextArea
            theme={store.activeTheme}
            value={value}
            placeholder="Compose a message..."
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
));

interface ComposeMessageProps {
    store?: Store;
    user: User;
}

@inject( 'store' )
@observer
class ComposeMessage extends React.Component<ComposeMessageProps, any> {
    textArea: Element;
    state = {
        messageText: ''
    };

    handleSubmit = ( event?: FormEvent<HTMLFormElement> ) => {
        if ( event ) {
            event.preventDefault();
        }
        this.props.store.addMessage(
            this.state.messageText,
            this.props.user
        );
        this.setState({
            messageText: ''
        });
    }

    handleTextAreaChange = ( event: FormEvent<HTMLTextAreaElement> ) => {
        const textArea = ( event.nativeEvent.target as HTMLTextAreaElement );
        this.setState({
            messageText: textArea.value
        });
    }

    handleKeyDown = ( event: KeyboardEvent ) => {
         if ( event.keyCode === 13 ) {
             this.handleSubmit();
         }
    }

    storeTextAreaElement = ( textArea ) => {
        this.textArea = textArea;
    }

	render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextArea
                    ref={this.storeTextAreaElement}
                    value={this.state.messageText}
                    onChange={this.handleTextAreaChange}
                    onKeyDown={this.handleKeyDown}
                />
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default ComposeMessage;