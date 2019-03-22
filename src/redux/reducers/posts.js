import { ACTIONS } from "utils/constants";

export default function posts(state = {}, action) {
  switch (action.type) {
    case ACTIONS.SET_POSTS:
      return {
        ...state,
        ...action.posts
      };
    case ACTIONS.UP_VOTE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id].voteScore + 1
        }
      };
    case ACTIONS.DOWN_VOTE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id].voteScore - 1
        }
      };
    default:
      return state;
  }
}
