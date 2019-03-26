import {
  ACTIONS
} from "utils/constants";

export default function posts(state = {
  orderBy: "voteScore",
  itens: {}
}, action) {

  switch (action.type) {
    case ACTIONS.SET_POSTS:
      return {
        ...state,
        itens: {
          ...action.posts
        }
      };

    case ACTIONS.DEL_POST:
      console.log(action.post)
      return {
        ...state,
        itens: Object.values(state.itens).filter(post => !action.post[post.id])
      }

    case ACTIONS.ORDER_BY:
      return {
        ...state,
        orderBy: action.order
      }

    case ACTIONS.UPDATE_POSTS:
      return {
        ...state,
        itens: {
          ...state.itens,
          ...action.posts
        }

      }

    case ACTIONS.UPDATE_UNIQUE_POST:
      return {
        ...state,
        itens: {
          ...state.itens,
          [action.post.id]: {
            ...action.post
          }
        }

      }
    case ACTIONS.UP_VOTE:
      return {
        ...state,
        itens: {
          ...state.itens,
          [action.id]: {
            ...state.itens[action.id],
            voteScore: state.itens[action.id].voteScore + 1
          }
        }

      };
    case ACTIONS.DOWN_VOTE:
      return {
        ...state,
        itens: {
          ...state.itens,
          [action.id]: {
            ...state.itens[action.id],
            voteScore: state.itens[action.id].voteScore - 1
          }
        }

      };

    default:
      return state;
  }
}
