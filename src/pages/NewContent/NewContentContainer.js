import React, { Component } from "react";
import NewContent from "modules/Form/NewContent";

class NewContentContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <NewContent edit={this.props.edit} typeForm={this.props.typeContent} />
      </div>
    );
  }
}

export default NewContentContainer;
