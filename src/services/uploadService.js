import axios from 'axios';

class UploadService {
    async uploadCSV(csv) {
        console.log('inside uploadCsv', csv);
        const url = 'http://localhost:8000/api/ae/v1/parse';
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const response = axios.post(url, csv, config);
        return response.data;
    }
}

export default UploadService;
