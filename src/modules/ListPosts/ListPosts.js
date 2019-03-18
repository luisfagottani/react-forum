import React from "react";
import { Link } from "react-router-dom";

import TableView from "modules/TableView";
import { ICONS } from "utils/constants.js";
import style from "./ListPosts.module.scss";

const ListPosts = () => {
  return (
    <TableView>
      <TableView.Row isHeader={true}>
        <TableView.Column widthCol="40">
          <TableView.HeaderTitle>ÚLTIMOS POSTS</TableView.HeaderTitle>
        </TableView.Column>
        <TableView.Column
          widthCol="12"
          alignContent={"center"}
          icon={ICONS.BALLOON}
        />
        <TableView.Column
          widthCol="12"
          alignContent={"center"}
          icon={ICONS.BALLOONS}
        />
        <TableView.Column
          widthCol="12"
          alignContent={"right"}
          icon={ICONS.TIME}
        />
      </TableView.Row>
      <TableView.Row>
        <TableView.Column widthCol="40">
          <h3 className={style["list-posts__info"]}>
            <Link to="/help/" title="Central de ajuda">
              How i make the product work on react?!
            </Link>
            <span className={style["list-posts__info-author"]}>
              Started by: luisagottani35
            </span>
          </h3>
        </TableView.Column>
        <TableView.Column widthCol="12" alignContent={"center"}>
          <h3 className={style["list-posts__category"]}>
            <Link to="/help/" title="Central de ajuda">
              Category
            </Link>
          </h3>
        </TableView.Column>

        <TableView.Column widthCol="12" alignContent={"center"}>
          <p>0</p>
        </TableView.Column>

        <TableView.Column widthCol="12" alignContent={"right"}>
          135 VOTES
        </TableView.Column>
      </TableView.Row>
    </TableView>
  );
};

export default ListPosts;
