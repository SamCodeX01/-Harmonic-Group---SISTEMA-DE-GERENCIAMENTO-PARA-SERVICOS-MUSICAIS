// Importações de estilos
import cards from "./CSS/cards.module.css"

// Importações de componentes
import BotoesSolicitacoesGestor from "../historico/BotoesSolicitacoesGestor";


// DESCRIÇÃO...
function Cards({id, objCliente, metodoSet, comBotao=false, idCardSelecionado}) {
    const idElemento = "icard"+id

    return (
        <div 
            className={`
                ${cards.main} 
                ${(comBotao ? cards.mainComFlex : cards.mainSemFlex)}
            `}>

            <div className={cards.secondary}>

                <div className={cards.ladoEsquerdo}>
                    <p><span>ID da solicitação:</span> {objCliente.idSolicitacao} </p>
                    <p><span>Nome do cliente:</span> {objCliente.nomeCliente} </p>
                    <p><span>Situação:</span> {objCliente.situacaoServico} </p>
                </div>

                <div className={cards.ladoDireito}>
                    <p><span>Data da solicitação:</span> {objCliente.dataSolicitacao} </p>
                    <p><span>Nome do pacote:</span> {objCliente.tipoServico} </p>
                    <p><span>Tipo de serviço:</span> {objCliente.pacoteEscolhido} </p>
                </div>

            </div>

            {/*       MOSTRA OS BOTÕES DO CARD SELECIONADO - TIPO 1       */}
            {idCardSelecionado === idElemento && <BotoesSolicitacoesGestor />}

            {/*                MOSTRA UM BOTÃO À DIREITA DO CARD - TIPO 2                */}
            {comBotao && <button className={cards.button}>Visualizar <br/> contrato</button>}

        </div>
    )   
}
export default Cards;