import types from './types';

export const initialState = {
    isProcessing: false,
    didProcess: false,
    processedCSV: null
};

const reducer = (state  = initialState, action) => {
    switch(action.type) {
        case types.PROCESS_REQUEST:
            console.log('in process');
            return {
                ...state,
                isProcessing: true,
                didProcess: false
            };
        case types.PROCESS_SUCCESS:
            console.log('inside reducer', action.payload.res);
            return {
                ...state,
                isProcessing: false,
                didProcess: true,
                processedCSV: action.payload.res
            };
        case types.PROCESS_FAILURE:
            console.log('failed');
            return {
                ...state,
                isProcessing: false
            };
        default:
            console.log('in default');
            return state;
    }
};

export default reducer;