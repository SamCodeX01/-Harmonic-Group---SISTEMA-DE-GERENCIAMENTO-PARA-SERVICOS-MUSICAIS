// Importações de estilos
import botoessolicitacoesgestor from "./CSS/botoessolicitacoesgestor.module.css"

// Importações de componentes
import Botao from "../../../../components/Botao";


// DESCRIÇÃO
function BotoesSolicitacoesGestor() {
    return (
        <div className={botoessolicitacoesgestor.main} onClick={evt => {evt.stopPropagation()}}>
            <Botao msg={"Atribuir Equipe Automático"} rota={"/Intranet/RotasGestor/AtribuicaoAutomatica"} ativarEstilo={true} />
            <Botao msg={"Atribuir Equipe Manual"} rota={"/Intranet/RotasGestor/AtribuicaoManual"} ativarEstilo={true} />
            <Botao msg={"Definir Custos"} rota={"/Intranet/RotasGestor/SolicitacoesServico/Custos"} ativarEstilo={true} />
            <Botao msg={"Alterar Contrato"} rota={"/Intranet/RotasGestor/AlteracaoContrato"} ativarEstilo={true} />
            <Botao msg={"Enviar Devolutiva"} rota={"/Intranet/RotasGestor/Devolutiva"} ativarEstilo={true} />
            <Botao msg={"VER MAIS"} rota={""} ativarEstilo={true} />
        </div>
    )
}
export default BotoesSolicitacoesGestor;