import React from "react";
import style from "./Breadcrumb.module.scss";
import { TiHome } from "react-icons/ti";
import { Link, withRouter, Route } from "react-router-dom";
import classnames from "classnames";

const Breadcrumb = ({ title }) => (
  <ul className={style["breadcrumb"]}>
    <li className={style["breadcrumb__item"]}>
      <Link to="/">
        <TiHome />
      </Link>
    </li>
    <Route
      path="/:path"
      render={props => <Breadcrumb.Item title={title} {...props} />}
    />
  </ul>
);

Breadcrumb.Item = ({ match, title, ...rest }) => (
  <>
    <li
      className={classnames(style["breadcrumb__item"], {
        [style[`breadcrumb__item--active`]]: match.isExact
      })}
    >
      <Link to={match.url || ""}>
        {match.isExact ? title : match.params.path}
      </Link>
    </li>
    <Route
      path={`${match.url}/:path`}
      render={props => <Breadcrumb.Item title={title} {...props} />}
    />
  </>
);

Breadcrumb.Item.displayName = "BreadcrumbItem";

export default withRouter(Breadcrumb);
