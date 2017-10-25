import React from "react";
import Nav from '../Components/Nav';
import indexStyles from "../styles/index.module.css";

export default () =>
  <div className={indexStyles.bucks}>
    <Nav />
    <div className={indexStyles.header}>
      <h1>Buy Now!</h1>
      <h3>Legitimate Currency!</h3>
        <br />
        <h1>How it works</h1>
        <iframe width="854" height="480" src="https://www.youtube.com/embed/gT_nb14b_QM" frameborder="0" gesture="media" allowfullscreen></iframe>
    </div>
  </div>
