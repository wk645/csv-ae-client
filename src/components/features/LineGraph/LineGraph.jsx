import React from 'react';

import { Line } from 'react-chartjs-2';

import './LineGraph.css';

const LineGraph = ({ files }) => {
    console.log('inside line graph', files);

    const data = () => {
        let i = 1;
        const totalLabels = [];
        const dataValues = [];
        for (const file of files) {
            file.id = i;
            i++;
            if (file.id) {
                totalLabels.push(file.id);
                dataValues.push(file.total);
            }
        }
        
        return {
            labels: totalLabels.flat(),
                datasets: [
                    {
                        label: 'Amount',
                        fill: false,
                        lineTension: 0,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: dataValues.flat()
                    }
                ]
        }
    };

    return (
        <div className="lineGraphDiv">
            <br />
            { files ?
                <Line
                    data={data}
                    options={{
                        title: {
                            display: true,
                            text: 'Your Spendings Trend'
                        },
                        legend: {
                            display: false
                        }
                    }}
                />
            : null}
        </div>
    );
}

export default LineGraph;
