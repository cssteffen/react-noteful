import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <Link to="/">
        <header>
          <h1>Noteful</h1>
        </header>
      </Link>
    );
  }
}
