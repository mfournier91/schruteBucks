import React from "react";
import Nav from '../Components/Nav';
import indexStyles from "../styles/index.module.css";

export default () =>
  <div className={indexStyles.bucks}>
    <Nav />
    <div className={indexStyles.header}>
      <h1>Buy Now!</h1>
      <h3>Legitimate Currency!</h3>

    </div>
  </div>
