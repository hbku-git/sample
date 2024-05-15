import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {changeTitle, changeTitleSEO, generalSelector} from "../store/reducers/generalReducer";
import {useSSE} from "use-sse";

const ContactUsPage = ()=>{
    const generalSettings = useSelector(generalSelector);
    const {title} = generalSettings;
    const dispatch = useDispatch()

    useSSE(()=>{
        dispatch(changeTitle('Innovation Center'))
        dispatch(changeTitleSEO('Innovation Center | Contact Us'))
        return Promise.resolve('Innovation Center | Contact Us');
    },[])

    useEffect(() => {
        document.title = 'Innovation Center | Contact Us'
    }, []);


    return (
        <section className="m-wrap ">
            <div className="container">
                <div className="row">
                    <div className="col-md-24">
                        <div className=" contactus-block border border-primary m-b-3">
                            <div className="card-body"><h5 className="card-title">Innovation at HBKU</h5>
                                <ul>
                                    <li><span> <i className="fa fa-envelope-o"></i> </span> <a
                                        href="mailto:innovation@hbku.edu.qa ">innovation@hbku.edu.qa </a></li>
                                    <li><span><i className="fa fa-map-marker"></i> </span> P.O. Box: 34110,
                                        Education City, Doha, Qatar
                                    </li>
                                    <li><span><i className="fa fa-hand-o-up"></i> </span> <a
                                        href="https://hbku.wufoo.com/forms/kmoeqt01h3o402/" target="_blank"> Apply
                                        Now</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-24"></div>

                </div>
            </div>
        </section>
    )
}


export default ContactUsPage;
