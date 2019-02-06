import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import HomePage from './Components/HomePage'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(<Provider store={store} ><HomePage /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
