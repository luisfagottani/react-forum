import {
  createSelector
} from "reselect";

export const getAllPosts = state => state.posts;

export const getNumberOfPosts = createSelector(
  getAllPosts,
  posts => Object.keys(posts).length
);

export const getPostById = (id, state) =>
  Object.values(state.posts).find(post => {
    if (post.id === id) {
      return post;
    }
    return null;
  });
