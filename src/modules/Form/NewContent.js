import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./NewContent.module.scss";
import { TYPE_CONTEXT } from "../../utils/constants";
import { handleAddComment } from "redux/actions/comments";
class NewContent extends Component {
  state = {
    name: "",
    text: ""
  };

  postContent(e) {
    const { typeForm, id, dispatch } = this.props;

    if (
      this.state.name.trim().length <= 0 ||
      this.state.text.trim().length <= 0
    )
      return null;
    if (typeForm === TYPE_CONTEXT.COMMENT) {
      dispatch(
        handleAddComment({
          author: this.state.name,
          body: this.state.text,
          timestamp: e.timeStamp,
          parentId: id
        })
      );
    }
    this.setState({ name: "", text: "" });
  }
  render() {
    const { typeForm } = this.props;
    const isPost = typeForm === TYPE_CONTEXT.POST;
    return (
      <form className={style["new-content"]}>
        <fieldset>
          <legend>{isPost ? "Novo Post" : "Novo Comentário"}</legend>
          <input
            type="text"
            placeholder="Nome"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <textarea
            name="text"
            cols="30"
            rows="10"
            placeholder="Mensagem"
            onChange={e => this.setState({ text: e.target.value })}
            value={this.state.text}
          />
          <button
            onClick={e => {
              e.preventDefault();
              this.postContent(e);
            }}
          >
            Cadastrar
          </button>
        </fieldset>
      </form>
    );
  }
}

export default connect()(NewContent);
