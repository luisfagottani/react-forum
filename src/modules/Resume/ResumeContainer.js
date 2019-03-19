import React from "react";
import style from "./Resume.module.scss";
import { connect } from "react-redux";
import { getNumberOfPosts, getNumberOfCategories } from "redux/selectors";

import ResumeItem from "./ResumeItem";
import { ICONS } from "utils/constants";

const ResumeContainer = ({ numberPosts, numberCategories }) => {
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
        number={33}
      />
    </section>
  );
};

const mapStateToProps = state => ({
  numberPosts: getNumberOfPosts(state),
  numberCategories: getNumberOfCategories(state)
});

export default connect(mapStateToProps)(ResumeContainer);
