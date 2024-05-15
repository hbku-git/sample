import React from "react";
import MenuItems from "../data/menu-items";
import MenuItem from "./MenuItem";

const Menu = ({items=MenuItems}) => {
    items = items ? items : [];
    return (
        <div className="menu-tab menu-tab_v3">
            <div className="bg-info-light excellence-tabmenu">
                <div className="container">
                    <div className="menuTab-container">
                        <ul className="nav nav-tabs" id="menuTab" role="tablist">
                            {items.map(item=>(<MenuItem {...item} />))}
                        </ul>
                        <span className="menu-socialMedia">
							<a href="mailto:innovation@hbku.edu.qa"><i className="fa fa-envelope-o"></i></a>
							<a className="menuPrintIcon" href="javascript:void(0)"><i className="fa fa-print"></i></a>
						</span>
                    </div>
                </div>
            </div>
        </div>


)

}

export default Menu
