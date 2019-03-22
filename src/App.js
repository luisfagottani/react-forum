import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "redux/actions/shared";
import LoadingBar from "react-redux-loading";
import Header from "./modules/Header";
import Moment from "react-moment";

import "./App.scss";

import HomeContainer from "./pages/Home/";
import SinglePostContainer from "./pages/SinglePost";

Moment.globalLocale = "ptbr";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Header />
          <main className="main">
            <Route path="/" exact component={HomeContainer} />
            <Route
              path="/:category/:id"
              exact
              component={SinglePostContainer}
            />
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default connect(null)(App);
