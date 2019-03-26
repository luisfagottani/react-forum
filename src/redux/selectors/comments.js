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

export const getCommentById = (state, parentId, id) => {
  if (parentId && id) return Object.keys(state.comments).length > 0 && state.comments[parentId][id]
};
