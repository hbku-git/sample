const HeroBannerV2Block = () =>{
    return (
        <section className="inner-banner inner-bannerv2 m-b-0">
            <div className="group-header">
                <div className="mez spotlight spotlight-md">
                    <div className="spotlight__slider">
                        <div className="spotlight__item"
                             style={{
                                 backgroundImage: "url('images/expertise-catalog_header.jpg')"
                             }}>
                            <img src="images/banner.jpg"
                                 height="1024" width="1920" className="img-responsive"/>
                        </div>
                    </div>
                    <div className="spotlight__content">
                        <div className="container full-height">
                            <div className="relative full-height">
                                <div className="spotlight__title half">
                                    {/*<h1>A global intellectual resource of knowledge serving government, industry and society in
                                        Qatar</h1>*/}
                                    <h1>A National intellectual resource of knowledge serving government, industry and society</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroBannerV2Block;
