import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {changeTitle, changeTitleSEO, generalSelector} from "../store/reducers/generalReducer";
import {useSSE} from "use-sse";

const InnovationPage  = () => {


    const generalSettings = useSelector(generalSelector);
    const {title} = generalSettings;
    const dispatch = useDispatch()

    useSSE(()=>{
        dispatch(changeTitle('Innovation Center'))
        dispatch(changeTitleSEO('Innovation Center | About'))

        return Promise.resolve('Innovation Center | About')
    },[])

    useEffect(()=>{
        document.title = 'Innovation Center | About'

    },[])

    return (
        <section className="m-wrap ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-20 col-md-20">
                        <div className="m-b-2">
                            <div className="big">

                                <h2 className="title-xl m-b-2 text-darkblue">HBKU Innovation Center</h2>
                                <p>Hamad Bin Khalifa University’s Innovation Center is a pioneering initiative designed
                                    to strengthen the innovation and entrepreneurship ecosystem within and outside HBKU.
                                    It serves as the only innovation and entrepreneurship platform at HBKU for
                                    connecting people and sharing ideas, resources, and expertise, providing
                                    opportunities for meaningfully unique collaborations. </p>
                                <p>Seeking to bring together members of the community and leaders in start-up
                                    ecosystems, the HBKU Innovation Center facilitates productive and relevant
                                    collaboration, assists local businesses and industries in developing an innovative
                                    focus, idea generation, connects start-up teams with potential investment
                                    opportunities, and provides support services. </p>

                                <div className="cl2019quote__person" style={{
                                    marginTop: 100
                                }}>
                                    <figure className="cl2019quote__person--img">
                                        <img className="img-circle" src="images/Nadir-Yildirim-thum.png"/>
                                    </figure>
                                    <div className="cl2019quote__person__info">
                                        <h5 className="person-name">Dr. Nadir Yildirim</h5>
                                        <h6 className="person-designation">Innovation Director</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-24 col-md-26 col-lg-offset-4 col-md-offset-2">
                        <div className="video-wrap img-border">
                            <video controls poster="/images/nadir-video-poster.jpg">
                                <source src="/images/nadir-final-compressed.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InnovationPage;
