import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import Header from "./modules/Header";

import "./App.scss";

import Api from "./utils/api";
import HomeContainer from "./pages/Home/";

class App extends Component {
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

export default App;
