import React from "react";
import style from "./Resume.module.scss";
import ResumeItem from "./ResumeItem";

const ResumeContainer = () => {
  return (
    <section class={style["resume-container"]}>
      <ResumeItem />
      <ResumeItem />
      <ResumeItem />
    </section>
  );
};

export default ResumeContainer;
