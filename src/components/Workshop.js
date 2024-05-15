import React from "react";

import {useNavigate} from "react-router-dom";

const Workshop = ({
    title,
    image,
    id,
    cssClass = 'services-category col-xs-24 col-sm-16 col-md-12'
})=>{
    const navigate = useNavigate();
    const click = (evt)=>{
        evt.stopPropagation();
        evt.preventDefault();
        navigate('/workshop/'+id)
    }
    return (
        <div onClick={click} className={cssClass} style={{margin:8}}>
            <div className="col-inner">
                <div className="box-category">
                    <div className="box-image">
                        <img className="full-width" src={image} alt={title}/>
                    </div>
                    <div className="box-text">
                        <a href="#">
                            <h3 className=" box-text--title">
                                {title}
                            </h3>
                        </a>
                        <div className="box-text--morelink"><a
                            href="#">Learn
                            more <i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workshop
