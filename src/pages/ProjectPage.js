import React, {useEffect} from "react";

import {useParams} from "react-router-dom";
import Projects from "../data/projects";
import {useDispatch, useSelector} from "react-redux";
import {changeTitle, changeTitleSEO, generalSelector} from "../store/reducers/generalReducer";
import {useSSE} from "use-sse";

const ProjectPage = ({
                         projects = Projects
                     }) => {
    let params = useParams();
    const {id} = params;

    const generalSettings = useSelector(generalSelector);
    const {title} = generalSettings;
    const dispatch = useDispatch()

    let project = projects.find(item => item.id === id);
    project = project ? project : {
        content: '<div class="m-wrap "><h2 class="text-center">No Project Found</h2></div>'
    };

    useSSE(()=>{
        dispatch(changeTitle( project.title))
        dispatch(changeTitleSEO('Innovation Center | Project |'+project.title))

        return Promise.resolve('Innovation Center | Project |'+project.title)
    },[])

    useEffect(() => {
        document.title = 'Innovation Center | Project | ' + project.title

    }, [project])

    return (
        <div className={'warpper'}
             dangerouslySetInnerHTML={{__html: project.content}}
        >
        </div>
    )
}

export default ProjectPage;
