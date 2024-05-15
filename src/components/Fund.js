import React from "react";

import {Link} from "react-router-dom";

const Fund = ({
    title,
    summary,
    image,
    id
})=>{
    return (
        <div className="services-category col-xs-24 col-sm-16 col-md-12">
            <div className="col-inner">
                <Link to={'/fund/'+id}>
                    <div className="box-category">
                        <div className="box-image">
                            <img className="full-width" src={image} alt=""/>
                        </div>
                        <div className="box-text">
                            <h3 className=" box-text--title">
                                {title}
                            </h3>
                            <div className="box-text--des">
                                <p>
                                    {summary}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Fund;
