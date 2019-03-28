import React, { useEffect, useContext } from "react";
import { Link } from 'react-router-dom'


function CadastroProduto() {

    return (
        <>
        <div class="container">
	<div class="row">
		<h2>Cadastrar Produto</h2>
	</div>
</div>


<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Nome</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="Insira seu nome completo" class="form-control input-md"/>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Preço</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="Preço do produto" class="form-control input-md"/>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Imagem</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="URL da imagem" class="form-control input-md"/>
  </div>
</div>

<Link to="/loja"> 
                <a href="#" class="btn btn-primary btn-md">Salvar <i class="fa fa-sign-in"></i></a>
                </Link> 
</>
)
}

export default CadastroProduto;