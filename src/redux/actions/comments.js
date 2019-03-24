import {
  ACTIONS
} from "utils/constants";

import {
  getCommentsByPost
} from "utils/api"

export const setCommentsPost = (comments, id) => ({
  type: ACTIONS.SET_COMMENTS_POST,
  payload: {
    postId: id,
    comments
  }
});



export function setCommentsByPost(id) {
  return dispatch => {
    getCommentsByPost(id).then(comments => dispatch(setCommentsPost(comments, id)))
  };
}
