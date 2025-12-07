// Importações de estilos
import eventoItemCss from "./CSS/partesevento.module.css"

// Importações do React
import React, { useEffect, useState } from "react";


function PartesEvento({ evento, setMusicas }) {
    const [partesAbertas, setPartesAbertas] = useState({});
    const [firstTime, setFirstTime] = useState(null);

    // Lista de músicas escolhidas
    const [listaDeMusicas, setListaDeMusicas] = useState({});

    useEffect(() => {
        setFirstTime(true);
    }, []);

    const mudarMusica = (musica, id) => {
        console.log("ID -> " + id);

        setListaDeMusicas(prev => {
            const atualizado = { ...prev, [`key${id}`]: musica };
            setMusicas(atualizado); // continua enviando pro pai
            return atualizado;
        });
    };


    // Função para alternar entre abrir/fechar uma parte
    const toggleParte = (key) => {
        setPartesAbertas(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    //Verificação de Segurança
    if (!evento) {
        return <div className={eventoItemCss.eventoContainer}>Nenhum evento selecionado</div>
    }

    if (!evento.partes) {
        return <div className={eventoItemCss.eventoContainer}>Evento não possui partes definidas</div>
    }

    return (
        <div className={eventoItemCss.eventoContainer}>

            <div className={eventoItemCss.eventoHeader}>
                <h2 className={eventoItemCss.eventoTitulo}>{evento.titulo}</h2>
                <p className={eventoItemCss.eventoDescricao}>{evento.descricao}</p>
            </div>

            <div className={eventoItemCss.partesContainer}>

                {Object.entries(evento.partes).map(([key, parte], index) => (

                    <div key={key} className={eventoItemCss.parteItem}>
                        {firstTime ? listaDeMusicas[`key${index}`] = "" : ""}

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


                        {/* CONTEÚDO DA PARTE */}
                        <div className={eventoItemCss.parteConteudo} style={{ "display": `${partesAbertas[key] ? "" : "none"}` }}>
                            <p className={eventoItemCss.parteDescricao}>{parte.descricao}</p>

                            {/* Mostrar as músicas */}
                            <div className={eventoItemCss.musicasLista}>

                                <h4> Músicas Sugeridas: </h4>

                                <select onChange={evt => {
                                    const musicaSelecionada = evt.currentTarget.value;
                                    mudarMusica(musicaSelecionada, index);
                                }}>

                                {
                                    parte.musicas?.map((musica, i) => (
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
                {firstTime ? setFirstTime(false) : ""}
            </div>
        </div>
    )
}

export default PartesEvento;
