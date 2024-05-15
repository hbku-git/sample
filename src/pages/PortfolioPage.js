import Projects from "../data/projects";
import Project from "../components/Project";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeTitle, changeTitleSEO, generalSelector} from "../store/reducers/generalReducer";
import {useSSE} from "use-sse";

const PortfolioPage = ({
    projects = Projects
                       }) =>{

    const generalSettings = useSelector(generalSelector);
    const {title} = generalSettings;
    const dispatch = useDispatch()


    useSSE(()=>{
        dispatch(changeTitle('Innovation Center'))
        dispatch(changeTitleSEO('Innovation Center | Our Portfolio'))

        return Promise.resolve('Innovation Center | Our Portfolio')
    },[])

    useEffect(()=>{
        document.title = 'Innovation Center | Our Portfolio'

    },[])

    return (
        <section className="l-wrap bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-48">
                        <div className="big">
                            <h2 className="title-xl m-b-2 text-darkblue"> Showcasing Technologies Within Our
                                Portfolio </h2>
                        </div>
                        <div className="tabmenu1-tabwrapper tabmenu1-filter">
                            <div className="tabmenu1-tab">
                                <div className="tab-content" id="tabmenu1TabContent">
                                    <div className="tabmenu1-tabContent">
                                        <div className="row">
                                            <div className="col-md-48">
                                                <div className="dieBlock6__block">

                                                    {projects.map((item,i)=>(
                                                        <Project {...item} key={'project-'+i} />
                                                    ))}

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioPage;
