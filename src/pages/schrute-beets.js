import React from "react";
import Nav from '../Components/Nav';
import indexStyles from "../styles/index.module.css";

export default () =>
  <div className={indexStyles.beets}>
    <Nav />
    <div className={indexStyles.header}>
      <h1>We've got the beets</h1>
      <h3>60 glorious acres of sweet, sweet beets</h3>
    </div>
  </div>
