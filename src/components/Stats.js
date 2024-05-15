import React from "react";

import StatItem from "./StatItem";
import StatsData from "../data/stats";

const Stats = ({
                   data = StatsData
               }) =>{
    console.log('item',{StatsData});
    return (
        <section className="l-wrap section-cl2019event " data-appear-top-offset='-300'>
            <div className="container ">
                <div className="row">
                    <div className="col-md-16 ">
                        <h2 className="title-xl m-b-3 text-darkblue " data-id="1">Facts and
                            Figures <br/> About the <br/> HBKU Innovation Center
                        </h2>

                    </div>
                    <div className="col-md-30  col-md-offset-2">
                        <div className="glance4-block">
                            <div className="glance4-slide" data-id="2">
                                <div className="glance4-list slider">


                                    {data.map((item,i)=>(<StatItem {...item} key={'stat-'+i} />))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats;
