import {
  createSelector
} from "reselect";
import {
  getAllPosts
} from ".";

export const getTotalCountComments = createSelector(
  getAllPosts,
  posts =>
  Object.values(posts).reduce(
    (totalValue, post) => totalValue + post.commentCount,
    0
  )
);

export const getCommentsByPost = (state, id) => state.comments[id]
