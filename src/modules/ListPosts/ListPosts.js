import React from "react";
import { Link } from "react-router-dom";

import TableView from "modules/TableView";
import { ICONS, TYPE_CONTEXT } from "utils/constants.js";
import style from "./ListPosts.module.scss";
import Rating from "modules/Rating";

const ListPosts = ({ posts }) => {
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
      {posts &&
        Object.values(posts).map(post => (
          <TableView.Row key={post.id}>
            <TableView.Column widthCol="40">
              <h3 className={style["list-posts__info"]}>
                <Link
                  to={`/${post.category}/${post.id}`}
                  params={{ id: post.id }}
                  title="Central de ajuda"
                >
                  {post.title}
                </Link>
                <span className={style["list-posts__info-author"]}>
                  Started by: {post.author}
                </span>
              </h3>
            </TableView.Column>
            <TableView.Column widthCol="12" alignContent={"center"}>
              <h3 className={style["list-posts__category"]}>
                <Link to={`/${post.category}`} title="Central de ajuda">
                  {post.category}
                </Link>
              </h3>
            </TableView.Column>

            <TableView.Column widthCol="12" alignContent={"center"}>
              <p>{post.commentCount}</p>
            </TableView.Column>

            <TableView.Column widthCol="12" alignContent={"right"}>
              <Rating
                votes={post.voteScore}
                type={TYPE_CONTEXT.POST}
                id={post.id}
              />
            </TableView.Column>
          </TableView.Row>
        ))}
    </TableView>
  );
};

export default ListPosts;
