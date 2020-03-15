import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Navbar';

export default class Navbar extends Component {
    render() {
        return (
            <Menu inverted borderless className="navbarDiv">
                <Menu.Item>
                    <Link className="navbarDiv-home" to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link className="navbarDiv-graph" to="/detailGraph">Graph</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link className="navbarDiv-csv" to="/csv">CSV Files</Link>
                </Menu.Item>
            </Menu>
        );
    }
}