import React from "react";

const Partner = ({
    title,
    url,image
                 }) => {
    return (
        <a
            href={url} target="_blank"><img
            src={image} alt={title}/></a>

    )
};


export default Partner
