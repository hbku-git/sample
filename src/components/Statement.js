import React from "react";

const Statement = ({
    title,image,description
})=>{
    return (
        <div className="dieBlock6__block__list " data-id="1">
            <div className="dieBlock6--image">
                <figure className="ripple-effect">
                    <img src={image}
                         alt="" className="full-width"/>
                </figure>
            </div>
            <div className="dieBlock6__content-info">
                <div className="dieBlock6--header p-b-0 m-b-0">{title}</div>
                <div className="dieBlock6--footer">{description}
                </div>

            </div>
        </div>
    )
}

export default Statement;
