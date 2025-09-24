// Importações de estilos
import css from "./CSS/cards.module.css"

// Importações de componentes
import BotoesSolicitacoesGestor from "../historico/BotoesSolicitacoesGestor";


// DESCRIÇÃO...
function Cards({id, objCliente, metodoSet, comBotao=false, idCardSelecionado}) {
    const idElemento = "icard"+id

    return (
        <div 
            className={`
                ${css.main} 
                ${(comBotao ? css.mainComFlex : css.mainSemFlex)}
            `}>

            <div className={css.secondary}>

                <div className={css.ladoEsquerdo}>
                    <p><span>ID da solicitação:</span> {objCliente.idSolicitacao} </p>
                    <p><span>Nome do cliente:</span> {objCliente.nomeCliente} </p>
                    <p><span>Situação:</span> {objCliente.situacaoServico} </p>
                </div>

                <div className={css.ladoDireito}>
                    <p><span>Data da solicitação:</span> {objCliente.dataSolicitacao} </p>
                    <p><span>Nome do pacote:</span> {objCliente.tipoServico} </p>
                    <p><span>Tipo de serviço:</span> {objCliente.pacoteEscolhido} </p>
                </div>

            </div>

            {/* Mostra os botões correspondentes ao card selecionado */}
            {idCardSelecionado === idElemento && <BotoesSolicitacoesGestor />}

            {comBotao && <button className={css.button}>Visualizar <br/> contrato</button>}

        </div>
    )   
}
export default Cards;