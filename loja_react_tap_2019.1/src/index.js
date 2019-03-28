import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { LojaProvider } from "./context/LojaContext";
import Loja from "./componentes/Loja";
import Login from "./componentes/Login"
import CadastroProduto from "./componentes/cadastroProduto"
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  <LojaProvider>
    <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/loja" component={Loja} />
            <Route path="/cadastrarProduto" component={CadastroProduto} />
        </Switch>
  </LojaProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// Se for user serviceworker, troca por .register
serviceWorker.unregister();
