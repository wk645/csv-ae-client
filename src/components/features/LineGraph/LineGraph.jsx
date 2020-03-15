import React from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    LineSeries,
    VerticalGridLines,
    HorizontalGridLines
} from 'react-vis';

import './LineGraph.css';

const LineGraph = ({ files }) => {
    console.log('inside line graph', files);

    let i = 1;
    const data = files && files.map(f => {
        console.log('fff', f);
        f.id = i;
        i++;
        return {
            'x': f.id,
            'y': f.total
        }
    });

    return (
        <div className="lineGraphDiv">
            <br />
            { files ?
                <XYPlot className="lineGraphDiv-xyPlot" height={400} width={400}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis tickValues={[0, 1, 3, 4, 5]} />
                    <YAxis />
                    <LineSeries data={data} />
                </XYPlot>
            : null}
        </div>
    );
}

export default LineGraph;
