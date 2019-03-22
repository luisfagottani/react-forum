import React from "react";
import { connect } from "react-redux";
import style from "./Rating.module.scss";
import { IconFactories } from "utils/factories";
import { ICONS } from "utils/constants";
import { handleVotePost } from "redux/actions/posts";
import { ACTIONS } from "utils/constants";
import classnames from "classnames";

class Rating extends React.PureComponent {
  state = {
    activeTop: false,
    activeDown: false
  };

  handleSetStateUp() {
    this.setState({
      activeTop: true
    });
    this.resetState();
  }

  handleSetStateDown() {
    this.setState({
      activeDown: true
    });
    this.resetState();
  }

  resetState() {
    setTimeout(
      () =>
        this.setState({
          activeTop: false,
          activeDown: false
        }),
      500
    );
  }
  render() {
    const { votes, handleClickVote, id } = this.props;

    return (
      <div className={style["rating"]}>
        <p
          className={classnames(style["rating__votes"], {
            [style[`rating__votes--red`]]: votes < 0
          })}
        >
          {votes}
        </p>
        <div className={style["rating__relative"]}>
          <IconFactories
            className={`${style["rating__icon"]} ${style["rating__icon--up"]}`}
            icon={ICONS.THUMBS_UP}
            onClick={() => {
              handleClickVote(id, ACTIONS.UP_VOTE);
              this.handleSetStateUp();
            }}
          />
          <IconFactories
            className={classnames(
              `${style["rating__icon"]} ${style["rating__icon-ghost"]} ${
                style["rating__icon--up"]
              }`,
              {
                [style["rating__icon-ghost--up"]]: this.state.activeTop
              }
            )}
            icon={ICONS.THUMBS_UP}
          />
        </div>

        <div className={style["rating__relative"]}>
          <IconFactories
            className={`${style["rating__icon"]} ${
              style["rating__icon--down"]
            }`}
            icon={ICONS.THUMBS_DOWN}
            onClick={() => {
              handleClickVote(id, ACTIONS.DOWN_VOTE);
              this.handleSetStateDown();
            }}
          />
          <IconFactories
            className={classnames(
              `${style["rating__icon"]} ${style["rating__icon-ghost"]} ${
                style["rating__icon--down"]
              }`,
              {
                [style["rating__icon-ghost--down"]]: this.state.activeDown
              }
            )}
            icon={ICONS.THUMBS_DOWN}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleClickVote: (id, type) => dispatch(handleVotePost(id, type))
});
export default connect(
  null,
  mapDispatchToProps
)(Rating);
