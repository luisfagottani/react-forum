import React from "react";
import style from "./Comments.module.scss";
import Rating from "modules/Rating";
import { MdAlarm } from "react-icons/md";
import { dateToFormat } from "utils/helpers";
import { TYPE_CONTEXT } from "utils/constants";
import Profile from "modules/Profile";

const Comments = ({ comments }) => {
  return (
    <section className={style["comments"]}>
      <div className={style["comments__header"]}>
        <h1>Comentários</h1>
      </div>
      <ul className={style["comments__list"]}>
        {Object.values(comments).map(comment => (
          <li key={comment.id} className={style["comments__item"]}>
            <div className={style["comments__info"]}>
              <div className={style["comments__info-date"]}>
                <MdAlarm /> {dateToFormat(comment)}
              </div>
              <div className={style["comments__info-rating"]}>
                <Rating
                  id={comment.id}
                  type={TYPE_CONTEXT.COMMENT}
                  votes={comment.voteScore}
                  parentId={comment.parentId}
                />
              </div>
            </div>
            <div className={style["comments__content"]}>
              <Profile name={comment.author} />
              <p>{comment.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Comments;
