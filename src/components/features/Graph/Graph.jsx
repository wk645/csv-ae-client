import React from 'react';
import PropTypes from 'prop-types';
import {
    XYPlot,
    XAxis, // Shows the values on x axis
    YAxis, // Shows the values on y axis
    VerticalBarSeries
} from 'react-vis';

import { connect } from 'react-redux';
import { selectors as uploadsSelectors } from '../../../store/uploads';

import Card from '../Card/Card';

import './Graph.css';

const Graph = ({ processedCSV, navigateTo }) => {
    const [graphCategory, setGraphCategory] = React.useState(null);
    const xValues = ['Business', 'Entertainment', 'Groceries', 'Merchandise', 'Miscellaneous', 'Restaurant', 'Supplies', 'Transportation', 'Travel'];

    let filteredCards = graphCategory && processedCSV[0].spendings.filter((p) => p.Category === graphCategory.x);
    let expenseCard = graphCategory && filteredCards.map((f) => <Card key={f.Reference} data={f} />);
    console.log('eee', expenseCard);

    let graphObject = processedCSV[0].spendings.map((d) => {
        const xValue = xValues.find(c => c === d.Category);
        return {
            'x': xValue,
            'y': Number(d.Amount)
        }
    });

    const chartWidth = 700;
    const chartHeight = 200;
    const chartDomain = [0, chartHeight];

    const onSeriesClick = React.useCallback((datapoint) => {
        setGraphCategory(datapoint);
    }, [setGraphCategory]);

    return (
        <div className="graphDiv">
            <p>Graph</p>
            <XYPlot
                xType="ordinal"
                width={chartWidth}
                height={chartHeight}
                yDomain={chartDomain}
            >
                <XAxis />
                <YAxis />
                <VerticalBarSeries
                    data={graphObject}
                    color="green"
                    onValueClick={onSeriesClick}
                />
            </XYPlot>
            <div className="graphCategorized">
                {
                    graphCategory &&
                    <div>
                        <br />
                        <span>{graphCategory.x} </span>
                        <span>({expenseCard.length})</span>
                        <br />
                        <br />
                        {expenseCard}
                    </div>
                }
            </div>
        </div>
    )
}

Graph.propTypes = {
    processedCSV: PropTypes.array
};

Graph.defaultProps = {
    processedCSV: []
};

const mapStateToProps = (state) => ({
    processedCSV: uploadsSelectors.getProcessedCSV(state)
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Graph);
