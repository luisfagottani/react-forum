import { getInitialData } from "utils/api";
import { setCategories } from "./categories";
import { setPosts } from "./posts";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ categories, posts }) => {
      dispatch(setCategories(categories));
      dispatch(setPosts(posts));
      dispatch(hideLoading());
    });
  };
}
