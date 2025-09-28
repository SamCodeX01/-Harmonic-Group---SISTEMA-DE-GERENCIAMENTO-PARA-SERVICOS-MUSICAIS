import React from "react";
// import HeaderCss from"./header.module.css";
import bgazulescuro from "../imagens_site/bgazulescuro.png"
import maincss from "./main.module.css"

//#196DBA - AZUL

function Main(){

return(
    <main className={maincss.main}>
        {/* <img src={bgazulescuro} alt="" srcset=""/> */}
        <p style={{color: "white"}}>Realize a festa dos seus sonhos e encante-se com músicas de qualidade!</p>
        <button>Faça um orçamento</button>
    </main>
);

}
export default Main; 