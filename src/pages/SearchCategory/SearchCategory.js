import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "redux/selectors";
import { listPostsByCategory } from "redux/actions/posts";

import ListPosts from "modules/ListPosts/ListPosts";

class SearchCategory extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(listPostsByCategory(match.params.category));
  }
  filterPostsByCategory() {
    const { match, posts } = this.props;
    return Object.values(posts).filter(
      post => match.params.category === post.category
    );
  }
  render() {
    return (
      <React.Fragment>
        <section className="table-view">
          <ListPosts posts={this.filterPostsByCategory()} />
        </section>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  posts: getAllPosts(state)
});
export default connect(mapStateToProps)(SearchCategory);
