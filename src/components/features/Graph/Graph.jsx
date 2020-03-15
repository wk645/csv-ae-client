import React from 'react';
import PropTypes from 'prop-types';
// import {
//     XYPlot,
//     XAxis, // Shows the values on x axis
//     YAxis, // Shows the values on y axis
//     VerticalBarSeries
// } from 'react-vis';
import { Bar } from 'react-chartjs-2';

import { connect } from 'react-redux';
import { selectors as uploadsSelectors } from '../../../store/uploads';

import Card from '../Card/Card';

import './Graph.css';

const Graph = ({ processedCSV }) => {
    const [graphCategory, setGraphCategory] = React.useState(null);
    const x = ['Business', 'Entertainment', 'Groceries', 'Merchandise', 'Miscellaneous', 'Restaurant', 'Supplies', 'Transportation', 'Travel'];

    let currentTotal = 0;
    let filteredCards = graphCategory && processedCSV[0].spendings.filter((p) => p.Category === graphCategory);
    let expenseCard = graphCategory && filteredCards.map((f) =>{
        currentTotal += Number(f.Amount);
        return <Card key={f.Reference} data={f} />
    });

    const data = () => {
        let businessTotal = 0;
        let entertainmentTotal = 0;
        let groceriesTotal = 0;
        let merchandiseTotal = 0;
        let miscTotal = 0;
        let restaurantTotal = 0;
        let suppliesTotal = 0;
        let transportationTotal = 0;
        let travelTotal = 0;

        for (const spending of processedCSV[0].spendings) {
            switch (spending.Category) {
                case 'Business':
                    businessTotal += Number(spending.Amount);
                    break;
                case 'Entertainment':
                    entertainmentTotal = entertainmentTotal += Number(spending.Amount);
                    break;
                case 'Groceries':
                    groceriesTotal = groceriesTotal += Number(spending.Amount);
                    break;
                case 'Merchandise':
                    merchandiseTotal = merchandiseTotal += Number(spending.Amount);
                    break;
                case 'Miscellaneous':
                    miscTotal = miscTotal += Number(spending.Amount);
                    break;
                case 'Restaurant':
                    restaurantTotal = restaurantTotal += Number(spending.Amount);
                    break;
                case 'Supplies':
                    suppliesTotal = suppliesTotal += Number(spending.Amount);
                    break;
                case 'Transportation':
                    transportationTotal = transportationTotal += Number(spending.Amount);
                    break;
                case 'Travel':
                    travelTotal = travelTotal += Number(spending.Amount);
                    break;
                default:
                    miscTotal = miscTotal += Number(spending.Amount);
                    break;
            }
        }
        const values = [businessTotal, entertainmentTotal, groceriesTotal, merchandiseTotal, miscTotal, restaurantTotal, suppliesTotal, transportationTotal, travelTotal];


        return {
            labels: x,
            datasets: [
                {
                    label: 'Amount',
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(255, 0, 0, 0.8)',
                        'rgba(0, 255, 0, 0.3)'
                    ],
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: values.flat()
                }
            ]
        }
    };

    const onSeriesClick = React.useCallback((dataset) => {
        const clickedIndex = dataset[0]._index;
        const category = x[clickedIndex];
        setGraphCategory(category);
    }, [setGraphCategory, x]);

    return (
        <div className="graphDiv">
            <p className="graphDiv-total">TOTAL: ${processedCSV[0].total}</p>
            <Bar 
                data={data}
                options={{
                    title: {
                        display: true,
                        text: 'Your Spendings',
                        fontSize: 25
                    },
                    legend: {
                        display: false
                    }
                }}
                getElementAtEvent={onSeriesClick}
            />
            <div className="graphDiv-categorized">
                {
                    graphCategory &&
                    <div className="graphDiv-cards">
                        <br />
                        <div className="graphDiv-category-summary">
                            <span>{graphCategory}</span>
                            <span>{expenseCard.length} item(s) </span>
                            <span>${Math.floor(currentTotal)}</span>
                        </div>
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

export default connect(
    mapStateToProps
)(Graph);
