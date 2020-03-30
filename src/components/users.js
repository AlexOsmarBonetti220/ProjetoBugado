import React, {Fragment, useEffect, useState} from "react";

import "./style.css"


export default function Users(props){
    const [error, setError] = useState(0);

    useEffect(()=>{
        if(!props.name || !props.email || !props.img_user)
            setError(1);
    })

    if(error == 0){
        return(
            <Fragment>
                <h4>{props.name}</h4>
                <h5>{props.email}</h5>
                <img src={props.img_user} />
                <p>{props.description}</p>
            </Fragment>
        )
    }else
        return null;
}