import React, { useState } from "react";
import eventoItemCss from "../components/CSS/eventoItem.module.css"

function EventoItem({ evento }) {
    const [partesAbertas, setPartesAbertas] = useState({});

    // Função para alternar entre abrir/fechar uma parte
    const toggleParte = (key) => {
        setPartesAbertas(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    //Verificação de Segurança
    if(!evento) {
        return <div className={eventoItemCss.eventoContainer}>Nenhum evento selecionado</div>
    }

    if(!evento.partes) {
        return <div className={eventoItemCss.eventoContainer}>Evento não possui partes definidas</div>
    }

    return(
        <div className={eventoItemCss.eventoContainer}>
            <div className={eventoItemCss.eventoHeader}>
                <h2 className={eventoItemCss.eventoTitulo}>{evento.titulo}</h2>
                <p className={eventoItemCss.eventoDescricao}>{evento.descricao}</p>
            </div>

            <div className={eventoItemCss.partesContainer}>
                {Object.entries(evento.partes).map(([key, parte]) => (
                    <div key={key} className={eventoItemCss.parteItem}>
                        {/* CABEÇALHO DA PARTE - CLICÁVEL */}
                        <div 
                            className={eventoItemCss.parteCabecalho}
                            onClick={() => toggleParte(key)}
                        >
                            <h3 className={eventoItemCss.parteTitulo}>
                                {parte.titulo}
                            </h3>
                            <span className={eventoItemCss.icone}>
                                {partesAbertas[key] ? '▲' : '▼'}
                            </span>
                        </div>

                        {/* CONTEÚDO DA PARTE - APENAS SE ESTIVER ABERTA */}
                        {partesAbertas[key] && (
                            <div className={eventoItemCss.parteConteudo}>
                                <p className={eventoItemCss.parteDescricao}>{parte.descricao}</p>

                                {/* Mostrar as músicas */}
                                <div className={eventoItemCss.musicasLista}>
                                    <h4>Músicas Sugeridas: </h4>
                                    <ul>
                                        {parte.musicas && parte.musicas.map((musica, index) => (
                                            <li key={index} className={eventoItemCss.musicaItem}>
                                                {musica}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>    
        </div>
    )
}

export default EventoItem;