import * as Shortid from 'shortid';
import { observable, action } from 'mobx';
import { Theme } from '../themes/Theme';

export default class User {
    private id: string;
    private name: string;
    @observable theme: Theme;

    constructor( name: string ) {
        this.name = name;
        this.id = Shortid.generate();
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getNameUrlFriendly(): string {
        return this.name.replace( ' ', '' );
    }

    @action setTheme( theme: Theme ) {
        this.theme = theme;
    }

    static fromJson( json ): ( theme: Theme ) => User {
        const user = new User( json.name );
        user.id = json.id;
        return ( theme: Theme ) => {
            user.theme = theme;
            return user;
        };
    }
}

export interface UserJson {
    id: string;
    name: string;
    themeId: string;
}