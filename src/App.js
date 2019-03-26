import React, { Component, Fragment } from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "redux/actions/shared";
import LoadingBar from "react-redux-loading";
import Header from "./modules/Header";
import Moment from "react-moment";

import "./App.scss";

import HomeContainer from "./pages/Home/";
import SinglePostContainer from "./pages/SinglePost";
import NewContentContainer from "./pages/NewContent";
import SearchCategory from "./pages/SearchCategory";
import { TYPE_CONTEXT } from "./utils/constants";

Moment.globalLocale = "ptbr";
class App extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Header />
          <main className="main">
            <Switch>
              <Route path="/" exact component={HomeContainer} />
              <Route
                path="/:category/:id"
                exact
                component={SinglePostContainer}
              />
              <Route
                path="/new-post"
                exact
                render={props => (
                  <NewContentContainer
                    {...props}
                    typeContent={TYPE_CONTEXT.POST}
                  />
                )}
              />
              <Route
                path="/:category/:parentId/comments/:id"
                exact
                render={props => (
                  <NewContentContainer
                    {...props}
                    edit={true}
                    typeContent={TYPE_CONTEXT.COMMENT}
                  />
                )}
              />

              <Route
                path="/:category/:id/edit"
                exact
                render={props => (
                  <NewContentContainer
                    {...props}
                    edit={true}
                    typeContent={TYPE_CONTEXT.POST}
                  />
                )}
              />
              <Route path="/:category" exact component={SearchCategory} />
            </Switch>
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default connect(null)(App);
