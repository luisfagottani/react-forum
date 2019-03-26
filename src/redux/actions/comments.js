import {
  ACTIONS
} from "utils/constants";

import {
  getCommentsByPost
} from "utils/api"

import {
  voteComment,
  addComment,
  updateCommentById,
  deleteCommentById
} from "utils/api";
import {
  refreshPostById
} from "./posts";

export const addCommentToPost = (comment) => ({
  type: ACTIONS.ADD_COMMENT,
  comment
})

export const delCommentById = (comment) => ({
  type: ACTIONS.DEL_COMMENT,
  comment
})


export const setCommentsPost = (comments, id) => ({
  type: ACTIONS.SET_COMMENTS_POST,
  payload: {
    postId: id,
    comments
  }
});

const upVote = (idComment, parentId) => ({
  type: ACTIONS.UP_VOTE_COMMENTS,
  payload: {
    parentId,
    idComment
  }
});

const downVote = (idComment, parentId) => ({
  type: ACTIONS.DOWN_VOTE_COMMENTS,
  payload: {
    parentId,
    idComment
  }
});



export function setCommentsByPost(id) {
  return dispatch => {
    getCommentsByPost(id).then(comments => dispatch(setCommentsPost(comments, id)))
  };
}


export function handleVoteComment(id, parentId, type) {
  return dispatch => {
    if (type === ACTIONS.DOWN_VOTE_COMMENTS) {
      dispatch(downVote(id, parentId));
      return voteComment(id, "downVote").catch(() => dispatch(upVote(id, parentId)));
    }
    dispatch(upVote(id, parentId));
    return voteComment(id, "upVote").catch(() => dispatch(downVote(id, parentId)));
  };
}

export function handleAddComment(comment) {
  return dispatch => {
    addComment({
      comment
    }).then(comment => {
      dispatch(addCommentToPost(comment))
      dispatch(refreshPostById(comment.parentId))
    })
  }
}

export function handleUpdateComment(comment) {
  return dispatch => {
    updateCommentById({
      comment
    })
  }
}


export function deleteComment(id) {
  return dispatch => {
    deleteCommentById({
      id
    }).then(comment => {
      dispatch(delCommentById(comment))
      dispatch(refreshPostById(comment.parentId))
    })
  }
}
