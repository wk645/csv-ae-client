import React from 'react';
import { connect } from 'react-redux';
import { selectors as uploadSelectors } from '../../../store/uploads';
import Card from '../Card/Card';

import './Results.css';

const Results = ({ processedCSV }) => {
    let expenseCard = processedCSV[0].spendings.map((p) => <Card key={p.Reference} data={p} />);

    return (
        <div>
            <br />
            <hr />
            {console.log('passed', processedCSV)}
            <h3>Date Range: {processedCSV[0].dateRange}</h3>
            <h3>Total: ${processedCSV[0].total}</h3>
            {expenseCard}
        </div>
    );
}

const mapStateToProps = (state) => ({
    processedCSV: uploadSelectors.getProcessedCSV(state)
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results);
