import React from "react";
import Link from 'gatsby-link';
import indexStyles from "../styles/index.module.css";

class Nav extends React.Component {
    render() {
        return (
          <div>
            <ul className={indexStyles.menu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/placeholder/">Link</Link></li>
            </ul>
          </div>
        )
    }
}

export default Nav
