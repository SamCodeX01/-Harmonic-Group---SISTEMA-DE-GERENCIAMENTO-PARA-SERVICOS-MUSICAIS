import React from "react";
import css from "./teste.module.css"


function TelaLogin() {
    const x = {
        color: 'red',
        border: '10px, solid, yellow'
    }

    return (
        <div className={css.pai}>
            <img className={css.qualquerCoisa} src="imagens/sem_imagem.png" alt="" />
            
            <input className={css.gui} type="text" name="" id="" />
            <h1 style={x}>Samuel</h1>

        </div>
    )
}
export default TelaLogin;