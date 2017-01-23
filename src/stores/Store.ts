import {
	observable,
	useStrict,
	action,
	runInAction
} from 'mobx';
import Axios from 'axios';
import { Theme, themeFromJson, ThemeJson } from '../themes/Theme';
import DefaultTheme from '../themes/Default';
import User, { UserJson } from '../data-types/User';
import Message, { MessageJson } from '../data-types/Message';

useStrict( true );

export default class Store {
	@observable activeUser: User = null;
	@observable users = new Array<User>();
	@observable messages = new Array<Message>();
	defaultTheme = new DefaultTheme();
	@observable themes = new Array<Theme>( new DefaultTheme() );

	constructor() {
		this.fetchData();
	}

	@action setActiveUser = ( user: User ) => {
		this.activeUser = user;
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
		]).then( Axios.spread( ( users: any, messages: any, themes: any ) => {
			themes = themes.data as ThemeJson[];
			themes = this.themes.concat(
				themes.map( ( theme: ThemeJson ) => themeFromJson( theme ) )
			);

			users = users.data as UserJson[];
			users = this.users.concat(
				users.map( ( user: UserJson ) => (
					User.fromJson( user )(
						user.themeId
							? themes.find( theme => theme.id === user.themeId )
							: this.defaultTheme
					)
				))
			);

			let activeUser = users.find( ( user: User ) => (
				location.pathname === `/${user.getNameUrlFriendly()}`
			));
			activeUser = activeUser ? activeUser : users[ 0 ];

			messages = messages.data as MessageJson[];
			messages = this.messages.concat(
				messages.map( ( message: MessageJson ) => (
					Message.fromJson( message )(
						users.find( user => user.getId() === message.authorId )
					)
				))
			);

			runInAction(() => {
				this.activeUser = activeUser;
				this.users = users;
				this.messages = messages;
				this.themes = themes;
			});
		}));
	}
}