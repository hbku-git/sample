import React from "react";

import FundingItems from "../data/funding-items";
import Fund from "../components/Fund";
import {Link} from "react-router-dom";

const FundingBlock = ({
    fundingItems = FundingItems
}) =>{
    return (
        <section className="m-wrap bg-gray6 " data-appear-top-offset="-200" id="section4">
            <div className="services-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-48">
                            <div className="title--info">
                                <h2 className="title-xl m-b-2 text-darkblue " data-id="1">
                                    The HBKU Innovation Center Funds </h2>

                                <p>The HBKU Innovation Center provides multifaceted educational and training
                                    opportunities for students, staff, and faculty through seminars, workshops, boot
                                    camps, and more. Acting as a catalyst for the development of innovative ideas toward
                                    commercialization, the HBKU Innovation Center supports the Education City and Doha
                                    community in a myriad of ways, including the provision of targeted funds, as a
                                    collaborative network between Qatar Foundation entities and Qatar-based industries
                                    and businesses, and a dedicated open space for the community to transform
                                    theoretical ideas into applied solutions. </p>
                                <p>The HBKU Innovation Center houses and operates the HBKU Innovation Lab, located in
                                    Education City, to facilitate networking, collaboration, and rapid prototyping for
                                    all stakeholders in the Education City community under Qatar Foundation’s
                                    multiversity vision. </p>
                                <p>In order to catalyze an innovative and entrepreneurial environment and promote
                                    collaborative, multidisciplinary, and locally industrially-relevant innovation
                                    activities, the HBKU Innovation Center provides the following types of innovation
                                    funds in 2021 and onward: </p>
                            </div>
                            <div className=" " data-id="2">
                                <div className="row row-eq-height">
                                    <div className="row row-eq-height">

                                        {fundingItems.map((item,i)=>(<Fund {...item} key={'fund-'+i} />))}

                                    </div>
                                </div>
                            </div>
                            <p className="p-t-3">To learn more, click the relevant program for additional information
                                about the details, funding levels, conditions, application deadlines, selection
                                criteria, and other information. </p>

                            <div className="read-more text-darkblue m-t-2 ic-applyFunding" id="">
                                <i className="fa fa-arrow-right"></i> <Link to={'/funding'} ><span className="text-darkblue ">
                                Apply for Funding</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FundingBlock;
