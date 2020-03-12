import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import uploads from './uploads';

export default (history) =>
combineReducers({
    router: connectRouter(history),
    uploads
});
