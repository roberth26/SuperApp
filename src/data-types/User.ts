import * as Shortid from 'shortid';

export default class User {
    private id: string;
    private name: string;

    constructor( name: string ) {
        this.name = name;
        this.id = Shortid.generate();
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getNameUrlFriendly() {
        return this.name.replace( ' ', '' );
    }
}