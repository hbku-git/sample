import {useSelector} from "react-redux";
import BannerBio from "../components/BannerBio";
import Slider from "react-slick";

const TestimonialsBlock = () => {
    const random = useSelector(state => state.random).list;
    const config = {
        slidesToShow: 1,
        dotsClass: "slider__dots",
        dots: true,
        arrows: false,
        autoplay: true
    };
    return (
        <section className="s-wrap meet-section"
                 style={{
                     background: "url('images/banner.jpg')",
                     backgroundPosition: "top center",
                     backgroundSize: "cover"
                 }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-40 col-md-offset-4">
                        <div className="ep_testimonial">
                            <div className="ep_testimonial__slide">
                                <Slider {...config}  >
                                {
                                    random ? random.map(item=>(<BannerBio bio={item} key={'slider-bio-'+item.Nid}/>)) : null
                                }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
);
}

export default TestimonialsBlock;
