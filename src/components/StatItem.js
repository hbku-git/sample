import React from "react";

const StatItem = ({
                      title,
                      description,
                      value
                  })=>{

    return (
        <div className="glance4-item">
            <div className="relative glance4-item--inner">
                <div className="glance4-number">
                    {value}
                </div>
                <div className="glance4-name">
                    {title}
                </div>
                { description? ( <div class="glance4-details"> {description}</div>) : '' }
            </div>
        </div>
    )
}

export default StatItem;
