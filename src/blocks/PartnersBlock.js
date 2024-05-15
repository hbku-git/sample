import React from "react";
import Slider from "react-slick";
import Partners from "../data/partners";
import Partner from "../components/Partner";

const PartnersBlock = ({ partners = Partners}) => {


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

    return (<section className="m-wrap ">
            <div className="container">
                <div className="row">
                    <div className="col-sm-48">
                        <h2 className="title-md m-b-3 text-darkblue text-center text-bold">Our Industry Partners</h2>
                        <div className="cl2019partners2">
                            <div className="cl2019partners__list cl2019partners_slide">
                                <ul>
                                    <li><a href="#"><img src="images/hmc.png"/></a>
                                    </li>
                                    <li><a href="#"><img src="images/olink.png"/></a>
                                    </li>
                                    <li><a href="#"><img src="images/mph.png"/></a>
                                    </li>
                                    <li><a href="#"><img src="images/microsoft.png"/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnersBlock;
