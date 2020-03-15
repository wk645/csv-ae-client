import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Results from './features/Results/Results';
import Upload from './features/Upload/Upload';
import Graph from './features/Graph/Graph';
import Navbar from './ui/Navbar/Navbar';
import Files from './features/Files/Files';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="mainAppDiv">
                <Navbar />
                <h1>AE Expenses</h1>
                <Switch>
                    <Route exact path="/" component={Upload} />
                    <Route exact path="/results" component={Results} />
                    <Route exact path="/detailedGraph" component={Graph} />
                    <Route exact path="/trend" component={Files} />
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
