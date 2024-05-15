import {useSelector} from "react-redux";
import ThemesSelector from "../store/selectors/themes";

const ThemesSliderBlock = () => {

    const themes = useSelector(ThemesSelector).list

    return (
        <section className="m-wrap p-t-0 section-coming-event">
            <div className="container">
                <div className="row">
                    <div className="block-services p-b-3">
                        <div className="btnBox m-t-3" id="btnBoxSlide">
                            <div className="btnBox-list mez slider">

                                {themes.map(item => (
                                    <div className="btnBox-thumbnail" title="">
                                        <a href={"/?area=" + item.tid}>
                                            <img className="btnBox-img full-width"
                                                 src={item.bgImg} title="" height={150} width={300}/>
                                            <div className="btnBox-details" title="">
                                                <div className="btnBox-header">
                                                    <h5>{item.name} </h5>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="text-center p-t-3">
                            <a href="/" target="_blank" className="big action">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default ThemesSliderBlock
