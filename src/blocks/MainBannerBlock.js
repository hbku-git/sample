import React from "react";

const MainBannerBlock = ({
    title = "Expertise Platform"
                         }) => {
    return (
        <section className="page-title-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="page-title">{title}</h2>
                    </div>
                   {/* <div className="col-md-6">
                        <ul className="breadcrumb-nav">
                            <li><a href="index.html">Home</a></li>
                            <li>Services</li>
                        </ul>
                    </div>*/}
                </div>
            </div>
        </section>
    )
}

export default MainBannerBlock;
