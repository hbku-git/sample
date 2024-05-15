import React, {useEffect} from "react";

import Workshops from "../data/workshops";
import Workshop from "../components/Workshop";
import {useDispatch, useSelector} from "react-redux";
import {changeTitle, changeTitleSEO, generalSelector} from "../store/reducers/generalReducer";
import {useSSE} from "use-sse";

const WorkshopsPage = ({
    workshops = Workshops
})=>{

    const generalSettings = useSelector(generalSelector);
    const {title} = generalSettings;
    const dispatch = useDispatch()

    useSSE(()=>{
        dispatch(changeTitle('Innovation Center'))
        dispatch(changeTitleSEO('Innovation Center | Certified Workshops'))

        return Promise.resolve('Innovation Center | Certified Workshops')
    },[])

    useEffect(()=>{
        document.title = 'Innovation Center | Certified Workshops'
    },[])
    return (
        <section className="m-wrap bg-gray6 " id="section4">
            <div className="services-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-48">
                            <div className="title--info">
                                <h2 className="title-xl m-b-2 text-darkblue ">
                                    Certified Workshops </h2>
                                <p>If you are interested in having the following certification program(s), or if you are
                                    looking for additional workshops/certification programs not listed here, please <a
                                        className="ic-contactus" href="#">Contact us</a></p>
                            </div>
                            <div className="row row-eq-height">
                                {workshops.map(
                                    (item,i)=> (
                                        <Workshop {...item} key={'workshop-'+i} />
                                    )
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkshopsPage;
