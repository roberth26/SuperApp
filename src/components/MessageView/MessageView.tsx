import * as React from 'react';
import * as Moment from 'moment';
import * as Shortid from 'shortid';
import { inject } from 'mobx-react';
import Message from '../../data-types/Message';
import Container from '../primitives/Container';
import TimeStamp from './primitives/TimeStamp';
import Wrapper from './primitives/Wrapper';
import Bubble from './primitives/Bubble';
import Title from './primitives/Title';
import Lightboxable from '../Lightbox/Lightboxable';

interface MessageViewProps extends Lightboxable {
    message: Message;
    selfAuthored: boolean;
}

@inject( 'lightboxAdd' )
export default class MessageView extends React.Component<MessageViewProps, any> {
    id = Shortid.generate();

    openLightbox = () => {
        const { lightboxAdd, message, selfAuthored } = this.props;
        const date = Moment( message.getDate() ).format( 'h:mma' );

        lightboxAdd(
            this.id,
            <Container>
                <Bubble selfAuthored={selfAuthored}>
                    <Title>{message.getAuthor().getName()} - {date}</Title>
                    {message.getText()}
                </Bubble>
            </Container>
        );
    }

    render() {
        const { message, selfAuthored } = this.props;
        const date = Moment( message.getDate() ).format( 'h:mma' );
        const firstName = message.getAuthor().getName().split( ' ' )[ 0 ];
        const meta = selfAuthored ? date : `${firstName} - ${date}`;

        return (
            <Wrapper alignRight={selfAuthored}>
                <TimeStamp>
                    {meta}
                </TimeStamp>
                <Bubble
                    selfAuthored={selfAuthored}
                    onClick={this.openLightbox}
                >
                    {message.getText()}
                </Bubble>
            </Wrapper>
        );
    }
}