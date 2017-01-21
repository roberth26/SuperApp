import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import 'reset-css/reset.css';
import Store from './stores/Store';
import App from './components/App/App';

const store = new Store();

const app = (
    <Provider store={store}>
		<App />
	</Provider>
);

render(
	app,
    document.getElementById( 'root' )
);