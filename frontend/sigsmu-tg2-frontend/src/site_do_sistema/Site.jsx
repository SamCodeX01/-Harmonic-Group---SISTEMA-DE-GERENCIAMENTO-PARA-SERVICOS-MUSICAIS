// Importações de estilos
import site from "./site.module.css"

// Importações de componentes
import T02_Titulo from "./components_site/T02_Titulo.jsx";
import T03_Carrossel from "./components_site/T03_Carrossel.jsx";
import T04_Main from "./components_site/T04_Main.jsx";

// Importações do React
import React from "react";
import { useNavigate } from "react-router-dom";
// import siteModule from "./site.module.css";

function Site(){
    const navigate = useNavigate()

    return(

        <div className={site.main}>
            {/* <h1>Bem-vindo ao Site do Sistema</h1>
            <p>Este é o site principal do sistema.</p> */}

            <T02_Titulo/>
            <T03_Carrossel/>
            <T04_Main/>

            {/*                            Leva para a TELA DE TESTES                            */}
            <div className={site.telaTestes} onClick={() => navigate("/AreaDeTeste")}> IR PARA<br/>TESTES </div>

        </div>
    )
}

export default Site;