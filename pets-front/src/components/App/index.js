import React, { Component } from "react";
import "./app.css";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { AnimatedRoute } from "react-router-transition";
import AdvancedSearch from "../../pages/AdvancedSearch";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import NewPassword from "../../pages/NewPassword";
import Register from "../../pages/Register";
import PetDetail from "../../pages/PetDetail";
import PetSearch from "../../pages/PetSearch";
import Header from "../../components/Header";
import MyPets from "../../pages/MyPets";
import Profile from "../../pages/Profile";
import PetCreate from "../../pages/PetCreate";

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
        {this.props.location.pathname !== "/login" &&
        this.props.location.pathname !== "/forgotPassword" &&
        this.props.location.pathname !== "/advancedSearch" ? (
          <Header />
        ) : null}

        <Route path="/" exact component={Home} />

        <Route path="/login" exact component={Login} />

        <Route path="/forgotPassword" exact component={NewPassword} />

<<<<<<< HEAD
                <Route path="/pet-search/" exact component={PetSearch} />
                
                <Route path="/profile" exact component={Profile} />
=======
        <Route path="/register" exact component={Register} />

        <Route path="/pet/:id" exact component={PetDetail} />
>>>>>>> ac64d44ebba9feeaa10d7bfd578ca7631e56f15d

        <Route path="/search/:search" exact component={PetSearch} />

        <Route path="/profile" exact component={Profile} />

        <Route path="/my-pets" exact component={MyPets} />

        <Route path="/pet-create" exact component={PetCreate} />

        <AnimatedRoute
          path="/advancedSearch"
          component={AdvancedSearch}
          atEnter={{ offset: 100 }}
          atLeave={{ offset: 100 }}
          atActive={{ offset: 0 }}
          mapStyles={styles => ({
            transform: `translateX(${styles.offset}%)`
          })}
        />
      </div>
    );
  }
}

export default withRouter(App);
