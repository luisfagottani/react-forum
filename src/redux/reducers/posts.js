import { ACTIONS } from "utils/constants";

export default function posts(state = {}, action) {
  switch (action.type) {
    case ACTIONS.SET_POSTS:
      return {
        ...state,
        ...action.posts
      };
    case ACTIONS.UP_VOTE:
      state[action.id].voteScore++;
      return {
        ...state,
        ...{ ...state, [action.id]: state[action.id] }
      };
    case ACTIONS.DOWN_VOTE:
      state[action.id].voteScore--;
      return {
        ...state,
        ...{ ...state, [action.id]: state[action.id] }
      };
    default:
      return state;
  }
}
