import _ from 'lodash';

export default (store) => (next) => (action) => {
    if (action.type === '@@router/LOCATION_CHANGE') {
        const state = store.getState();
        const currentPathname = _.get(state, 'router.location.pathname', '');
        const targetPathname = _.get(action, 'payload.location.pathname', '');
        if (currentPathname !== targetPathname) {
            window.scrollTo(0, 0);
        }
    }

    next(action);
}