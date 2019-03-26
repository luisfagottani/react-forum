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

    case ACTIONS.DEL_COMMENT:
      return {
        ...state,
        [action.comment.parentId]: Object.values(state[action.comment.parentId]).filter(comment => comment.id !== action.comment.id)
      }
    case ACTIONS.ADD_COMMENT:
      return {
        ...state,
        [action.comment.parentId]: {
          ...state[action.comment.parentId],
          [action.comment.id]: {
            ...action.comment
          },
        }
      }

    case ACTIONS.UP_VOTE_COMMENTS:
      return {
        ...state,
        [action.payload.parentId]: {
          ...state[action.payload.parentId],
          [action.payload.idComment]: {
            ...state[action.payload.parentId][action.payload.idComment],
            voteScore: state[action.payload.parentId][action.payload.idComment].voteScore + 1
          },
        }
      };
    case ACTIONS.DOWN_VOTE_COMMENTS:
      return {
        ...state,
        [action.payload.parentId]: {
          ...state[action.payload.parentId],
          [action.payload.idComment]: {
            ...state[action.payload.parentId][action.payload.idComment],
            voteScore: state[action.payload.parentId][action.payload.idComment].voteScore - 1
          },
        }
      };
    default:
      return state;
  }
}
