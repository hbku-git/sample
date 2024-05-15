import React from "react";

import Workshop from "../components/Workshop";
import Workshops from "../data/workshops";

import Slider from "react-slick";

const WorkshopBlock = ({
                            workshops = Workshops
                        }) => {

    const settings = {
        dotsClass: "slider__dots",
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1800,
        speed: 900,
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1921,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            }
        ]

    };
    return (
        <section className="m-wrap animatedParent m-b-3 animateOnce" data-appear-top-offset="-300" id="section4">
            <div className="services-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-48">
                            <div className="title--info">
                                <h2 className="title-xl m-b-2 text-darkblue " data-id="1">
                                    Certified Workshops </h2>
                                <p>If you are interested in having the following certification program(s), or if you are
                                    looking for additional workshops/certification programs not listed here, please <a
                                        className="ic-contactus" href="#">Contact us</a></p>
                            </div>
                            <div className=" services-section_slide animated fadeInUpShort delay-500 " data-id="2">
                                <div className="row row-eq-height">
                                    <Slider {...settings} className={'services-section_slide'}>

                                    {workshops.map((item,i)=>(
                                            <Workshop cssClass={'services-category'} {...item} key={'workshop-'+i} />
                                        ))}
                                    </Slider>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
);
};


export default WorkshopBlock;
