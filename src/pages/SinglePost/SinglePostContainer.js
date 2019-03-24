import React from "react";
import { connect } from "react-redux";
import Breadcrumb from "modules/Breadcrumb";
import InfoSinglePost from "modules/InfoSinglePost";
import Post from "modules/Post";
import { getPostById } from "redux/selectors";
import Sidebar from "modules/Sidebar";
import style from "./SinglePostContainer.module.scss";
import ListCategories from "modules/Sidebar/components/ListCategories/ListCategories";
import LastTopics from "modules/Sidebar/components/LastTopics/LastTopics";
import Comments from "modules/Comments";
import { setCommentsByPost } from "redux/actions/comments";
import { getCommentsByPost } from "redux/selectors";
import NewContent from "../../modules/Form/NewContent";
import { TYPE_CONTEXT } from "utils/constants";

class SinglePostContainer extends React.PureComponent {
  componentDidMount() {
    const { setCommentsByPost, match } = this.props;
    setCommentsByPost(match.params.id);
  }
  render() {
    const { post, comments } = this.props;

    return (
      <div className={style["single-post"]}>
        {post && (
          <section className={style["single-post__content"]}>
            <Breadcrumb title={post.title} />
            <InfoSinglePost post={post} />
            <Post post={post} />
            {comments && <Comments comments={comments} />}
            <NewContent id={post.id} typeForm={TYPE_CONTEXT.COMMENT} />
          </section>
        )}
        <aside className={style["single-post__sidebar"]}>
          <Sidebar>
            <Sidebar.Item>
              <Sidebar.Title title={"Últimos Posts"} />
              <LastTopics />
            </Sidebar.Item>
            <Sidebar.Item>
              <Sidebar.Title title={"Categorias"} />
              <ListCategories />
            </Sidebar.Item>
          </Sidebar>
        </aside>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  post: getPostById(ownProps.match.params.id, state),
  comments: getCommentsByPost(state, ownProps.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  setCommentsByPost: id => dispatch(setCommentsByPost(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePostContainer);
