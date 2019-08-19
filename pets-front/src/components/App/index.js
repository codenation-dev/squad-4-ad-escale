import React, { Component } from 'react'
import './app.css';
import { Route } from 'react-router-dom';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { AnimatedRoute } from 'react-router-transition';
import AdvancedSearch from '../../pages/AdvancedSearch';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import NewPassword from '../../pages/NewPassword'
import Register from '../../pages/Register'
import PetDetail from '../../pages/PetDetail';

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

                <Route path="/login" exact component={Login} />

                <Route path="/forgotPassword" exact component={NewPassword} />

                <Route path="/register" exact component={Register} />

                <Route path="/pet-detail/:id" exact component={PetDetail} />

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
