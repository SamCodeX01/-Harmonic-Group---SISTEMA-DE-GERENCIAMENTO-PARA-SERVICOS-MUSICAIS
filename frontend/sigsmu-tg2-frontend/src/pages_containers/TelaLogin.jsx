import React from "react";
import css from "./TelaLogin.module.css"

import Botao from "../components/forms/Botao.jsx";
import Campo from "../components/forms/Campo.jsx";

function TelaLogin() {
    return (
        <div className={css.main}>
            <img src="imagens/sem_imagem.png" alt="Logo" className={css.img}/>
            
            <form action="post" className={css.form}>
                <Campo tipo="email" nome="login" 
                dica="Informe seu email"/>
                <Campo tipo="password" nome="senha"
                dica="Informe sua senha"/>
                <Botao valor="Fazer login" estilo={true}/>
            </form>
            <p><a href="" target="blank">Esqueci minha senha</a></p>
            
            <p>Não tem uma conta?</p>
            <Botao valor="Criar uma nova conta"/>
            
        </div>
    )
}
export default TelaLogin;