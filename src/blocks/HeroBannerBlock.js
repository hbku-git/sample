const HeroBannerBlock = () => {

    return (
        <section className="inner-banner m-b-0">
            <div className="group-header">
                <div className="mez spotlight spotlight-md">
                    <div className="spotlight__slider">
                        <div className="spotlight__item"
                             style={{
                                 backgroundImage: "url('images/banner.jpg')"
                             }}>
                            <img src="public/images/banner.jpg"
                                 height="1024" width="1920" className="img-responsive"/>
                        </div>
                    </div>
                    <div className="spotlight__content">
                        <div className="container">
                            <div className="spotlight__title text-white full90">
                                <h1 className="text-left">A national resource of knowledge </h1>
                                <h1 className="text-right">serving government, industry and society in Qatar </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default HeroBannerBlock;
