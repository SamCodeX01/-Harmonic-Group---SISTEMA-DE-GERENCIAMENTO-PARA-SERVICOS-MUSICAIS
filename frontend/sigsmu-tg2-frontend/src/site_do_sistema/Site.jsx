// Importações de estilos
import site from "./site.module.css"

// Importações de componentes
import T02_Titulo from "./components_site/T02_Titulo.jsx";
import T03_Carrossel from "./components_site/T03_Carrossel.jsx";
import T04_Main from "./components_site/T04_Main.jsx";
import T00_BotAssistant from "../site_do_sistema/components_site/T00_BotAssistant.jsx"

// Importações do React
import React from "react";
import { useNavigate } from "react-router-dom";
// import siteModule from "./site.module.css";

function Site(){
    const navigate = useNavigate()

    return(

        <div className={site.main}>

            <T02_Titulo/>
            <T03_Carrossel/>
            <T04_Main/>
            <T00_BotAssistant/>

            {/*                            Leva para a TELA DE TESTES                            */}
            <div className={site.telaTestes} onClick={() => navigate("/AreaDeTeste")}> IR PARA<br/>TESTES </div>

        </div>
    )
}

export default Site;