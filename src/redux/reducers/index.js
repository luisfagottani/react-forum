import {
  combineReducers
} from "redux";
import {
  loadingBarReducer
} from "react-redux-loading";

import categories from "./categories";
import posts from "./posts";
import comments from "./comments";

export default combineReducers({
  loadingBar: loadingBarReducer,
  categories,
  posts,
  comments
});
