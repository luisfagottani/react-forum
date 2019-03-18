import React from "react";
import style from "./Rating.module.scss";
import { IconFactories } from "utils/factories";
import { ICONS } from "utils/constants";

const Rating = ({ votes }) => {
  return (
    <div className={style["rating"]}>
      <p className={style["rating__votes"]}>{votes}</p>
      <IconFactories
        className={`${style["rating__icon"]} ${style["rating__icon--up"]}`}
        icon={ICONS.THUMBS_UP}
      />
      <IconFactories
        className={`${style["rating__icon"]} ${style["rating__icon--down"]}`}
        icon={ICONS.THUMBS_DOWN}
      />
    </div>
  );
};

export default Rating;
