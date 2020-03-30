import React, {Fragment} from "react";

export default function Users(props){
    return(
        <Fragment>
            <h4>{props.name}</h4>
            <h5>{props.email}</h5>
            <img src={props.img_user} />
            <p>{props.description}</p>
        </Fragment>
    )
}