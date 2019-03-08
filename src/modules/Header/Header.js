import React, { Component } from "react";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import style from "./header.module.scss";

class Header extends Component {
  render() {
    return (
      <header className={style["header"]}>
        <div className={`${style["header__nav"]} wrapper`}>
          <Logo />
          <Menu />
        </div>
      </header>
    );
  }
}

export default Header;
