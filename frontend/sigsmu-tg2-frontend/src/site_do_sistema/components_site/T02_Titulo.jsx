import React from "react";
import bgazulescuro from "../imagens_site/bgazulescuro.png"
import t02_titulo from "./t02_titulo.module.css"
import foto_capa from "../imagens_site/foto_capa.jpg"
import { useNavigate } from "react-router-dom";

//#196DBA - AZUL

function T02_Titulo(){
    const navigate = useNavigate();

    return(
        <main className={t02_titulo.main}>
                {/* <img src={bgazulescuro} alt="" srcset=""/> */}
                <p style={{color: "white"}}>Realize a festa dos seus sonhos e encante-se com músicas de qualidade!</p>
                <button onClick={() => {navigate("/RotasCliente/Orcamento")}}>Faça um orçamento</button>
        </main>
    );

}
export default T02_Titulo; 