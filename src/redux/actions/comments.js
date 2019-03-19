import { ACTIONS } from "utils/constants";

export const totalComments = comments => ({
  type: ACTIONS.TOTAL_COMMENTS,
  comments
});
