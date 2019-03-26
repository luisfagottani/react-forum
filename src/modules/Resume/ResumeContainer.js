import React from "react";
import style from "./Resume.module.scss";
import { connect } from "react-redux";
import {
  getNumberOfPosts,
  getNumberOfCategories,
  getTotalCountComments
} from "redux/selectors";

import ResumeItem from "./ResumeItem";
import { ICONS } from "utils/constants";

const ResumeContainer = ({
  numberPosts,
  numberCategories,
  totalCountComments
}) => {
  return (
    <section className={style["resume-container"]}>
      <ResumeItem icon={ICONS.POSTS} title={"Posts"} number={numberPosts} />
      <ResumeItem
        icon={ICONS.TOPICS}
        title={"Topics"}
        color="blue"
        number={numberCategories}
      />
      <ResumeItem
        icon={ICONS.REPLIES}
        title={"Replies"}
        color="red"
        number={totalCountComments}
      />
    </section>
  );
};

const mapStateToProps = state => ({
  numberPosts: getNumberOfPosts(state),
  numberCategories: getNumberOfCategories(state),
  totalCountComments: getTotalCountComments(state)
});

export default connect(mapStateToProps)(ResumeContainer);
