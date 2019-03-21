import React from "react";
import { connect } from "react-redux";
import style from "./Rating.module.scss";
import { IconFactories } from "utils/factories";
import { ICONS } from "utils/constants";
import { handleVotePost } from "redux/actions/posts";
import { ACTIONS } from "utils/constants";

const Rating = ({ votes, handleClickVote }) => {
  return (
    <div className={style["rating"]}>
      <p className={style["rating__votes"]}>{votes}</p>
      <IconFactories
        className={`${style["rating__icon"]} ${style["rating__icon--up"]}`}
        icon={ICONS.THUMBS_UP}
        onClick={() => handleClickVote("6ni6ok3ym7mf1p33lnez", ACTIONS.UP_VOTE)}
      />
      <IconFactories
        className={`${style["rating__icon"]} ${style["rating__icon--down"]}`}
        icon={ICONS.THUMBS_DOWN}
        onClick={() =>
          handleClickVote("6ni6ok3ym7mf1p33lnez", ACTIONS.DOWN_VOTE)
        }
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  handleClickVote: (id, type) => dispatch(handleVotePost(id, type))
});
export default connect(
  null,
  mapDispatchToProps
)(Rating);
