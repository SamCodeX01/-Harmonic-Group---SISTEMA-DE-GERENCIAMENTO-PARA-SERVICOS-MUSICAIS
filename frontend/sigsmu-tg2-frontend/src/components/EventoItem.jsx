import React from "react";
import eventoItemCss from "../components/CSS/eventoItem.module.css"

function EventoItem({evento}){
    return(
        <div className={eventoItemCss.eventoContainer}>
            <div className={eventoItemCss.eventoHeader}>
                <h2 className={eventoItemCss.eventoTitulo}>{evento}</h2>
                <p className={eventoItemCss.eventoDescricao}>{evento}</p>
            </div>

            <div className={eventoItemCss.partesContainer}></div>    
            <p>qqqqqqqqq</p>
        </div>
    )
}
export default EventoItem;