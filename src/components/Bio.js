import {BASE_URL} from "../store/constants";

const Bio= ({
    bio
}) =>{

    const suffix = bio.suffix instanceof Array ? '' : bio.suffix;
    

    // eslint-disable-next-line no-undef
    let text = $('<textarea />').html(/*suffix + ' ' +*/ bio.title).text();
    if(!text.toLowerCase().startsWith('dr.')){
        text = suffix + ' ' + text;
    }

    return (
        <li className="card-block-list--item">
            <div className="p-card">
                <div className="p-card__img">
                    <figure>
                        <img
                            onError={(e)=>{
                                console.log(e);
                                e.target.src = "images/default.png";
                            }}

                            style={{
                                width:'100%',
                                height:'350px',
                                objectFit:'cover',
                                backgroundImage:"url('images/load.gif')",
                                backgroundRepeat:'no-repeat',
                                backgroundSize:'contain',
                                backgroundPosition:'center',
                                minHeight:'unset!important'
                            }}
                            width={300}
                            height={300}
                            src={bio.field_image}
                            alt="" title="" className="d-block img-responsive full-width" />
                    </figure>
                </div>
                <div className="p-card__info text-white">
                    <div className="pro__title">
                        <h4 className="pro-name">{text }</h4>
                        <h6 className="pro-int">{bio.field_related_college}</h6>
                    </div>
                    <div className="pro__subtheme" style={{
                        fontSize:12
                    }}>
                        <span>Expert in: </span><br/>
                        {
                        bio.subAreasNames.slice(0,4).map(item=>{
                            // eslint-disable-next-line no-undef
                            return $('<textarea />').html(item).text();
                        }).join(', ')
                    }
                    </div>
                    <div className="pro-btn">
                        <a className="btn-profile" href={BASE_URL+'node/'+bio.Nid}
                           target="_blank">View Profile</a>
                        <a className="btn-email" href={'mailto:'+bio.email}> <i className="fa fa-envelope"></i>
                        </a>
                    </div>
                </div>

            </div>
        </li> 
    );
}


export default Bio;
