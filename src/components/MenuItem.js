import React from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";

const MenuItem = ({
                      title = 'link',
                      link = '#',
                      ...props
                  }) => {
    let resolved = useResolvedPath(link);
    let match = useMatch({path: resolved.pathname, end: true});
    return (
        <Link to={link}>
        <li className="nav-item home">
            <a className={`nav-link ${match ? 'active':''}`}  href={link}
               aria-controls="menu-1" aria-selected="false">{title}</a>
        </li>
        </Link>
    )
}

export default MenuItem;
