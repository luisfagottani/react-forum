import {
  ACTIONS
} from "utils/constants";

import {
  getCommentsByPost
} from "utils/api"

import {
  voteComment
} from "utils/api";

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
