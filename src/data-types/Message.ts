import * as Shortid from 'shortid';
import User from './User';

export default class Message {
    private id: string;
    private author: User;
    private date: Date;
    private text: string;

    constructor( text: string, author?: User ) {
        this.text = text;
        if ( author ) {
            this.author = author;
        }
        this.id = Shortid.generate();
        this.date = new Date();
    }

    public getId(): string {
        return this.id;
    }

    public getAuthor(): User {
        return this.author;
    }

    public getDate(): Date {
        return new Date( this.date.getTime() );
    }

    public getText(): string {
        return this.text;
    }

    static fromJson( json: MessageJson ): ( author: User ) => Message {
        const message = new Message( json.text );
        message.date = new Date( json.date );
        message.id = json.id;
        return ( author: User ) => {
            message.author = author;
            return message;
        };
    }
}

export interface MessageJson {
    id: string;
    authorId: string;
    date: string;
    text: string;
}