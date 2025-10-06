// Importações de estilos
import rotas from "./CSS/rotas.module.css"

// Importações das telas
import T01_Inicio from "../pages_containers/telas-do-cliente/_telas-principais/T01_Inicio";
import T02_Orcamento from "../pages_containers/telas-do-cliente/_telas-principais/T02_Orcamento";
import T03_Repertorio from "../pages_containers/telas-do-cliente/_telas-principais/T03_Repertorio";

// Importações do React
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


import T01_Header from '../site_do_sistema/components_site/T01_Header.jsx';
import RotaIntranet from "./RotaIntranet.jsx";
import Site from "../site_do_sistema/Site.jsx";
import { useState } from "react";

function RotasCliente({nomeRota, setNomeRota}) {
    setNomeRota("cliente")

    return (
        <div className={rotas.main}>
            <Router>
                {nomeRota === "cliente" && <T01_Header/>}

                <Routes>
                    <Route index element={<Site/>}/>
                    <Route path='/Inicio'        element={ <Site/>  }/>

                    {/*                Rotas Principais                */}
                    <Route path="/Orcamento/"  element={<T02_Orcamento/>}/>
                    <Route path="/Repertorio/" element={<T03_Repertorio/>}/>

                    {/*          Rota dos gestores e músicos          */}
                    <Route path="/Intranet/*"  element={<RotaIntranet nomeRota={nomeRota} setNomeRota={setNomeRota}/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default RotasCliente;