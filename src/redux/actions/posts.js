import { ACTIONS } from "utils/constants";
import { votePost } from "utils/api";

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
