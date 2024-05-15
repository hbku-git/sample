import React from "react";
import {useSelector} from "react-redux";
import BiosSelector from "../store/selectors/bios";
import Bio from "../components/Bio";


const BiographiesBlock = ({
    onLoadMore
                          }) => {


    const bioSlice = useSelector(BiosSelector);

    if(!bioSlice.list.length){
        return (
            <div className={'p-5 text-center'}>
                No Experts found that match your current selection.<br />
                Kindly Try another Focus Area
            </div>
        )
    }



    return (
        <section className="s-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-md-48">
                        <div className="selected__subtheme">
                        </div>
                        <div className="card-block">
                            <ul className="card-block-list">
                                {
                                    bioSlice.list.map(item=>(<Bio key={item.Nid} bio={item} /> ))
                                }
                            </ul>
                        </div>

                        {
                            bioSlice.loading ? <div className={'p-5 m-y-5'}>
                                <img src={'images/load.gif'} className={'loading-item'}/>
                                <div className={"loading"}></div>
                            </div> : null
                        }

                        <div className="pagination-wrapper text-center m-t-3 m-b-3 ">
                            <a  onClick={e=>{
                                onLoadMore(bioSlice.page+1)
                            }} id="btn-stload" className="big action m-t-0">Load More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )


}


export default BiographiesBlock;
