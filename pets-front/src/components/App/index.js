import React, { Component } from 'react'
import './app.css';
import { Route } from 'react-router-dom';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { AnimatedRoute } from 'react-router-transition';
import AdvancedSearch from '../../pages/AdvancedSearch';
import Home from '../../pages/Home';

class App extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Route path="/" exact component={Home} />

                <AnimatedRoute
                    path="/advancedSearch"
                    component={AdvancedSearch}
                    atEnter={{ offset: 100 }}
                    atLeave={{ offset: 100 }}
                    atActive={{ offset: 0 }}
                    mapStyles={(styles) => ({
                        transform: `translateX(${styles.offset}%)`,
                    })}
                />
            </div>
        );
    }



}

export default withRouter(App);
