import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
// import { push } from 'connected-react-router';
import { selectors as uploadsSelectors, actions as uploadsActions } from '../../../store/uploads';

// import Results from '../Results/Results';

import './Upload.css';

const Uploads = ({ isProcessing, didProcess, onSubmit, processedCSV }) => {
    const [file, setFile] = React.useState(null);

    const handleInput = React.useCallback(
        (event) => {
            console.log('inside handleinput', event.target.files[0]);
            setFile(event.target.files[0]);
        },
        [setFile]
    );

    const handleSubmit = React.useCallback(
        (event) => {
            event.preventDefault();
            const formData = new FormData();
            console.log('inside handleSubmit', file);
            formData.append('aeFile', file);
            console.log('fff', formData);
            onSubmit(formData);
        },
        [onSubmit, file]
    );

    return (
        <div>
            <h1>Upload Expense CSV</h1>
            <p>Upload American Express Expense CSV.</p>

            <form onSubmit={handleSubmit}>
                <input type="file" required onChange={handleInput} />
                <button type="submit">Upload</button>
            </form>
            {processedCSV && (
                <div>
                    {processedCSV}
                </div>
            )}
        </div>
    );
}

Uploads.propTypes = {
    isProcessing: PropTypes.bool.isRequired,
    didProcess: PropTypes.bool.isRequired,
    processedCSV: PropTypes.array,
    onSubmit: PropTypes.func.isRequired
};

Uploads.defaultProps = {
    processedCSV: []
};

const mapStateToProps = (state) => ({
    isProcessing: uploadsSelectors.getIsProcessing(state),
    didProcess: uploadsSelectors.getDidProcess(state),
    getProcessedCSV: uploadsSelectors.getProcessedCSV(state)
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit(data) {
        console.log('ddd', data);
        dispatch(uploadsActions.upload(data));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Uploads);
