import React from "react";


const makeGreen = BaseComponent => props =>{
    
}

function nameTag(props){
    return(
    <div className="name">
    <h3 >First Name:{props.firstname}</h3>
    <h3 >Last Name:{props.lastname}</h3>
    </div>
    );
}


export default nameTag