import React, { Component } from "react";
import { connect } from "react-redux";
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
const mapStateToProps = state => ({
  listsPosts: null
});
export default connect(mapStateToProps)(HomeContainer);
