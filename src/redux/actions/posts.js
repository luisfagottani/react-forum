import {
  ACTIONS
} from "utils/constants";
import {
  votePost,
  getPostById,
  addPost,
  getPostsByCategory,
  updatePostById,
  deletePostById
} from "utils/api";


export const delPostById = (post) => ({
  type: ACTIONS.DEL_POST,
  post
})

export const updateListPost = posts => ({
  type: ACTIONS.UPDATE_POSTS,
  posts
})

export const updateUniquePost = post => ({
  type: ACTIONS.UPDATE_UNIQUE_POST,
  post
})

export const addNewPost = post => ({
  type: ACTIONS.UPDATE_UNIQUE_POST,
  post
})
export const setPosts = posts => ({
  type: ACTIONS.SET_POSTS,
  posts
});

const upVote = id => ({
  type: ACTIONS.UP_VOTE,
  id
});

const downVote = id => ({
  type: ACTIONS.DOWN_VOTE,
  id
});

export const setOrderBy = order => ({
  type: ACTIONS.ORDER_BY,
  order
})

export function handleVotePost(id, type) {
  return dispatch => {
    if (type === ACTIONS.DOWN_VOTE) {
      dispatch(downVote(id));
      return votePost(id, "downVote").catch(() => dispatch(upVote(id)));
    }
    dispatch(upVote(id));
    return votePost(id, "upVote").catch(() => dispatch(downVote(id)));
  };
}

export function listPostsByCategory(category) {
  return dispatch => {
    getPostsByCategory(category).then(posts => dispatch(updateListPost(posts)))
  }
}

export function handleAddPost(post) {
  return dispatch => (
    addPost({
      post
    }).then(post => {
      dispatch(addNewPost(post))
      return post
    })
  )
}

export function handleUpdatePost(post) {
  return dispatch => (
    updatePostById({
      post
    }).then(post => {
      dispatch(updateUniquePost(post))
      return post
    })
  )
}



export function refreshPostById(id) {
  return dispatch => {
    getPostById(id).then(post => dispatch(updateUniquePost(post)))
  }
}

export function deletePost(id) {
  return dispatch => {
    deletePostById({
      id
    }).then(post => dispatch(delPostById(post)))
  }
}
