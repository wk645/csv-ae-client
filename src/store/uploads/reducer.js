import types from './types';

export const initialState = {
    isProcessing: false,
    didProcess: false,
    processedCSV: null
};

const reducer = (state  = initialState, action) => {
    switch(action.type) {
        case types.PROCESS_REQUEST:
            return {
                ...state,
                isProcessing: true,
                didProcess: false
            };
        case types.PROCESS_SUCCESS:
            return {
                ...state,
                isProcessing: false,
                didProcess: true,
                processedCSV: action.payload.res
            };
        case types.PROCESS_FAILURE:
            return {
                ...state,
                isProcessing: false
            };
        default:
            return state;
    }
};

export default reducer;