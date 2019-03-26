import React from "react";
import { connect } from "react-redux";
import Rating from "modules/Rating";
import { MdAlarm } from "react-icons/md";
import { dateToFormat } from "utils/helpers";
import Profile from "modules/Profile";
import { TYPE_CONTEXT } from "utils/constants";
import { Link, withRouter } from "react-router-dom";
import { deletePost } from "redux/actions/posts";
import style from "./Post.module.scss";

const Post = ({ post, dispatch, history }) => {
  return (
    <section className={style["post"]}>
      <div className={style["post__header"]}>
        <h1>{post.title}</h1>
      </div>
      <div className={style["post__info"]}>
        <div className={style["post__info-date"]}>
          <MdAlarm /> {dateToFormat(post)}
          <div className={style["post__info-edit"]}>
            <Link to={`/${post.category}/${post.id}/edit`}>(Edit |</Link>
            <a
              href
              onClick={e => {
                e.preventDefault();
                if (window.confirm("Quer deletar o comentário?")) {
                  dispatch(deletePost(post.id));
                  history.push("/");
                }
              }}
            >
              Delete)
            </a>
          </div>
        </div>
        <div className={style["post__info-rating"]}>
          <Rating
            id={post.id}
            type={TYPE_CONTEXT.POST}
            votes={post.voteScore}
          />
        </div>
      </div>
      <div className={style["post__content"]}>
        <Profile name={post.author} />
        <p>{post.body}</p>
      </div>
    </section>
  );
};

export default withRouter(connect(null)(Post));
