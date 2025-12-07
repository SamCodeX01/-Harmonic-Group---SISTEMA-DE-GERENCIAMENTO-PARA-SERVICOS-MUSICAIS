// Importações de estilos
import t01_header from "./t01_header.module.css";

// Importações de imagens
import logotipo from "../imagens_site/logotipo300px.png"

// Importações de componentes
import Botao from "../../components/Botao.jsx"

// Importações do React
import React from "react";
import { useNavigate } from "react-router-dom";


function T01_Header(){

    const navigate = useNavigate();

    return(
        <div className={t01_header.containerHeader}>
            <header className={t01_header.header}>
                <img src={logotipo} alt="" srcSet="" />
                <nav>
                    <ul>            
                        <li> <Botao msg={"Home"}                rota={"/Inicio"} /></li>
                        <li> <Botao msg={"Serviços"}            rota={"/Servicos"}/></li>
                        <li> <Botao msg={"Galeria de Fotos"}    rota={"/Galeria"}/></li>
                        <li> <Botao msg={"Sugestão de Músicas"} rota={"/Sugestao"}/></li>
                        <li> <Botao msg={"Orçamentos"}          rota={"/Orcamento"}/></li>
                        <li> <Botao msg={"Contatos"}            rota={"/Contatos"}/></li>
                        <li> <Botao msg={"Seja Parceiro"}       rota={"/SejaParceiro"}/></li>
                        <li> <Botao msg={"Intranet"}            rota={"/Intranet/TelaLogin"}/></li>
                     </ul>
                </nav>
            </header>
        </div>
    );

}
export default T01_Header; 