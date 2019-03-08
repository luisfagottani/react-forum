import React from "react";
import style from "./resumeItem.module.scss";

const ResumeItem = ({ icon, title, number }) => {
  return (
    <div className={style["resume"]}>
      <div className={style["resume__icon"]}>{icon}</div>
      <div className={style["resume__content"]}>
        <h3>{title}</h3>
        <span>{number}</span>
      </div>
    </div>
  );
};

export default ResumeItem;
