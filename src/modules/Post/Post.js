import React from "react";
import style from "./Post.module.scss";
import Rating from "modules/Rating";
import { MdAlarm } from "react-icons/md";
import { dateToFormat } from "utils/helpers";
import Profile from "modules/Profile";
import { VOTE_TYPE } from "utils/constants";

const Post = ({ post }) => {
  return (
    <section className={style["post"]}>
      <div className={style["post__header"]}>
        <h1>{post.title}</h1>
      </div>
      <div className={style["post__info"]}>
        <div className={style["post__info-date"]}>
          <MdAlarm /> {dateToFormat(post)}
        </div>
        <div className={style["post__info-rating"]}>
          <Rating id={post.id} type={VOTE_TYPE.POST} votes={post.voteScore} />
        </div>
      </div>
      <div className={style["post__content"]}>
        <Profile name={post.author} />
        <p>{post.body}</p>
      </div>
    </section>
  );
};

export default Post;
