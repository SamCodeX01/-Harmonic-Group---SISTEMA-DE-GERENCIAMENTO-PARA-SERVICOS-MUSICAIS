import React from "react";
import HeaderCss from"./header.module.css";
import apagarDepois from "../image.png"
import logotipo from "../imagens_site/logotipo300px.png"

function Header(){

return(
    <header className={HeaderCss.header}>
        <img src={logotipo} alt="" srcset="" />
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Orçamentos</a></li>
                <li><a href="#">Contatos</a></li>
                <li><a href="#">Seja Parceiro</a></li>
                <li><a href="#">Intranet</a></li>
            </ul>
                {/* <button style={{background:"#007bff", color:"white", padding: "15px"}} >Intranet</button> */}
        </nav>
            {/* <img src={apagarDepois} alt="" srcset="" /> */}
    </header>
);

}
export default Header; 