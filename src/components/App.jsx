import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Results from './features/Results/Results';
import Upload from './features/Upload/Upload';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="mainAppDiv">
                <Switch>
                    <Route exact path="/" component={Upload} />
                    <Route exact path="/results" component={Results} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
