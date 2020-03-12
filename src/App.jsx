import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Upload from './components/features/Upload/Upload';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h2 className="header">CSV AE</h2>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Upload} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
