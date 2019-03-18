import React from "react";
import style from "./TableView.module.scss";
import { IconFactories } from "utils/factories";
import classnames from "classnames";

const TableView = ({ children, classNames }) => (
  <ul className={style["table-view"]}>{children}</ul>
);

TableView.Row = ({ children, isHeader }) => (
  <ul
    className={classnames(
      { [style["table-view__header"]]: isHeader },
      style["table-view__row"]
    )}
  >
    {children}
  </ul>
);

TableView.Column = ({ children, icon, widthCol, alignContent }) => {
  const classNames = classnames(style["table-view__col"], {
    [style[`table-view__col--${alignContent}`]]: !!alignContent
  });
  return (
    <li style={{ width: widthCol + "%" }} className={classNames}>
      {icon && (
        <IconFactories icon={icon} className={style["table-view__icon"]} />
      )}
      {children && children}
    </li>
  );
};

TableView.HeaderTitle = ({ children }) => (
  <h3 className={style["table-view__header-title"]}>{children}</h3>
);

export default TableView;
