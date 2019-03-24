import React from "react";
import { connect } from "react-redux";
import { getAllCategories, getAllPosts } from "redux/selectors";
import { formatListCategories } from "utils/helpers";
import { Link } from "react-router-dom";
import style from "./ListCategories.module.scss";

const ListCategories = ({ posts, categories }) => {
  return (
    <div>
      {posts && categories && (
        <ul>
          {formatListCategories(posts, categories).map(item => (
            <li
              className={style["list-categories__item"]}
              key={item.category.path}
            >
              <h3 className={style["list-categories__title"]}>
                <Link to={`/${item.category.path}`}>{item.category.name}</Link>
              </h3>
              <div className={style["list-categories__info"]}>
                <span>
                  (Posts: <strong>{item.numberOfPosts}</strong>
                </span>
                <span>
                  Replies: <strong>{item.numberOfReplies}</strong>)
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  categories: getAllCategories(state),
  posts: getAllPosts(state)
});

export default connect(mapStateToProps)(ListCategories);
