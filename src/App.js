import React, {useState} from "react";

import User from "./components/users";

export default function Cadastro(){
  //Meus states
  const [fields, setFields] = useState([]);
  const [users, setUsers] = useState([]);
  //Metodos para mudar os states
  const changeFields = (e) => {
    setFields({
      ...fields,
      [e.currentTarget.name]:e.currentTarget.value,
    })
  }
  //Metodo para submeter o form
  const submitForm = (e) => {
    setUsers([...users, fields]);
    e.preventDefault();
  }
  return(
    <div>
      <div>
        <form onSubmit={submitForm}>
          <h2>Cadastre um novo usuário</h2>
          <div>
            <label htmlFor="name">Digite o nome do usuário: </label>
            <input type="text" id="name" name="name" placeholder="Name" onChange={changeFields} /><br/>
            <label htmlFor="description">Digite a descrição do funcionário (opcional): </label>
            <input type="text" id="description" name="description" placeholder="Description" onChange={changeFields} /><br/>
            <label htmlFor="img_user">Digite a url da imagem do usuário: </label>
            <input type="text" id="img_user" name="img_user" placeholder="Imagem" onChange={changeFields} /><br/>
            <label htmlFor="email">Digite o email do usuário: </label>
            <input type="email" id="email" name="email" placeholder="exemple@exemple.com" onChange={changeFields} />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
      <div>
        <h3>Lista de usuários cadastrados</h3>
        {users.map((user)=>{
          //Chamo um component para renderizar os dados
          return(
            <User name={user.name} description={user.description} img_user={user.img_user} email={user.email} />
          )
        })}
      </div>
    </div>
  )
}
