import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "redux/actions/shared";
import LoadingBar from "react-redux-loading";
import Header from "./modules/Header";

import "./App.scss";

import HomeContainer from "./pages/Home/";

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
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default connect(null)(App);
