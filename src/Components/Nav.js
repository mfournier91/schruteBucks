import React from "react";
import Link from 'gatsby-link';
import indexStyles from "../styles/index.module.css";

class Nav extends React.Component {
    render() {
        return (
          <div>
            <ul className={indexStyles.menu}>
                <li>
                  <Link to="/">
                    <img
                    className={indexStyles.logo}
                    src={require("../images/moneybag.png")}
                    />
                  </Link>
                </li>
                <li><Link to="/schrute-bucks/">Schrute Bucks</Link></li>
                <li><Link to="/schrute-beets/">Schrute Beets</Link></li>
            </ul>
          </div>
        )
    }
}

export default Nav
