import React from "react";
import t01_header from "./t01_header.module.css";
import apagarDepois from "../image.png"
import logotipo from "../imagens_site/logotipo300px.png"
import { useNavigate } from "react-router-dom";

// TESTE
import Radio from "../../components/Radio"
import Botao from "../../components/Botao"

function T01_Header(){

    const navigate = useNavigate();

    return(
        <div className={t01_header.containerHeader}>
            <header className={t01_header.header}>
                <img src={logotipo} alt="" srcSet="" />
                <nav>
                    <ul>
                        {/* <li onClick={ () => navigate("/Inicio") }><a href="">Home</a></li>
                        <li><a href="">Serviços</a></li>
                        <li onClick={ () => navigate("/RotasCliente/Orcamento") }><a href="">Orçamentos</a></li>
                        <li><a href="">Contatos</a></li>
                        <li><a href="">Seja Parceiro</a></li>
                        <li onClick={ () => navigate("/TelaLogin") }><a href="">Intranet</a></li> */}
            
                        <li> <Botao msg={"Home"}          rota={"/Inicio"} /></li>
                        <li> <Botao msg={"Serviços"}      rota={"/Servicos"}/></li>
                        <li> <Botao msg={"Galeria de Fotos"} rota={"/galeria"}/></li>
                        <li> <Botao msg={"Sugestão de Músicas"} rota={"/Sugestao"}/></li>
                        <li> <Botao msg={"Orçamentos"}    rota={"/Orcamento"}/></li>
                        <li> <Botao msg={"Contatos"}      rota={"/Contatos"}/></li>
                        <li> <Botao msg={"Seja Parceiro"} rota={"/SejaParceiro"}/></li>
                        <li> <Botao msg={"Intranet"}      rota={"/Intranet/TelaLogin"}/></li>
                     </ul>
                        {/* <button style={{background:"#007bff", color:"white", padding: "15px"}} >Intranet</button> */}
                </nav>
            </header>
        </div>
    );

}
export default T01_Header; 