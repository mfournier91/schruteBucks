import React from "react";
import Link from 'gatsby-link';

class Nav extends React.Component {
    render() {
        return (<div>
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/placeholder/">Link</Link></li>
            </ul>
        </div>)
    }
}

export default Nav