import {
	observable,
	useStrict,
	action
} from 'mobx';
import { Theme } from '../themes/Theme';
import Midnight from '../themes/Midnight';
import Daylight from '../themes/Daylight';

useStrict( true );

export default class Store {
	@observable theme: Theme = new Midnight();
	@observable counter: number = 0;

	constructor() {
		setInterval( this.incrementCounter, 1000 );
	}

	@action setTheme = ( theme: Theme ) => {
		this.theme = theme;
	}

	@action incrementCounter = () => {
		this.counter += 1;
	}
}