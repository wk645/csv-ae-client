import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import Root from './components/Root';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

const history = createBrowserHistory();
const store = configureStore(history);

const rootElement = document.getElementById('root');
render(<Root history={history} store={store} />, rootElement);
