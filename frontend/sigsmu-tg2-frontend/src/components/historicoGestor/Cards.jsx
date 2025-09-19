// Importações do React
import { useState } from "react";

// Importações de estilos
import styles from "./cards.module.css"

// Importações de componentes
import BotoesSolicitacoesGestor from "./BotoesSolicitacoesGestor";

function Cards({id, objCliente, metodoSet, comBotao=false, clicavel=false}) {
    const [mostrarBotoes, setMostrarBotoes] = useState(false)

    return (
        <div 
            className={(comBotao ? styles.main : styles.mainSemFlex)} 
            id={id}
            onClick={clicavel ? () => {
                setMostrarBotoes(!mostrarBotoes)
            } : ""}
            >

            <div className={styles.secondary}>

                <div className={styles.ladoEsquerdo}>
                    <p><span>ID da solicitação:</span> {objCliente.idSolicitacao} </p>
                    <p><span>Nome do cliente:</span> {objCliente.nomeCliente} </p>
                    <p><span>Situação:</span> {objCliente.situacaoServico} </p>
                </div>

                <div className={styles.ladoDireito}>
                    <p><span>Data da solicitação:</span> {objCliente.dataSolicitacao} </p>
                    <p><span>Nome do pacote:</span> {objCliente.tipoServico} </p>
                    <p><span>Tipo de serviço:</span> {objCliente.pacoteEscolhido} </p>
                </div>
            </div>

            { (mostrarBotoes && <BotoesSolicitacoesGestor />) }
            { (comBotao && <button className={styles.button}>Visualizar <br/> contrato</button>) }

        </div>
    )   
}
export default Cards;