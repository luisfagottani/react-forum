import React, { Component } from "react";
import { connect } from "react-redux";
import { getOrderBy } from "redux/selectors";
import { setOrderBy } from "redux/actions/posts";
import style from "./Filter.module.scss";

class Filter extends Component {
  render() {
    return (
      <div className={style["filter"]}>
        Filtar por:
        <select
          className={style["filter__select"]}
          value={this.props.orderBy}
          onChange={e => this.props.dispatch(setOrderBy(e.target.value))}
        >
          <option value="voteScore">Maior avaliação</option>
          <option value="timestamp">Data</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orderBy: getOrderBy(state)
});
export default connect(mapStateToProps)(Filter);
