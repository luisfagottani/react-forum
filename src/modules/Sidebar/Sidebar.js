import React from "react";
import style from "./Sidebar.module.scss";

const Sidebar = ({ children }) => (
  <ul className={style["sidebar"]}>{children}</ul>
);

Sidebar.Item = ({ children, ...props }) => (
  <li className={style["sidebar__item"]}>{children}</li>
);

Sidebar.Title = ({ title }) => (
  <h2 className={style["sidebar__title"]}>{title}</h2>
);

export default Sidebar;
