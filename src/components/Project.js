import React from "react";
import {useNavigate} from "react-router-dom";

const Project = ({
                     title,
                     image,
                     summary,
                     id
                 }) => {
    const navigate = useNavigate();
    const click = (evt) => {
        evt.preventDefault();
        navigate('/project/' + id)
    }
    return (
            <div onClick={click}
                 className="dieBlock6__block__list f1 dieBlock6__block__list__img"
                 style={{
                     backgroundImage: `url('${image}')`
                 }}>
                <div className="dieBlock6__content-info">
                    <a>
                        <div className="dieBlock6--header">
                            {title}
                        </div>
                        <div className="dieBlock6--footer">
                            {summary}
                        </div>
                    </a>
                    <div className="dieBlock6--morelink"><a
                        href="InnerPage/ic-projects-data-analytics-career-path.html">Learn
                        more <i className="fa fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
    )
}


export default Project;
