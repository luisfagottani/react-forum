import React from "react";
import style from "./Profile.module.scss";
class Profile extends React.PureComponent {
  render() {
    const { name } = this.props;
    let initials = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || "") + (initials.pop() || "")
    ).toUpperCase();
    return (
      <div className={style["profile"]}>
        <div
          className={style["profile__avatar"]}
          style={{
            backgroundColor:
              "#" + Math.floor(Math.random() * 16777215).toString(16)
          }}
        >
          <span>{initials}</span>
        </div>
        <h4 className={style["profile__user"]}>{name}</h4>
      </div>
    );
  }
}

export default Profile;
