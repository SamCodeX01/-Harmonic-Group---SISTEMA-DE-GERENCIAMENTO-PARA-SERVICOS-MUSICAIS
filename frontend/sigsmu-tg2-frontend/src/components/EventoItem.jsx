import React, { use, useState } from "react";
import eventoItemCss from "../components/CSS/eventoItem.module.css"

function EventoItem({ evento, setMusicas }) {
    const [partesAbertas, setPartesAbertas] = useState({});

    // Onde as músicas serão guardadas
    let musicasSelecionadas = {}

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
                {Object.entries(evento.partes).map(([key, parte], index) => (
                    
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
                        <div className={eventoItemCss.parteConteudo} style={{"display": `${partesAbertas[key] ? "" : "none"}`}}>
                            <p className={eventoItemCss.parteDescricao}>{parte.descricao}</p>

                            {/* Mostrar as músicas */}
                            <div className={eventoItemCss.musicasLista}>
                                <h4>Músicas Sugeridas: </h4>
                                <select onChange={evt => {
                                    musicasSelecionadas["musica"+(index+1)] = evt.currentTarget.value
                                    setMusicas(musicasSelecionadas)
                                }}>
                                    {
                                        parte.musicas && parte.musicas.map((musica, i) => (
                                            <option key={i} className={eventoItemCss.musicaItem} value={musica}>
                                                {musica}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                ))}
            </div>    
        </div>
    )
}

export default EventoItem;