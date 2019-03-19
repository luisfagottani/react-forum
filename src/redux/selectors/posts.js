import { createSelector } from "reselect";

export const getAllPosts = state => state.posts;

export const getNumberOfPosts = createSelector(
  getAllPosts,
  posts => Object.keys(posts).length
);
