import React from "react";
import style from "./ResumeItem.module.scss";
import classnames from "classnames";
import { IconFactories } from "utils/factories";

class ResumeItem extends React.PureComponent {
  render() {
    const { icon, title, number, color } = this.props;

    const classNames = classnames(style["resume"], {
      [style[`resume--${color}`]]: !!color
    });
    return (
      <div className={classNames}>
        <div className={style["resume__icon"]}>
          <IconFactories icon={icon} className={style["resume__icon-svg"]} />
        </div>
        <div className={style["resume__content"]}>
          <h3>{title}</h3>
          <span>{number}</span>
        </div>
      </div>
    );
  }
}

export default ResumeItem;
