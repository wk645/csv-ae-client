import React from 'react';
import { connect } from 'react-redux';
import { selectors as uploadSelectors } from '../../../store/uploads';
import { push } from 'connected-react-router';
import { Button } from 'semantic-ui-react';
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
        fire.database().ref('graphs/').push(processedCSV[0]).set({
            dateRange: processedCSV[0].dateRange,
            total: processedCSV[0].total,
            spendings: processedCSV[0].spendings
        });
    };

    return (
        <div className="resultsDiv">
            <br />
            {console.log('passed', processedCSV)}
            <h3>Date Range: {processedCSV[0].dateRange}</h3>
            <h3>Total: ${processedCSV[0].total}</h3>
            <Button size="large" color="green" type="submit" onClick={handleSaveClick}>SAVE</Button>
            <Button size="large" color="teal" type="submit" onClick={handleGraphClick}>
                GRAPH
            </Button>
            <br />
            <br />
            <span>Divide By:</span>
            <Button size="large" color="black" type="submit" onClick={() => handleDivideClick(4)}>
                4
            </Button>
            <Button size="large" color="black" type="submit" onClick={() => handleDivideClick(5)}>
                5
            </Button>
            <p className="resultsDiv-dividedNum">{dividedNum}</p>
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
