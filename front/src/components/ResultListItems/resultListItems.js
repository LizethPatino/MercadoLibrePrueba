import React, {useState} from "react";
import Breadcrumbs from "../Breadcrumbs/breadcrumbs";

const ListItems = () => {

    const categories = [
        "Electrónica, Audio y Video",
        "Audio",
        "Reproductores Portátiles",
        "iPod"
    ];

return(
    <div>
        <Breadcrumbs categories={categories}></Breadcrumbs>
        <h2>HOLI!!!!</h2>
    </div>
);

};

export default ListItems;