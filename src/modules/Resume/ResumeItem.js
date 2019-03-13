import React from "react";
import style from "./ResumeItem.module.scss";
import { TiPin } from "react-icons/ti";

const ResumeItem = ({ icon, title, number }) => {
  return (
    <div className={style["resume"]}>
      <div className={style["resume__icon"]}>
        <TiPin className={style["resume__icon-svg"]} />
      </div>
      <div className={style["resume__content"]}>
        <h3>Posts</h3>
        <span>25</span>
      </div>
    </div>
  );
};

export default ResumeItem;
