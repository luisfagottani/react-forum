import React from "react";
import style from "./Resume.module.scss";
import ResumeItem from "./ResumeItem";
import { ICONS } from "utils/constants";

const ResumeContainer = () => {
  return (
    <section className={style["resume-container"]}>
      <ResumeItem icon={ICONS.POSTS} title={"Posts"} number={33} />
      <ResumeItem
        icon={ICONS.TOPICS}
        title={"Topics"}
        color="blue"
        number={33}
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

export default ResumeContainer;
