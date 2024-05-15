import React from "react";
import {API_URL, BASE_URL} from "../store/constants";


const Biography = ({bio}) => {

    let {
        title,
        Image,
        nid,
        field_related_college,
        suffix

    } = bio;

    const subthemes = bio['subtheme-text'];
    suffix = suffix instanceof Array ? '' : suffix;
    
   // console.log('suffix',{suffix});

    const visit = ()=>{
        window.open(BASE_URL+'node/'+nid, "_blank")
    }

    return (<div  onClick={visit} style={{
        zIndex:0
    }} className="dieBlock6__block__list  " >
        <div className="dieBlock6--image">
            <figure className="ripple-effect">
                <img src={Image}
                     alt="" className="full-width"/>
            </figure>
        </div>
        <div className="dieBlock6__content-info">
            <div className="dieBlock6--header p-b-0 m-b-0">
                {/* {suffix}  */}
                {title}</div>
            <div className="dieBlock6--footer">{field_related_college}
            </div>
            <div className={' m-t-1'}>
                <div className={'text-bold text-xl-left text-black-100'}>Areas of Expertise:</div>
                <div className={'d-flex overflow-auto flex-wrap'}>
                    {subthemes.map(item=>{
                        return (<span style={{
                            borderRadius:10,
                            fontSize:10,
                        }
                        } className={'bg-darkblue text-white p-1 p-x-2 m-t-1  m-r-2 '}>
                        {item}
                    </span>)
                    })}
                </div>
            </div>

        </div>
    </div>)
}


export default Biography;
