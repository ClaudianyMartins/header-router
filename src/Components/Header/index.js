import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <nav>
          <Link to="/home"> Home </Link>
          <Link to="/musica"> Minha Música favorita </Link>
        </nav>
      </div>
    );
  }
}
