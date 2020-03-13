import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { selectors as uploadsSelectors, actions as uploadsActions } from '../../../store/uploads';

import Results from '../Results/Results';

import './Upload.css';

const Uploads = ({ isProcessing, didProcess, onSubmit, processedCSV }) => {
    const [file, setFile] = React.useState(null);

    const handleInput = React.useCallback(
        (event) => {
            setFile(event.target.files[0]);
        },
        [setFile]
    );

    const handleSubmit = React.useCallback(
        (event) => {
            event.preventDefault();
            const formData = new FormData();
            formData.append('aeFile', file);
            onSubmit(formData);
        },
        [onSubmit, file]
    );

    const handleClear = React.useCallback(() => {
        setFile(null);
    }, [setFile]);

    return (
        <div>
            <h2>Upload Expense CSV</h2>
            <p>Upload American Express CSV file for an in-depth view.</p>
            <br />
            <form onSubmit={handleSubmit}>
                <input type="file" required onChange={handleInput} />
                <button type="submit">Upload</button>
                <button type="reset" onClick={handleClear}>Reset</button>
            </form>
            {processedCSV && <Results />}
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
    processedCSV: uploadsSelectors.getProcessedCSV(state)
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit(data) {
        dispatch(uploadsActions.upload(data));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Uploads);
