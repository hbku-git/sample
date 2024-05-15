import React from "react";
import {useSelector} from "react-redux";
import BiosSelector from "../store/selectors/bios";
import {BASE_URL} from "../store/constants";



const ExpertsBlock = ({
    theme, subthemes
                      }) => {

    const bios = useSelector(BiosSelector);

    return (
        <section className="team-section mt-5 bg-color-primary-5 mb-70 ">
            <div className="container">
                <div className="section-heading text-center mb-30">
                    <h2 className="title">Meet Our Experts</h2>
                    <span className="tagline">Best Pool of Talent in the MEA region</span>
                </div>
                {
                    bios.loading && bios.page === 0 ? (<div className={'w-100 text-center'}>Loading</div>) : (
                        <div className="row team-member-items justify-content-center">

                            {bios.list.map(item=>{
                                const url = BASE_URL+'node/'+item.nid
                                return (
                                    <div className=" col-lg-3 col-md-4 col-sm-6 wow fadeInUp mb-30">
                                        <div className="member-item mt-30 h-100">
                                            <div className="member-photo">
                                                <img height="250" style={{
                                                    objectFit:'cover'
                                                }} src={item.Image} alt={item.title}  />
                                                <ul className="social-icons">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                                </ul>
                                            </div>
                                            <h4 className="name"><a href={url} target="_blank">{item.title}</a></h4>
                                            <div className={'title'}>Areas of Expertise: </div>
                                            <div className={'d-flex overflow-auto flex-wrap justify-content-center'}>
                                                {item['subtheme-text'].map(it=>{
                                                    return (<div  style={{
                                                        whiteSpace: 'normal'
                                                    }} className={'m-1 text-break badge badge-pill badge-primary color-white'}>
                        {it}
                    </div>)
                                                })}
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    )
                }
            </div>
            {bios.loading ? (<div className={'p-5 w-100 text-center'}>Loading</div>) : null }
        </section>

);
}


export default ExpertsBlock
