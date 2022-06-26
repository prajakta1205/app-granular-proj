import React from "react";


function nameTag(props){
    return(
        <div className="name">
            <h3 style={props.style}>First Name:{props.firstname}</h3>
            <h3 style={props.style}>Last Name:{props.lastname}</h3>
        </div>
    );
}


export default nameTag