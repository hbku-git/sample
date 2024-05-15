import {BASE_URL} from "../store/constants";

const BannerBio = ({bio}) => {
    return (
        <blockquote>
            <div className="epquote__innercont">
                <div className="epquote__person-left">
                    <div className="epquote__person p-1">
                        <img width={300} height={300} src={bio.field_image} onError={(e)=>{
                            e.target.src = "images/default.png";
                        }}/>
                    </div>
                </div>
                <div className="epquote__person-right">
                    <div className="ep_testimonial__content--text text-white">
                        <div className="t-title">Meet Some of Our Experts</div>
                        <div className="person-name">
                            <a href={BASE_URL + 'node/' + bio.Nid}>{bio.title}</a>
                        </div>
                        <ul className="t-list">
                            {bio.subAreasNames.slice(0,3).map(item => (<li>{item}</li>))}
                        </ul>

                    </div>
                </div>
            </div>
        </blockquote>
    )
}

export default BannerBio;
