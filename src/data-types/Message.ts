import * as Shortid from 'shortid';
import User from './User';

export default class Message {
    private id: string;
    private author: User;
    private date: Date;
    private text: string;

    constructor( author: User, text: string ) {
        this.author = author;
        this.text = text;
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
}