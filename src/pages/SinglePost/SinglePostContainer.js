import React from "react";
import { connect } from "react-redux";
import Breadcrumb from "modules/Breadcrumb";
import InfoSinglePost from "modules/InfoSinglePost";
import Post from "modules/Post";
import { getPostById } from "redux/selectors";

class SinglePostContainer extends React.PureComponent {
  render() {
    const { post } = this.props;

    return (
      <div className="content">
        {post && (
          <section className="single-post">
            <Breadcrumb title={post.title} />
            <InfoSinglePost post={post} />
            <Post post={post} />
          </section>
        )}
        <aside className="sidebar" />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  post: getPostById(ownProps.match.params.id, state)
});
export default connect(
  mapStateToProps,
  null
)(SinglePostContainer);
