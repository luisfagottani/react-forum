import React from "react";
import style from "./InfoSinglePost.module.scss";
import { commentsCountRender } from "utils/helpers";

const InfoSinglePost = ({ post }) => {
  const dateToFormat = new Date(post.timestamp).toLocaleDateString("pt-BR");

  return (
    <section className={style["info"]}>
      <p>
        {`Este topico ${commentsCountRender(
          post.commentCount
        )} e sua última atualização foi em ${dateToFormat}
        por ${post.author}`}
      </p>
    </section>
  );
};

export default InfoSinglePost;
