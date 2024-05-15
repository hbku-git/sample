import React from "react";

import StatementItems from "../data/statements";
import Statement from "../components/Statement";

const StatementsBlock = ({
    statements=StatementItems
                         })=>{
    return (<section className="m-wrap p-t-0 animatedParent animateOnce" data-appear-top-offset="-200">
        <div className="container">
            <div className="row">
                <div className="col-sm-48 col-md-48">
                    <div className="dieBlock6__block ">
                        {statements.map((item,i)=>(<Statement {...item} key={'statement-'+i}/>))}
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default StatementsBlock;
