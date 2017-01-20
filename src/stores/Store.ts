import {
	observable,
	useStrict,
	action
} from 'mobx';
import { Theme } from '../themes/Theme';
import Midnight from '../themes/Midnight';
import Daylight from '../themes/Daylight';
import User from '../data-types/User';
import Message from '../data-types/Message';

useStrict( true );

export default class Store {
	@observable users: User[];
	@observable messages: Message[];
	@observable activeTheme = new Midnight();
	@observable themes = [
		new Midnight(),
		new Daylight()
	];

	constructor() {
		const donald = new User( 'Donald Trump' );
		const meryl = new User( 'Meryl Streep' );

		this.users = new Array<User>(
			donald,
			meryl,
			new User( 'Robert Hall' )
		);

		const message1 = new Message( donald, 'Overrated! Sad.' );
		const message2 = new Message( meryl, 'You\'re a pig.' );

		this.messages = new Array<Message>(
			message1,
			message2
		);
	}

	@action setActiveTheme = ( theme: Theme ) => {
		this.activeTheme = theme;
	}

	@action addMessage( messageText: string, author: User ) {
		const message = new Message( author, messageText );
		this.messages.push( message );
	}
}