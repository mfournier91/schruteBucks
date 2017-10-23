import React from "react";
import Nav from '../Components/Nav';
import indexStyles from "../styles/index.module.css";

export default () =>
  <div className={indexStyles.background}>
    <Nav />
    <div className={indexStyles.header}>
      <h1>Schrute Bucks.</h1>
      <h3>The best cryptocurrency Stanley Nickles can buy</h3>
    </div>
  </div>
