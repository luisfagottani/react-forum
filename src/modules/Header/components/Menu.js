import React from "react";
import style from "./menu.module.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className={style["menu"]}>
      <li className={style["menu__item"]}>
        <Link to="/">Home</Link>{" "}
      </li>
      <li className={`${style["menu__item"]} ${style["menu__item--star"]}`}>
        <Link to="/new-post">New Posts</Link>
      </li>
    </ul>
  );
};

export default Menu;
