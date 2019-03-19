import { ACTIONS } from "utils/constants";

export default function posts(state = {}, action) {
  switch (action.type) {
    case ACTIONS.SET_POSTS:
      return {
        ...state,
        ...action.posts
      };
    default:
      return state;
  }
}
