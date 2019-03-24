import React from "react";
import style from "./Post.module.scss";
import Rating from "modules/Rating";
import { MdAlarm } from "react-icons/md";
import { dateToFormat } from "utils/helpers";

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
          <Rating id={post.id} votes={post.voteScore} />
        </div>
      </div>
      <div className={style["post__content"]}>
        <p>{post.body}</p>
      </div>
    </section>
  );
};

export default Post;
