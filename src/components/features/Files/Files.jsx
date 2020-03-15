import React from 'react';
import { Button } from 'semantic-ui-react';

import LineGraph from '../LineGraph/LineGraph';

import fire from '../../../services/firebase';

import './Files.css';

const Files = () => {
    const [files, setFiles] = React.useState(null);
    const handleRetrieveClick = (event) => {
        event.preventDefault();
        console.log('retrieve clicked!');
        let ref = fire.database().ref('graphs/');
        ref.on('value', (snapshot) => {
            setFiles(Object.values(snapshot.val()));
        }, (errorObject) => {
            console.log('The read failed: ' + errorObject);
        });
    };

    return (
        <div className="filesDiv">
            <Button size="large" color="black" type="submit" onClick={handleRetrieveClick}>Retrieve</Button>
            <LineGraph files={files} />
        </div>
    );
}

export default Files;
