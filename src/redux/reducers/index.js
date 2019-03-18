import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";

import categories from "./categories";
import posts from "./posts";

export default combineReducers({
  loadingBar: loadingBarReducer,
  categories,
  posts
});
