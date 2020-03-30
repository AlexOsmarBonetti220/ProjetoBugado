import React from "react";

import {BrowserRouter, Switch, Route} from "react-router-dom";

import CadastroScreen from "./screens/cadastroUsuarios";
import TelaScreen from "./screens/infoUser";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={CadastroScreen} />
                <Route exact path="/users/:id" component={TelaScreen} />
            </Switch>
        </BrowserRouter>
    )
}