import React, { Component } from "react";
import ResumeContainer from "modules/Resume";
import ListPosts from "modules/ListPosts/ListPosts";

class HomeContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <ResumeContainer />
        <section className="table-view">
          <ListPosts />
        </section>
      </React.Fragment>
    );
  }
}

export default HomeContainer;
