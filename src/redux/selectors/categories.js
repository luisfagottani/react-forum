import { createSelector } from "reselect";

export const getAllCategories = state => state.categories;

export const getNumberOfCategories = createSelector(
  getAllCategories,
  categories => Object.keys(categories).length
);
