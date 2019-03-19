import React, { Component } from "react";
import { connect } from "react-redux";
import ResumeContainer from "modules/Resume";
import { getAllPosts } from "redux/selectors";

import ListPosts from "modules/ListPosts/ListPosts";

class HomeContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <ResumeContainer />
        <section className="table-view">
          <ListPosts posts={this.props.posts} />
        </section>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  posts: getAllPosts(state)
});
export default connect(mapStateToProps)(HomeContainer);
