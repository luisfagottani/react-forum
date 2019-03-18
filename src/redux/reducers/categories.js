import { ACTIONS } from "utils/constants";

export default function categories(state = {}, action) {
  switch (action.type) {
    case ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        ...action.categories
      };
    default:
      return state;
  }
}
