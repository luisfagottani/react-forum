import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import style from "./LastTopics.module.scss";
import { MdAlarm } from "react-icons/md";
import { dateToFormat } from "utils/helpers";
import { getAllPosts } from "redux/selectors";

const LastTopics = ({ posts }) => {
  return (
    <div>
      {posts && (
        <ul>
          {Object.values(posts)
            .slice(0, 5)
            .map(post => (
              <li className={style["last-posts__item"]} key={post.id}>
                <h3 className={style["last-posts__title"]}>
                  <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
                </h3>
                <p className={style["last-posts__data"]}>
                  <MdAlarm /> <span>{dateToFormat(post)}</span>
                </p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  posts: getAllPosts(state)
});
export default connect(mapStateToProps)(LastTopics);
