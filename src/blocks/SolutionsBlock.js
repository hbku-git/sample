import React from "react";

const SolutionsBlock = () => {
    return (
        <section className="about-section section-gap overflow-hidden">
            <div className="custom-container-fluid">
                <div className="row align-items-center justify-content-xl-start justify-content-center">
                    <div className="col-xl-4 col-lg-8 col-sm-10">
                        <div className="about-contant content-mb-lg-80">
                            <div className="section-heading mb-20">
                                <h2 className="title">All of HBKU's Brilliant Scientists and Experts</h2>
                                <span className="tagline">We will help you reach your goals</span>
                            </div>
                            <p>
                                Sed perspiciatis unde omnis iste natus error sit voluptatem santium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae abilloe inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explibo. enim ipsam voluptatem quia voluptas sit
                                aspernatur
                            </p>
                            <ul className="circle-list mb-40 mt-30 wow fadeInUp">
                                <li>Professional</li>
                                <li>Expertise</li>
                                <li>Excellence</li>
                            </ul>
                            <a href="#" className="template-btn bordered-btn">Start a Project <i
                                className="fas fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-6 offset-xl-1 col-lg-10 col-md-10 ">
                        <div className="fancy-image-gallery-two">
                            <div className="row align-items-center animate-float-bob-y">
                                <div className="col-sm-6 wow fadeInUp">
                                    <img className="mb-30" src="images/ep-01.jpeg" alt="About Image"/>
                                </div>
                                <div className="col-sm-6 wow fadeInUp">
                                    <img className="mb-30" src="images/ep-02.jpeg" alt="About Image" />
                                        <img className="mb-30" src="images/ep-03.jpeg" alt="About Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default SolutionsBlock;
