import React from "react";
//import {API_URL, BASE_URL} from "../store/constants";


const Biography = () => {

    return (<div className="dieBlock6__block__list ic-card-is-loading " >
        <div className="dieBlock6--image">
            <figure className="ripple-effect">
                <img src="https://www.hbku.edu.qa/sites/default/files/styles/faculty_image_detail__416x480_/public/emad-el-din-shahin_1.jpg"
                     alt="" className="full-width ic-img-bg"/>
            </figure>
        </div>
        <div className="dieBlock6__content-info">
            <div className="title  dieBlock6--header p-b-0 m-b-0 ic-img-bg">Emad El-Din Shahin (PhD)</div>
            <div className="title  dieBlock6--header p-b-0 m-b-0 ic-img-bg">CIS</div>
            <div className={' m-t-1'}>
                <div  className={'title text-bold text-xl-left text-black-100 ic-img-bg'}>Research Interests</div>
                <div className={'title d-flex overflow-auto flex-wrap ic-img-bg'}> Anatomy Functional Anatomy, Law, Policy </div>
                <a href="#" className="l-btn ">View Profile</a>
            </div>

        </div>
    </div>)
}


export default Biography;
