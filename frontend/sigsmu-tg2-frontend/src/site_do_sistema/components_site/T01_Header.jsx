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
                   
                    <li> <Botao msg={"Home"}          rota={"/Inicio"} />    </li>
                    <li> <Botao msg={"Serviços"}      rota={"/Servicos"} />  </li>
                    <li> <Botao msg={"Orçamentos"}    rota={"/Orcamento"} /> </li>
                    <li> <Botao msg={"Contatos"}      rota={""} />           </li>
                    <li> <Botao msg={"Seja Parceiro"} rota={""} />           </li>
                    <li> <Botao msg={"Intranet"}      rota={"/Intranet/TelaLogin"} /> </li>
                 </ul> 

                {/* <ul>
                    <li> <button onClick={() => navigate("/Inicio")}>Home</button> </li>
                    <li> <button onClick={() => navigate("/Servicos")}>Serviços</button> </li>
                    <li> <button onClick={() => navigate("/Orcamento")}>Orçamentos</button> </li>
                    <li> <button onClick={() => navigate("")}>Contatos</button> </li>
                    <li> <button onClick={() => navigate("")}>Seja Parceiro</button> </li>
                    <li> <button onClick={() => navigate("/Intranet/TelaLogin")}>Intranet</button> </li>
                </ul> */}

                    {/* <button style={{background:"#007bff", color:"white", padding: "15px"}} >Intranet</button> */}
            </nav>
        </header>
    );

}
export default T01_Header; 