// Importações de estilos
import styles from "./CSS/cards.module.css"

// Importações de componentes
import BotoesSolicitacoesGestor from "./BotoesSolicitacoesGestor";


// DESCRIÇÃO...
function Cards({id, objCliente, metodoSet, comBotao=false, idCardSelecionado}) {

    return (
        <div 
            className={`${styles.main} ${(comBotao ? styles.mainComFlex : styles.mainSemFlex)}`} 
            id={id}
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

            {/* Mostra os botões correspondentes ao card selecionado */}
            {idCardSelecionado === "icard"+id && <BotoesSolicitacoesGestor />}

            
            { (comBotao && <button className={styles.button}>Visualizar <br/> contrato</button>) }

        </div>
    )   
}
export default Cards;