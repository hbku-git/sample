import React from "react";

const Footer = () => {
    return (
        // <footer dir="ltr">
        //     <div className="top ">
        //         <div className="container">
        //             <div className="grid">
        //                 <div dir="ltr"><img src="/images/HBKU-Solid-White.png" alt="HMKU logo" />
        //                     <p>Hamad Bin Khalifa University Education City, Doha - Qatar</p>
        //                     <div className="social"><a href="http://facebook.com/HamadbinKhalifaUniversity"
        //                                                title="facebook"
        //                                                target="_blank" rel="noreferrer">
        //                           <svg xmlns="http://www.w3.org/2000/svg" className="footer-icons" width="21" height="21" viewBox="0 0 448 512">
        //                                 <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
        //                             </svg>
        //                         </a><a
        //                         href="https://twitter.com/HBKU" title="twitter" target="_blank" rel="noreferrer">
        //                           <svg id="icon-tw-x" className="footer-icons" width="21" height="21" viewBox="0 0 512 512">
        //                                 <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
        //                           </svg>
        //                         </a><a href="https://www.instagram.com/hbku/"
        //                                                                     title="instagram" target="_blank"
        //                                                                     rel="noreferrer">
        //                         <svg xmlns="http://www.w3.org/2000/svg" className="footer-icons" width="21" height="21" viewBox="0 0 448 512">
        //                             <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        //                         </svg>
        //                         </a><a
        //                         href="https://www.linkedin.com/edu/hamad-bin-khalifa-university-189106"
        //                         title="linkedin" target="_blank" rel="noreferrer">
        //                        <svg xmlns="http://www.w3.org/2000/svg" className="footer-icons" width="21" height="21" viewBox="0 0 448 512">
        //                             <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
        //                         </svg>
        //                         </a></div>
        //                 </div>
        //                 <div className="footer-links">
        //                     <h4>About</h4>
        //                     <ul>
        //                         <li><a href="https://www.hbku.edu.qa/en/about-hbku/hbku-leadership" target="_blank"
        //                                rel="noreferrer">HBKU Leadership</a></li>
        //                         <li><a href="https://www.hbku.edu.qa/en/careers" target="_blank"
        //                                rel="noreferrer">Careers</a></li>
        //                         <li><a href="https://www.hbku.edu.qa/en/people" target="_blank"
        //                                rel="noreferrer">People</a></li>
        //                         <li><a href="https://www.hbku.edu.qa/en/about-hbku/departments" target="_blank"
        //                                rel="noreferrer">Administrative Departments</a></li>
        //                     </ul>
        //                 </div>
        //                 <div className="footer-links">
        //                     <h4>Academics</h4>
        //                     <ul>
        //                         <li><a href="https://www.hbku.edu.qa/en/academics" target="_blank"
        //                                rel="noreferrer">Colleges</a>
        //                         </li>
        //                         <li><a href="https://www.hbku.edu.qa/en/eec" target="_blank" rel="noreferrer">Executive
        //                             Education</a></li>
        //                         <li><a href="https://www.hbku.edu.qa/en/admissions" target="_blank"
        //                                rel="noreferrer">Admissions</a></li>
        //                         <li><a href="https://www.hbku.edu.qa/en/hbku-library" target="_blank"
        //                                rel="noreferrer">HBKU
        //                             Library</a></li>
        //                     </ul>
        //                 </div>
        //                 <div className="footer-links">
        //                     <h4>Research</h4>
        //                     <ul>
        //                         <li><a href="https://www.hbku.edu.qa/en/research/sro " target="_blank"
        //                                rel="noreferrer">Sponsored Research Office</a></li>
        //                         <li><a href="http://research.hbku.edu.qa/research/facilities-services">Facilities</a>
        //                         </li>
        //                         <li><a href="http://research.hbku.edu.qa/research/funding">Funding</a></li>
        //                         <li><a href="http://research.hbku.edu.qa/research/office-vpr">OVPR</a></li>
        //                     </ul>
        //                 </div>
        //                 <div className="footer-links">
        //                     <h4>Life</h4>
        //                     <ul>
        //                         <li><a href="https://www.hbku.edu.qa/en/life-hbku" target="_blank"
        //                                rel="noreferrer">Overview</a>
        //                         </li>
        //                         <li><a href="https://www.hbku.edu.qa/en/life-hbku/housing-education-City"
        //                                target="_blank" rel="noreferrer">Housing at Education City</a></li>
        //                         <li><a href="https://next.qf.org.qa/education/student-financial-services"
        //                                target="_blank" rel="noreferrer">Financial Aid &amp; Scholarship</a></li>
        //                         <li><a href="https://www.hbku.edu.qa/en/academic-calendar/2023-2024#/year/29870"
        //                                target="_blank" rel="noreferrer">Calendar of Events</a></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div className="sponsors"><a href="/" title="Partner " target="_blank" rel="noreferrer"><img
        //                 src="/images/footer-1.png" alt="Partner " /></a></div>
        //         </div>
        //     </div>
        //     <div className="bottom">
        //         <div className="container">
        //             <div className="bottom_inner">
        //                 <span>© {(new Date().getFullYear())} All rights reserved to Hamad Bin Khalifa University.</span>
        //                 <ul>
        //                     <li><a href="https://www.hbku.edu.qa/en/legal-information" target="_blank"
        //                            rel="noreferrer">Cookies
        //                         Policy </a></li>
        //                     <li><a href="https://www.hbku.edu.qa/en/privacy-policy" target="_blank"
        //                            rel="noreferrer">Privacy Policy</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </footer>

        <footer className="footer-main">
            <div className="container-lg border-bottom py-4 gx-0">
                <div className="row gy-4 gx-0 gx-lg-3 justify-content-center align-items-center py-lg-2 py-xxl-3">
                    <div className="col-sm col-lg-3 footer-logo">
                        <a href="https://www.hbku.edu.qa/en" target="_blank">
                            <img src="images/logo-white.svg" alt="logo" />
                        </a>
                    </div>
                    <div className="col-sm-auto col-lg">
                        <h5 className="mb-3 text-white font-thin">Follow us</h5>
                        <nav className="share-footer-holder">
                            <a href="https://www.linkedin.com/edu/hamad-bin-khalifa-university-189106" target="_blank" className="share-icons">
                                <img src="images/ic-linked.svg" alt="linkedin" />
                                <span className="visually-hidden">Linkedin</span>
                            </a>
                            <a href="http://facebook.com/HamadbinKhalifaUniversity" target="_blank" className="share-icons">
                                <img src="images/ic-facebook.svg" alt="fb" />
                                <span className="visually-hidden">Facebook</span>
                            </a>
                            <a href="https://twitter.com/HBKU" target="_blank" className="share-icons">
                                <img src="images/ic-x.svg" alt="x" />
                                <span className="visually-hidden">X</span>
                            </a>
                            <a href="https://www.instagram.com/hbku/" target="_blank" className="share-icons">
                                <img src="images/ic-insta.svg" alt="insta" />
                                <span className="visually-hidden">Instagram</span>
                            </a>
                            <a href="#" target="_blank" className="share-icons">
                                <img src="images/ic-edx.svg" alt="edx" />
                                <span className="visually-hidden">Edx</span>
                            </a>
                        </nav>
                    </div>
                    <div className="col-sm-12 col-lg-5 col-lg-5">
                        <h5 className="mb-3 text-white font-thin">
                            Subscribe to the official HBKU newsletter WAMDHA
                        </h5>
                        <div className="search-modal-field">
                            <label htmlFor="search-input" className="col">
                                <input
                                    id="search-input"
                                    type="text"
                                    className="search-input w-100 px-2 px-xl-4"
                                    placeholder="Your Email address"
                                />
                            </label>
                            <button className="btn-search-in px-4" type="button">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-lg border-bottom gx-0">
                <div className="row gx-4 pt-4 pt-md-5">
                    <div className="col-auto col-md mb-4">
                        <h5 className="font-thin mb-3 text-white-color">Colleges</h5>
                        <div className="footer-nav">
                            <ul>
                                <li>
                                    <a href="https://www.hbku.edu.qa/en/cis" target="_blank">College of Islamic Studies</a>
                                </li>
                                <li>
                                    <a href="https://www.hbku.edu.qa/en/chss" target="_blank">College of Humanities and Social Sciences</a>
                                </li>
                                <li>
                                    <a href="https://www.hbku.edu.qa/en/cse" target="_blank">College of Science and Engineering</a>
                                </li>
                                <li>
                                    <a href="https://www.hbku.edu.qa/en/cl" target="_blank">College of Law</a>
                                </li>
                                <li>
                                    <a href="https://www.hbku.edu.qa/en/chls" target="_blank">College of Health and Life Sciences</a>
                                </li>
                                <li>
                                    <a href="https://www.hbku.edu.qa/en/cpp" target="_blank">College of Public Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-auto col-md mb-4">
                        <h5 className="font-thin mb-3 text-white-color">Research Institutes</h5>
                        <div className="footer-nav">
                            <ul>
                                <li>
                                    <a href="https://www.hbku.edu.qa/en/qbri" target="_blank">Qatar Biomedical Research Institute (QBRI)</a>
                                </li>
                                <li>
                                    <a href="https://www.hbku.edu.qa/en/qcri" target="_blank">Qatar Computing Research Institute (QCRI)</a>
                                </li>
                                <li>
                                    <a href="https://www.hbku.edu.qa/en/qeeri" target="_blank">
                                        Qatar Environment and Energy Research Institute (QEERI)
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-auto col-md mb-4">
                        <h5 className="font-thin mb-3 text-white-color">Centers</h5>
                        <div className="footer-nav">
                            <ul>
                                <li>
                                    <a href="https://hbkupress.com/" target="_blank">HBKU Press</a>
                                </li>
                                <li>
                                    <a href="https://www.hbku.edu.qa/en/eec" target="_blank">Executive Education Center</a>
                                </li>
                                <li>
                                    <a href="https://innovation.hbku.edu.qa/" target="_blank">Innovation Center</a>
                                </li>
                                <li>
                                    <a href="https://globalinstitute.org/" target="_blank">Global Institute of Strategic Research</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-auto col-md mb-4">
                        <h5 className="font-thin mb-3 text-white-color">Useful Links</h5>
                        <div className="footer-nav">
                            <ul>
                                <li>
                                    <a href="https://www.hbku.edu.qa/en/about-hamad-bin-khalifa-university" target="_blank">About Us</a>
                                </li>
                                <li>
                                    <a href="https://www.hbku.edu.qa/en/academics" target="_blank">Academics</a>
                                </li>
                                <li>
                                    <a href="https://www.hbku.edu.qa/en/admissions" target="_blank">Admission</a>
                                </li>
                                <li>
                                    <a href="https://research.hbku.edu.qa/" target="_blank">Research</a>
                                </li>
                                <li>
                                    <a href="https://innovation.hbku.edu.qa/" target="_blank">Innovation</a>
                                </li>
                                <li>
                                    <a href="https://www.hbku.edu.qa/en/life-hbku" target="_blank">Life at HBKU</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-lg  py-4 gx-0">
                <div className="row gy-3 align-items-center gx-lg-5">
                    <div className="col-12 col-lg order-3 order-md-1 pt-4 pt-lg-0">
                        <p className="mb-0 text-footer-menu font-thin">
                            {" "}
                            © 2024 All rights reserved to Hamad Bin Khalifa University.
                        </p>
                    </div>
                    <div className="col col-lg-auto order-1 order-md-2">
                        <nav className="footer-nav d-flex column-gap-4 flex-column flex-sm-row">
                            <a href="https://www.hbku.edu.qa/en/privacy-policy" target="_blank">Privacy Policy</a>
                            <a href="https://www.hbku.edu.qa/en/legal-information" target="_blank">Cookies</a>
                            <a href="javascript:void(0);">Website Accessibilty</a>
                        </nav>
                    </div>
                    <div className="col-auto col-lg-auto order-2 order-md-3">
                        <a href="#" className="mada-logo">
                            <img src="images/footer-mada.png" alt="mada" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
