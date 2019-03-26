import React from "react";
import TableView from "modules/TableView";
import { ICONS } from "utils/constants.js";
import Post from "./Post";
import Filter from "modules/Filter";

class ListPosts extends React.PureComponent {
  renderPosts() {
    const { posts } = this.props;

    return Object.values(posts).map(post => <Post key={post.id} post={post} />);
  }
  render() {
    const { posts } = this.props;

    return (
      <React.Fragment>
        <Filter />
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
          {posts && this.renderPosts()}
        </TableView>
      </React.Fragment>
    );
  }
}

export default ListPosts;
