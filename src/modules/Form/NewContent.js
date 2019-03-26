import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./Form.module.scss";
import { TYPE_CONTEXT } from "utils/constants";
import {
  handleAddComment,
  setCommentsByPost,
  handleUpdateComment
} from "redux/actions/comments";
import { handleAddPost, handleUpdatePost } from "redux/actions/posts";
import { getAllCategories, getPostById, getCommentById } from "redux/selectors";
import { withRouter } from "react-router-dom";
class NewContent extends Component {
  state = {
    title: "",
    name: "",
    text: "",
    category: "initial"
  };

  componentDidMount() {
    const { typeForm, comment, match, setCommentsPosts, post } = this.props;
    const isPost = typeForm === TYPE_CONTEXT.POST;

    if (this.props.edit) {
      if (isPost) {
        if (post) {
          this.setState({
            title: post && post.title,
            name: post && post.author,
            text: post && post.body,
            category: post && post.category
          });
        }
      } else {
        if (!comment) {
          setCommentsPosts(match.params.parentId);
        } else {
          this.setState({
            title: "",
            name: comment && comment.author,
            text: comment && comment.body,
            category: "initial"
          });
        }
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({ title: "", name: "", text: "", category: "initial" });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { edit } = this.props;
    const { comment, post } = nextProps;
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (comment && edit && comment.author !== this.state.name) {
      this.setState({
        title: "",
        name: comment && comment.author,
        text: comment && comment.body,
        category: "initial"
      });
    }

    if (post && edit && post.author !== this.state.name) {
      this.setState({
        title: post && post.title,
        name: post && post.author,
        text: post && post.body,
        category: post && post.category
      });
    }
  }

  postContent(e) {
    const { typeForm, id, edit } = this.props;

    if (
      this.state.text.trim().length <= 0 ||
      this.state.name.trim().length <= 0
    )
      return null;
    if (typeForm === TYPE_CONTEXT.COMMENT) {
      if (edit) {
        this.props.updateComment({
          id: this.props.match.params.id,
          body: this.state.text,
          timestamp: Date.now()
        });
        this.props.history.push(
          `/${this.props.match.params.category}/${
            this.props.match.params.parentId
          }`
        );
      } else {
        this.props.addComment({
          author: this.state.name,
          body: this.state.text,
          timestamp: Date.now(),
          parentId: id
        });
      }
    } else {
      if (
        this.state.category.trim().length <= 0 ||
        this.state.title.trim().length <= 0
      )
        return null;
      if (edit) {
        this.props
          .updatePost({
            id: this.props.match.params.id,
            body: this.state.text,
            title: this.state.title
          })
          .then(post =>
            this.props.history.push(`/${post.category}/${post.id}`)
          );
      } else {
        this.props
          .addPost({
            author: this.state.name,
            body: this.state.text,
            timestamp: Date.now(),
            category: this.state.category,
            title: this.state.title
          })
          .then(post =>
            this.props.history.push(`/${post.category}/${post.id}`)
          );
      }
    }
    this.setState({ title: "", name: "", text: "", category: "initial" });
  }

  render() {
    const { typeForm, categories, edit } = this.props;
    const isPost = typeForm === TYPE_CONTEXT.POST;
    return (
      <form className={style["form"]}>
        <fieldset>
          <legend>
            {isPost
              ? `${edit ? `Editar` : `Novo`} Post`
              : `${edit ? `Editar` : `Novo`} Comentário`}
          </legend>
          {!edit && (
            <input
              type="text"
              placeholder="Seu Nome"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          )}
          {isPost && (
            <input
              type="text"
              placeholder="Titulo do Post"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
          )}

          {isPost && !edit && (
            <select
              value={this.state.category}
              onChange={e => this.setState({ category: e.target.value })}
            >
              <option value="initial" disabled>
                Escolha uma Categoria
              </option>
              {categories &&
                Object.values(categories).map(category => (
                  <option key={category.path} value={category.path}>
                    {category.name}
                  </option>
                ))}
            </select>
          )}

          <textarea
            input="text"
            cols="30"
            rows="10"
            placeholder={
              isPost
                ? "Fale o que vc quer distribuir por ai!"
                : "Deixe seu comentário!"
            }
            onChange={e => this.setState({ text: e.target.value })}
            value={this.state.text}
          />
          <button
            onClick={e => {
              e.preventDefault();
              this.postContent(e);
            }}
          >
            {edit ? "Atualizar" : "Cadastrar"}
          </button>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  categories: getAllCategories(state),
  post: getPostById(ownProps.match.params.id, state),
  comment: getCommentById(
    state,
    ownProps.match.params.parentId,
    ownProps.match.params.id
  )
});

const mapDispatchToProps = dispatch => ({
  setCommentsPosts: id => dispatch(setCommentsByPost(id)),
  updatePost: post => dispatch(handleUpdatePost(post)),
  updateComment: comment => dispatch(handleUpdateComment(comment)),
  addPost: post => dispatch(handleAddPost(post)),
  addComment: comment => dispatch(handleAddComment(comment))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewContent)
);
