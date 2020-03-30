import React, {useState, useEffect} from "react";

import {useParams} from "react-router-dom";

export default function Tela(){
    let {id} = useParams();

    async function fazerRequisicao(){
        let user = await fetch("http://localhost:3000/api/alex.json", { method: 'GET' }).catch((error) => {
            alert("Deu erro" + error);
        })
        let date = await user.json();
        return date;
    }

    const [user, setUser] = useState([]);

    useEffect(()=>{
        fazerRequisicao().then((date)=>{
            setUser(date.user);
        })
    }, [])

    return(
        <div>
            <h1>{user.name}{id}</h1>
            <h4>{user.email}</h4>
            <img src={user.img_url} />
            <p>{user.description}</p>
        </div>
    )
}