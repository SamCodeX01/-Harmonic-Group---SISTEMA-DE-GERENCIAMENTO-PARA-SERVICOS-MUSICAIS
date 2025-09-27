import React from "react";
import Header from "./components_site/Header.jsx";
import Main from "./components_site/Main.jsx";
// import siteModule from "./site.module.css";

function Site(){

return(

    <div>
        {/* <h1>Bem-vindo ao Site do Sistema</h1>
        <p>Este é o site principal do sistema.</p> */}
        <Header/>
        <Main/>
    </div>
)
}

export default Site;