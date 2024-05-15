import React, {useEffect} from "react";

import {useParams} from "react-router-dom";
import Workshops from "../data/workshops";
import {changeTitle, changeTitleSEO, generalSelector} from "../store/reducers/generalReducer";
import {useDispatch, useSelector} from "react-redux";
import {useSSE} from "use-sse";

const WorkshopPage = ({
                      workshops = Workshops
                  }) =>{
    let params = useParams();
    const {id} = params;

    const generalSettings = useSelector(generalSelector);
    const {title} = generalSettings;
    const dispatch = useDispatch()

    let workshop = workshops.find(item => item.id === id) ;
    workshop = workshop? workshop :  {
        content:  '<div class="m-wrap "><h2 class="text-center">No Workshop Found</h2></div>'
    };

    useSSE(()=>{
        dispatch(changeTitle('Certified Workshop - '+workshop.title))
        dispatch(changeTitleSEO('Innovation Center | Certified Workshop |'+workshop.title))

        return Promise.resolve('Innovation Center | Certified Workshop |'+workshop.title)
    },[])


    useEffect(()=>{
        document.title = 'Innovation Center | Workshop | '+workshop.title

    },[workshop])

    return (
        <div className={'wrapper'}
             dangerouslySetInnerHTML={{__html: workshop.content}}
        >
        </div>
    )
}

export default WorkshopPage
