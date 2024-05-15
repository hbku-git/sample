import React from "react";

import {Link} from "react-router-dom";

const AllAboutInnovationBlock = () =>{
    return (
        <section className="m-wrap ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-48 col-md-48">
                        <div className="m-b-2">
                            <div className="big">
                                <h2 className="title-xl m-b-2 text-darkblue">All About Innovation</h2>
                                <p> Innovation is at the core of Hamad Bin Khalifa University (HBKU), as it hosts the
                                    development of a research and development focused, dynamic, game-changing
                                    entrepreneurial ecosystem and a value-added social structure. This setup promotes
                                    creating meaningfully-unique solutions for real-life challenges with high
                                    commercialization potential under sustainable internal and external
                                    collaborations. </p>
                                <p>As a home-grown, innovation-based, entrepreneurial university, HBKU has tailored a
                                    bespoke innovation pipeline to produce cutting-edge technologies in line with
                                    Qatar’s national vision. This reinforces and fosters sustainable innovation and an
                                    entrepreneurship-based ecosystem through multifaceted education, training, courses,
                                    mentorship, and diversified funds for the community. </p>
                                <p style={{
                                    marginBottom:0
                                }}>HBKU Innovation Center was established as a facilitator, and is the first pioneering
                                    initiative that hosts innovation efforts and activities at HBKU. Thank you for visiting our website and being part of this ideal innovative ecosystem.
                                    I kindly invite you to review our portfolio, funds, certified workshops, and join
                                    our mailing list.</p>

                                <div className="cl2019quote__person">
                                    <figure className="cl2019quote__person--img">
                                        <img className="img-circle" src="/images/Nadir-Yildirim-thum.png"/>
                                    </figure>
                                    <div className="cl2019quote__person__info">
                                        <h5 className="person-name">Dr. Nadir Yildirim</h5>
                                        <h6 className="person-designation">Innovation Director</h6>

                                    </div>
                                </div>

                                <div className="read-more text-darkblue m-t-2" id="ic-about">
                                    <Link to={'/innovation'}> <i className="fa fa-arrow-right"></i><a
                                                                             className="text-darkblue text-underline ">
                                    More about the HBKU Innovation Center</a></Link>
                                </div>

                            </div>


                        </div>
                    </div>
                    {/*<div className="col-lg-20 col-md-20 col-lg-offset-4 col-md-offset-4">
                        <div className="video-wrap d-flex flex-column justify-content-center h-100">
                            <video controls autoPlay muted poster="/images/nadir-video-poster.jpg">
                                <source src="/images/nadir-final-compressed.mp4" type="video/mp4" />
                            </video>
                            <img src="/images/Innovation%20Center-RGB.png" alt=""/>
                        </div>
                    </div>*/}
                </div>
            </div>
        </section>
    );
}

export default AllAboutInnovationBlock;
