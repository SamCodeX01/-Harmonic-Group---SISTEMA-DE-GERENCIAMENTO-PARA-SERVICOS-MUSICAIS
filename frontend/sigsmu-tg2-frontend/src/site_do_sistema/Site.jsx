import React from "react";
import T01_Header from "./components_site/T01_Header.jsx";
import T02_Titulo from "./components_site/T02_Titulo.jsx";
import T03_Carrossel from "./components_site/T03_Carrossel.jsx";
import T04_Main from "./components_site/T04_Main.jsx";
// import siteModule from "./site.module.css";

function Site(){

return(

    <div>
        {/* <h1>Bem-vindo ao Site do Sistema</h1>
        <p>Este é o site principal do sistema.</p> */}
        <T01_Header/>
        <T02_Titulo/>
        <T03_Carrossel/>
        <T04_Main/>
    </div>
)
}

export default Site;