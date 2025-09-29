import React from "react";
import headercss from "./header.module.css";
import apagarDepois from "../image.png"
import logotipo from "../imagens_site/logotipo300px.png"
import { useNavigate } from "react-router-dom";

function Header(){

const navigate = useNavigate();

return(
    <header className={headercss.header}>
        <img src={logotipo} alt="" srcset="" />
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Orçamentos</a></li>
                <li><a href="#">Contatos</a></li>
                <li><a href="#">Seja Parceiro</a></li>
                <li onClick={()=>navigate("/TelaLogin/")}><a href="#">Intranet</a></li>
            </ul>
                {/* <button style={{background:"#007bff", color:"white", padding: "15px"}} >Intranet</button> */}
        </nav>
    </header>
);

}
export default Header; 