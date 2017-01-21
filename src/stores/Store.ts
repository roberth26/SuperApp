import {
	observable,
	useStrict,
	action
} from 'mobx';
import Axios from 'axios';
import { Theme, themeFromJson, ThemeJson } from '../themes/Theme';
import Daylight from '../themes/Daylight';
import User, { UserJson } from '../data-types/User';
import Message, { MessageJson } from '../data-types/Message';

useStrict( true );

export default class Store {
	@observable users = new Array<User>();
	@observable messages = new Array<Message>();
	@observable activeTheme = new Daylight();
	@observable themes = new Array<Theme>( new Daylight() );

	constructor() {
		this.fetchData();
	}

	@action setActiveTheme = ( theme: Theme ) => {
		this.activeTheme = theme;
	}

	@action addMessage( messageText: string, author: User ) {
		const message = new Message( messageText, author );
		this.messages.push( message );
	}

	@action fetchData() {
		Axios.all([
			Axios.get( 'data/users.json' ),
			Axios.get( 'data/messages.json' ),
			Axios.get( 'data/themes.json' )
		]).then( Axios.spread( action( ( users: any, messages: any, themes: any ) => {
			users = users.data as UserJson[];
			this.users = this.users.concat(
				users.map( ( user: UserJson ) => User.fromJson( user ) )
			);

			messages = messages.data as MessageJson[];
			this.messages = this.messages.concat(
				messages.map( ( message: MessageJson ) => (
					Message.fromJson( message )(
						this.users.find( user => user.getId() === message.authorId )
					)
				))
			);

			themes = themes.data as ThemeJson[];
			this.themes = this.themes.concat(
				themes.map( ( theme: ThemeJson ) => themeFromJson( theme ) )
			);
		})));
	}
}