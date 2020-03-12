import UploadService from '../../services/uploadService';
import types from './types';
import axios from 'axios';

const upload = (csv) => async (dispatch) => {
    dispatch({
        type: types.PROCESS_REQUEST
    });

    try {
        console.log('inside uploadCsv', csv);
        const url = 'http://localhost:8000/api/ae/v1/parse';
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const response = await axios.post(url, csv, config);
        console.log('rrr', response.data);
        dispatch({
            type: types.PROCESS_SUCCESS,
            payload: { res: response.data }
        });
    } catch (error) {
        console.log('eee', error);
        dispatch({
            type: types.PROCESS_FAILURE,
            meta: { error: error.message }
        });
    }
}

export default {
    upload
};