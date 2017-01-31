import * as React from 'react';
import { FormEvent } from '@types/react';
import { observer, inject } from 'mobx-react';
import Store from '../../stores/Store';
import User from '../../data-types/User';
import Input from './primitives/Input';
import Button from './primitives/Button';
import Form from './primitives/Form';

interface ComposeMessageProps {
    store?: Store;
    user: User;
}

@inject( 'store' )
@observer
class ComposeMessage extends React.Component<ComposeMessageProps, any> {
    input: Element;
    state = {
        messageText: ''
    };

    handleSubmit = ( event?: FormEvent<HTMLFormElement> ) => {
        if ( event ) {
            event.preventDefault();
        }
        if ( !this.state.messageText.trim() ) {
            return;
        }
        this.props.store.addMessage(
            this.state.messageText,
            this.props.user
        );
        this.setState({
            messageText: ''
        });
    }

    handleInputChange = ( event: FormEvent<HTMLInputElement> ) => {
        const input = ( event.nativeEvent.target as HTMLInputElement );
        this.setState({
            messageText: input.value
        });
    }

    handleKeyDown = ( event: KeyboardEvent ) => {
         if ( event.keyCode === 13 ) {
             this.handleSubmit();
             event.preventDefault();
         }
    }

    storeInputElement = ( input ) => {
        this.input = input;
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input
                    innerRef={this.storeInputElement}
                    value={this.state.messageText}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                />
                <Button type="submit">Send</Button>
            </Form>
        );
    }
}

export default ComposeMessage;