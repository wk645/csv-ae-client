import React from 'react';
import { connect } from 'react-redux';
import { selectors as uploadSelectors } from '../../../store/uploads';
import { push } from 'connected-react-router';
import Card from '../Card/Card';
import Graph from '../Graph/Graph';

import './Results.css';

const Results = ({ processedCSV, navigateTo }) => {
    let expenseCard = processedCSV[0].spendings.map((p) => <Card key={p.Reference} data={p} />);

    const handleGraphClick = React.useCallback(() => {
        console.log('inside graph click button');
        navigateTo('/detailedGraph');
    }, [navigateTo]);

    return (
        <div>
            <br />
            <hr />
            {console.log('passed', processedCSV)}
            <h3>Date Range: {processedCSV[0].dateRange}</h3>
            <h3>Total: ${processedCSV[0].total}</h3>
            <button type="submit" onClick={handleGraphClick}>
                GRAPH
            </button>
            {expenseCard}
        </div>
    );
}

const mapStateToProps = (state) => ({
    processedCSV: uploadSelectors.getProcessedCSV(state)
});

const mapDispatchToProps = (dispatch) => ({
    navigateTo(pathname) {
        dispatch(push(pathname));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results);
