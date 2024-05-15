import React, { useState } from 'react';

const Header = () => {
    const navigationButtom = [
        { text: 'About HBKU', link: 'https://www.hbku.edu.qa/en/about-hamad-bin-khalifa-university' },
        { text: 'Academics', link: 'https://www.hbku.edu.qa/en/academics' },
        { text: 'Innovation', link: 'https://innovation.hbku.edu.qa/' },
        { text: 'Research', link: 'https://research.hbku.edu.qa/' },
        { text: 'Admissions', link: '/research/facilities-services' },
        { text: 'University Life', link: 'https://www.hbku.edu.qa/en/life-hbku' },
      ]

    // const [isScrolled, setIsScrolled] = useState(false);
    const [menuExpanded, setMenuExpanded] = useState(false);

    const toggleMenu = () => {
        setMenuExpanded(!menuExpanded);
      };

    // const handleScroll = () => {
    //     const scrollThreshold = 100; 
    //     setIsScrolled(window.scrollY > scrollThreshold);
    //   };
    
    //   useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);

    return (
        // <header dir="ltr">
        //     <div className="top-header">
        //         <div className="container">
        //             <div className="top-header__inner">
        //                 <a href="/" className="logo-link"><img className="logo"
        //                                                        src="images/HBKU-RGB-2021.png"
        //                                                        alt="HBKU logo"/></a>
        //                 <div className="navigation-top">
        //                     <div className="navigation-top-application">
        //                         <button className="btn d-inline-block d-md-none ntaToggle"><i
        //                             className="fa fa-bars"></i></button>
        //                         <div className="d-md-none right-sidebar nta-right-sidebar closed">
        //                             <button className="btn-close"><i className="fa fa-times"></i></button>

        //                             <a href="https://hbkuqa.elluciancrmrecruit.com/Apply/Account/Login?ReturnUrl=%2fApply"
        //                                target="_blank" rel="noreferrer" className="bordred">Apply now</a><a
        //                             href="https://www.hbku.edu.qa/ar" target="_blank" rel="noreferrer"
        //                             className="nav-link nav-language">العربية</a>
        //                             <a target="_blank" rel="noreferrer" className="nav-link nav-language search-icon"><i
        //                                 className="fa fa-search text-darkblue" style={{
        //                                 fontSize: 24
        //                             }}></i></a>
        //                         </div>
        //                         <div className="d-none d-md-flex">
        //                             <a href="https://hbkuqa.elluciancrmrecruit.com/Apply/Account/Login?ReturnUrl=%2fApply"
        //                                target="_blank" rel="noreferrer" className="bordred">Apply now</a><a
        //                             href="https://www.hbku.edu.qa/ar" target="_blank" rel="noreferrer"
        //                             className="nav-link nav-language">العربية</a>
        //                             <a target="_blank" rel="noreferrer" className="nav-link nav-language search-icon"><i
        //                                 className="fa fa-search text-darkblue" tyle={{
        //                                 fontSize: 24
        //                             }}></i></a>
        //                         </div>

        //                     </div>
        //                     <div className="navigation-top-nav">
        //                         <button className="btn d-inline-block d-md-none ntnToggle"><i
        //                             className="fa fa-bars"></i></button>
        //                         <div className="d-md-none right-sidebar closed">
        //                             <button className="btn-close"><i
        //                                 className="fa fa-times"></i></button>
        //                             <a aria-current="page" className="active"
        //                                href="/"><img src="images/home.png" alt="home page"
        //                                              className="d-sm-none d-xs-none" /><span
        //                                 className="d-md-none ">Home </span></a><a
        //                             href="/https://www.hbku.edu.qa/en/about-hamad-bin-khalifa-university">About
        //                             HBKU</a><a href="/https://www.hbku.edu.qa/en/academics">Academics</a>
        //                             <a href="https://innovation.hbku.edu.qa/" target="_blank"
        //                                rel="noreferrer">Innovation</a>
        //                             <a
        //                                 href="https://research.hbku.edu.qa/" target="_blank" rel="noreferrer">Research</a><a
        //                             href="/https://www.hbku.edu.qa/en/admissions">Admissions</a><a
        //                             href="/https://www.hbku.edu.qa/en/life-hbku">University Life</a>
        //                         </div>
        //                         <div className="d-none d-md-flex"><a href="/" target="_blank" rel="noreferrer"><img
        //                             src="images/home.png" alt="home page" /></a><a
        //                             href="https://www.hbku.edu.qa/en/about-hamad-bin-khalifa-university" target="_blank"
        //                             rel="noreferrer">About HBKU</a><a href="https://www.hbku.edu.qa/en/academics"
        //                                                               target="_blank" rel="noreferrer">Academics</a>
        //                             <a href="https://innovation.hbku.edu.qa/" target="_blank"
        //                                rel="noreferrer">Innovation</a>
        //                             <a href="https://research.hbku.edu.qa/" target="_blank" rel="noreferrer">Research</a><a
        //                                 href="https://www.hbku.edu.qa/en/admissions" target="_blank"
        //                                 rel="noreferrer">Admissions</a><a href="https://www.hbku.edu.qa/en/life-hbku"
        //                                                                   target="_blank" rel="noreferrer">University
        //                                 Life</a></div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="header-hero">
        //         <div className="container">
        //             <ul className="breadcrumb">
        //                 <li><a href="/">Home</a></li>
        //                 <li><a href="#">Expertise Catalog</a></li>
        //             </ul>
        //             <h1>HBKU Expertise Catalog</h1>
        //         </div>
        //     </div>
        //     <div className="header-category">
        //     </div>
        // </header>
        <header className="header-main home-header white-header header-inner">
        <div className="container-lg px-0 border-bottom">
          <div className="row gx-0">
            <div className="col-auto header-logo-holder border-end d-flex align-items-center">
              <h1 className="mb-0">
                <a href="https://www.hbku.edu.qa/en" className="header-logo">
                  <img src="images/logo-white.svg" alt="HBKU" />
                  <img src="images/logo-color.svg" className="logo-forwhite" alt="HBKU" />
                </a>
              </h1>
            </div>

            <div className="col">
              <div className="header-top justify-content-end border-bottom d-none d-xl-flex">
                <nav className="header-top-nav">
                  <ul role="menu" className="nav">
                    <li><a href="https://www.hbku.edu.qa/en/about-hamad-bin-khalifa-university" target="_blank">About Us</a></li>
                    {/* <li><a href="https://www.hbku.edu.qa/en/academics" target="_blank">Academics</a></li>
                    <li><a href="https://innovation.hbku.edu.qa/" target="_blank">Innovation</a></li> */}
                    <li><a href="https://www.hbku.edu.qa/en/life-hbku" target="_blank">Life at HBKU</a></li>
                  </ul>
                </nav>
              </div>

              <div className="header-bottom d-flex align-items-start align-items-xl-center">
                <div className="header-bottom-start flex-grow-1">
                  <div className="navbar navbar-expand-xl">
                    <button
                      className="navbar-toggler"
                      type="button"
                      onClick={toggleMenu}
                      aria-controls="headerMenu"
                      aria-expanded={menuExpanded}
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${menuExpanded ? 'show' : ''}`} id="headerMenu">
                      {
                        <ul className="navbar-nav">
                          {
                            navigationButtom?.map((e,k)=>{
                              if(e.redirect){
                                return <li className="nav-item">
                                        <a rel="noreferrer" className="nav-link" target='_blank' href={e.link}>{e.text}</a>
                                      </li>
                              }
                              return (
                                <li className="nav-item" key={k}>
                                  <a className="nav-link" to={e?.link}>{e?.text}</a>
                                </li>
                              )
                            })
                          }
                        </ul>
                      }
                    </div>
                  </div>
                </div>

                <div className="header-bottom-end d-flex align-items-center gap-xxl-4 gap-3 border-start">
                  <a href="https://hbkuqa.elluciancrmrecruit.com/Apply/Account/Login?ReturnUrl=%2fApply" target="_blank" className="btn btn-apply">
                    {/* Use Lottie or another animation library as needed */}
                    <img src="images/apply-now.gif" width="30" height="30" alt="apply-now" className="apply-now-gif me-2" />
                    <img src="images/ic-applynow.svg" width="30" height="30" className="img-fluid d-none apply-now-img me-2" alt="apply-now"/> 
                    Apply now
                  </a>

                  {/* <div className="header-dropdown">
                    <a className={`btn btn-user dropdown-toggle1 ${isDropdownOpen ? 'show' : ''}`} href="#" role="button" data-bs-toggle="dropdown" 
                      onClick={(e) => {e.preventDefault(); setIsDropdownOpen(!isDropdownOpen); }} aria-expanded={isDropdownOpen}>
                      User
                    </a>
                    <ul className={`dropdown-menu ${isDropdownOpen ? 'show user-dropdown-btn' : ''}`}>
                      <li><a className="dropdown-item" href="#">Student Login</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                    </ul>
                  </div> */}

                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="headerMenu"
                    aria-expanded={menuExpanded}
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* { !isHomePage &&
        <div className='header-hero'>
            <div className='container'>
              <BreadCrumb crumb={props.crumb} />
              <h1>{props.title}</h1>
            </div>
        </div>
        } */}
      </header>

);
}


export default Header;
