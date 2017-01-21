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

    static fromJson( json ): User {
        const user = new User( json.name );
        user.id = json.id;
        return user;
    }
}

export interface UserJson {
    id: string;
    name: string;
}