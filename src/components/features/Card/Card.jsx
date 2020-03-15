import React from 'react';

import './Card.css';

const Card = ({ data }) => {
    return (
        <div className="cardDiv">
            <p className="cardLine">DATE: {data.Date}</p>
            <p className="cardLine">AMOUNT: ${data.Amount}</p>
            <p className="cardLine">DESCRIPTION: {data.Description.toLowerCase()}</p>
            <p className="cardLine">ADDT. INFO: {data.AdditionalInformation ? data.AdditionalInformation.toLowerCase() : 'None'}</p>
            <p className="cardLine">CATEGORY: {data.Category}</p>
        </div>
    );
}

export default Card;
