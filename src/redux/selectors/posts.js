import {
  createSelector
} from "reselect";

const getPosts = state => state.posts.itens;
export const getOrderBy = state => state.posts.orderBy

export const getNumberOfPosts = createSelector(
  getPosts,
  itens => Object.keys(itens).length
);

export const getAllPosts = createSelector(
  getPosts,
  getOrderBy,
  (itens, orderBy) => {
    if (orderBy === "voteScore") {
      return Object.values(itens)
        .sort((a, b) => b.voteScore - a.voteScore)
    }
    return Object.values(itens)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  }
)
export const getPostById = (id, state) =>
  Object.values(state.posts.itens).find(post => {
    if (post.id === id) {
      return post;
    }
    return null;
  });
