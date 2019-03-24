import {
  ACTIONS
} from "utils/constants";

export default function comments(state = {}, action) {
  switch (action.type) {
    case ACTIONS.SET_COMMENTS_POST:
      return {
        ...state,
        [action.payload.postId]: {
          ...action.payload.comments
        }
      };
    default:
      return state;
  }
}
