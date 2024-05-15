import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {changeTitle, changeTitleSEO, generalSelector} from "../store/reducers/generalReducer";
import {useSSE} from "use-sse";
import {Link} from "react-router-dom";

const EntrepreneurshipPage = () => {
    const generalSettings = useSelector(generalSelector);
    const {title} = generalSettings;
    const dispatch = useDispatch()

    useSSE(() => {
        dispatch(changeTitle('Hamad Bin Khalifa University Education City Innovative Entrepreneurship Program'))
        dispatch(changeTitleSEO('Innovation Center | HHamad Bin Khalifa University Education City Innovative Entrepreneurship Program'))
        return Promise.resolve('Innovation Center | Hamad Bin Khalifa University Education City Innovative Entrepreneurship Program');
    }, [])

    useEffect(() => {
        document.title = 'Innovation Center | Contact Us'
    }, []);


    return (
        <section className="m-wrap ">
            <div className="container">
                <div className="row">
                    <div className="col-md-48">
                        <div className="big">
                            <div className={'mb-5'}>
                            <h2 className="title-xl m-b-2 text-darkblue">About</h2>
                            <p> The Education City Innovative Entrepreneurship Program aims to support innovative
                                entrepreneurs in Qatar, the development of an entrepreneurship ecosystem and the
                                realization of innovative business ideas. This program is designed as a long-term
                                initiative in which entrepreneurs living in Qatar will commercialize their business
                                ideas that address the priority areas within the Qatar Strategic Development Plan. The
                                shortlisted entrepreneurs will then be offered capacity building training and
                                kickstarter funding.</p>
                            <p>
                                The HBKU Education City Innovative Entrepreneurship Program will offer capacity building
                                training for up to 20 entrepreneurs selected by its Program Evaluation Board. While the
                                entrepreneurs take capacity building trainings, they will also prepare a project to
                                apply for a kickstarter fund offered by the HBKU Innovation Center. It is targeted to
                                fund five projects with budgets up to QAR 100,000.00 for each. The funded projects will
                                then be invited to a demo day that will be held within six months of the project’s
                                kick-off day.
                            </p>
                            <p>
                                The target audience of this program are candidates who have an innovative business idea
                                different from conventional business models and who have an active Education City (EC)
                                affiliation. Priority will be given to women entrepreneurs, students, and researchers in
                                the target audience segment. Applications will be received online via the related web
                                page.
                            </p>
                           </div>
                            <div className={'mb-5'}>
                                <h2 className="title-xl m-b-2 text-darkblue">How to Apply</h2>
                                <p>
                                    A copy of one’s residency permit, proof of EC affiliation (QF ID) and a two-page
                                    resume will be collected with their online application. Following the receipt of all
                                    online applications, it will then be reviewed according to the predetermined
                                    criteria: Novelty, Value Creation and Impact, and Feasibility. Applications that
                                    don’t have an innovative business idea compatible with the Qatar 2030 vision, or
                                    applicants who do not reside in Qatar or who do not currently have any affiliation
                                    with EC will be grounds for immediate rejection of the concerned application.
                                </p>
                            </div>
                            <div className={'mb-5'}>
                                <h2 className="title-xl m-b-2 text-darkblue">Application Themes</h2>

                                <div>
                                    <ul className={'l-sub-list'}>
                                        <li>
                                            Progressive Education
                                        </li>
                                        <li>
                                            Sustainability
                                        </li>
                                        <li>
                                            Artificial Intelligence
                                        </li>
                                        <li>
                                            Precision Medicine
                                        </li>
                                        <li>
                                            Social Progress
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={'mb-5'}>
                                <h2 className="title-xl m-b-2 text-darkblue">Application Eligibility</h2>
                                <div>
                                    <ul className={'l-sub-list'}>
                                        <li>
                                            Valid QID
                                        </li>
                                        <li>
                                            Valid QF ID
                                        </li>
                                        <li>
                                            Innovative Business Idea
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={'mb-5'}>
                                <h2 className="title-xl m-b-2 text-darkblue">Program Timeline</h2>
                                <p>
                                    Education City Innovative Entrepreneurship Program is designed as an 18-month
                                    program that will be conducted annually.

                                </p>
                                <div >
                                    <img className={'img-responsive w-100'} src="/images/timeline 11.42.11 AM.png"
                                         alt="entrepreneurship program timeline"/>
                                </div>
                            </div>

                            <div className={'mb-5'}>
                            <h2 className="title-xl m-b-2 text-darkblue">Program Evaluations</h2>

                            <p>
                                The accepted applicants will be given an opportunity to present their idea (as a
                                presentation) to a jury comprising a combination of academics, investors, and
                                entrepreneurship and innovation agencies. The jury’s evaluation of the presented
                                proposals will lead to the selection of the final participants.
                            </p>

                            <h2 className="title-xl m-b-2 text-darkblue">Benefits</h2>
                            <h3 className="title-l m-b-2 text-lightblue">Capacity Building:</h3>
                            <p>
                                Entrepreneurs who pass the evaluation will receive capacity building trainings including
                                but not limited to innovative entrepreneurship, systematic innovation, leadership,
                                project writing, idea pitching, business model and business plan preparations.
                            </p>
                            <h3 className="title-l m-b-2 text-lightblue">Co-working Space:</h3>
                            <p>
                                Participants will be able to benefit from the co-working space available at HBKU
                                Innovation Center.

                            </p>

                            <h3 className="title-l m-b-2 text-lightblue">Kickstarter Fund:</h3>
                            <p>
                                While the entrepreneurs are taking capacity building trainings, they will prepare a
                                project to apply for a kickstarter fund offered by HBKU Innovation Center. It is
                                targeted to fund five projects with budgets up to QAR 100,000.00 for each.

                            </p>

                            <h3 className="title-l m-b-2 text-lightblue">Demo Day: </h3>
                            <p>
                                The HBKU Innovation Center and its partners will organize a ‘Demo Day’ in Qatar where
                                participating entrepreneurs will present their ideas to investors, either face to face
                                or online. These entrepreneurs will have a chance to avail an investment to scale up
                                their businesses.
                            </p>
                            <h3 className="title-l m-b-2 text-lightblue">Certification </h3>
                            <p>
                                Shortlisted participants will be presented with a certificate about their participation
                                in the program.
                            </p>

                            </div>


                        </div>

                        <div className={'mb-5'}>
                            <h2 className="title-l m-b-2 text-darkblue">Application </h2>

                            <div className={''}>
                                <a target={'_blank'} className={'w-100 d-block btn-lg btn-light text-center bg-darkblue text-white btn__list_group--item'} href={'https://hbku.wufoo.com/forms/hbku-entrepreneurship-program-application-form'}> Click here to Apply </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}


export default EntrepreneurshipPage;
