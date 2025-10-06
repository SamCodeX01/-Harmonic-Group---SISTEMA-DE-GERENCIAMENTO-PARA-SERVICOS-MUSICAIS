import React from "react";
import bgazulescuro from "../imagens_site/bgazulescuro.png"
import t02_titulo from "./t02_titulo.module.css"
import foto_capa from "../imagens_site/foto_capa.jpg"

//#196DBA - AZUL

function T02_Titulo(){

return(
    <main className={t02_titulo.main}>
            {/* <img src={bgazulescuro} alt="" srcset=""/> */}
            <p style={{color: "white"}}>Realize a festa dos seus sonhos e encante-se com músicas de qualidade!</p>
            <button>Faça um orçamento</button>
    </main>
);

}
export default T02_Titulo; 