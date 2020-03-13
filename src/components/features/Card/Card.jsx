import React from 'react';
// import { selectors as uploadSelectors } from '../../../store/uploads';

import './Card.css';

const Card = ({ data }) => {
    return (
        <div className="cardDiv">
            {/* <p>ID: {data.Reference}</p> */}
            <p className="cardLine">Date: {data.Date}</p>
            <p className="cardLine">Amount: ${data.Amount}</p>
            <p className="cardLine">Description: {data.Description.toLowerCase()}</p>
            <p className="cardLine">Addt. Info: {data.AdditionalInformation.toLowerCase()}</p>
            <p className="cardLine">Category: {data.Category}</p>
        </div>
    );
}

export default Card;
