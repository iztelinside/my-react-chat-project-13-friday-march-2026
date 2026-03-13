import React from "react";


function Burgers ({title, price}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{price}$</p>
        </div>
    )
}

export default Burgers
