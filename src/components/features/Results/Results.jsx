import React from 'react';
import { connect } from 'react-redux';
import { selectors as uploadSelectors } from '../../../store/uploads';
import { push } from 'connected-react-router';
import Card from '../Card/Card';

import fire from '../../../services/firebase';

import './Results.css';

const Results = ({ processedCSV, navigateTo }) => {
    const [dividedNum, setDividedNum] = React.useState(null);
    let expenseCard = processedCSV[0].spendings.map((p) => <Card key={p.Reference} data={p} />);

    const handleGraphClick = React.useCallback(() => {
        console.log('inside graph click button');
        navigateTo('/detailedGraph');
    }, [navigateTo]);

    const handleDivideClick = React.useCallback((number) => {
        let total = processedCSV[0].total;
        let divided = Math.floor(total / number);
        setDividedNum(`$${divided}`);
    }, [setDividedNum, processedCSV]);

    const handleSaveClick = (event) => {
        event.preventDefault();
        console.log('clicked save!');
        const dateObj = new Date();
        const formattedDate = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
        fire.database().ref(`${formattedDate}`).push(processedCSV);
    };

    return (
        <div>
            <br />
            <hr />
            {console.log('passed', processedCSV)}
            <h3>Date Range: {processedCSV[0].dateRange}</h3>
            <h3>Total: ${processedCSV[0].total}</h3>
            <button type="submit" onClick={handleSaveClick}>SAVE</button>
            <button type="submit" onClick={handleGraphClick}>
                GRAPH
            </button>
            <button type="submit" onClick={() => handleDivideClick(4)}>
                4
            </button>
            <button type="submit" onClick={() => handleDivideClick(5)}>
                5
            </button>
            <p>{dividedNum}</p>
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
