import React from 'react';

import './Results.css';

export default class Results extends React.Component {
    constructor() {
        super();

        this.state = {
            newTotal: 0
        }
    }
    onClick = (number) => {
        console.log('inside submit', number);
        const dividedNum = this.props.data.Total / number;
        this.setState({
            newTotal: dividedNum
        });

        console.log('nnnew', this.state.newTotal);
    }

    render() {
        return (
            <div>
                <div id="spendingTotal">
                    {this.props.data ? <p>Total: ${this.props.data.Total}</p> : null}
                </div>
                {this.props.data ?
                    <div>
                        <span>Divide By: </span>
                        <button type="submit" onClick={() => this.onClick(4)}>4</button>
                        <button type="submit"  onClick={() => this.onClick(5)}>5</button>
                    </div> : null
                }
                {/* <div>
                    {this.state.newTotal}
                </div> */}
                {
                    this.props.data
                        ? this.props.data.Spendings.map(s => <div key={s.Reference}>
                            <p>{s.Total}</p>
                            <div key={s.Reference} className="spendingBox">
                            <p>Date: {s.Date}</p>
                            <p>Amount: {s.Amount}</p>
                            <p>Addt. Info: {s.AdditionalInformation}</p>
                            <p>Description: {s.Description}</p>
                            <p>Category: {s.Category}</p>
                            </div>
                        </div>)
                        : null
                }
            </div>
        );
    }
}