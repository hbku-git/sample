import React from "react";
import {Link} from "react-router-dom";
import Projects from "../data/projects";
import Project from "../components/Project";

const shuffle = (inputArray) => {
    const sorted = [...inputArray];
        sorted.sort(()=> Math.random() - 0.5);
    return sorted;
}

const PortfolioBlock = ({
    projects = Projects
                        }) => {
    const selected = projects ? shuffle(projects).slice(0, 3) : [];
    return (
        <section className="l-wrap tabmenu1-section bg-darkblue animatedParent animateOnce" data-sequence="200"
                 data-appear-top-offset="-200">
            <div className="container">
                <div className="row">
                    <div className="col-md-48">
                        <div className="tabmenu1__title relative">
                            <h2 className="title-xl m-b-3 text-white animated fadeInUpShort go" data-id="1">Showcasing
                                Technologies Within Our Portfolio </h2>
                        </div>
                        <div className="tabmenu1-tabwrapper tabmenu1-filter">
                            <div className="tabmenu1-tab">
                                <div className="tab-content animated fadeInUpShort go" data-id="3"
                                     id="tabmenu1TabContent">
                                    <div className="animated fadeInUpShort go" data-id="3">
                                        <div className="inner">
                                            <div className="tabmenu1-tabContent">
                                                <div className="row">
                                                    <div className="col-md-44 col-md-offset-2">
                                                        <div className="dieBlock6__block">
                                                            {selected.map((item,i)=>(
                                                                <Project {...item} key={'project-'+i} />
                                                            ))}
                                                            <div className="read-more text-white p-t-2 m-b-3"
                                                                 id="ic-projects">
                                                                <i className="fa fa-arrow-right"></i> <Link className="text-white"  to={'/portfolio'}> <span>
                                                                View All</span></Link>
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
                        </div>
                    </div>
                </div>
        </section>
);
}


export default PortfolioBlock;
