import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './createRootReducer';
import routerScrollMiddleware from './routerScrollMiddleware';

export default (history) => {
    const rootReducer = createRootReducer(history);
    const middleware = [thunk, routerMiddleware(history), routerScrollMiddleware];

    return createStore(rootReducer, applyMiddleware(...middleware));
};
