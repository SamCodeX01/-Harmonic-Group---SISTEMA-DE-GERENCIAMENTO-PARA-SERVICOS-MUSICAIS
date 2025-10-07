// Importações de estilos
import botoessolicitacoesgestor from "./CSS/botoessolicitacoesgestor.module.css"

// Importações de componentes
import Botao from "../../../../components/Botao";


// DESCRIÇÃO
function BotoesSolicitacoesGestor() {
    return (
        <div className={botoessolicitacoesgestor.main} onClick={evt => {evt.stopPropagation()}}>
            <Botao msg={"Atribuir Equipe Automático"} rota={"/Intranet/RotasGestor/AtribuicaoAutomatica"} estilo={true} />
            <Botao msg={"Atribuir Equipe Manual"} rota={"/Intranet/RotasGestor/AtribuicaoManual"} estilo={true} />
            <Botao msg={"Definir Custos"} rota={"/Intranet/RotasGestor/SolicitacoesServico/Custos"} estilo={true} />
            <Botao msg={"Alterar Contrato"} rota={"/Intranet/RotasGestor/AlteracaoContrato"} estilo={true} />
            <Botao msg={"Enviar Devolutiva"} rota={"/Intranet/RotasGestor/Devolutiva"} estilo={true} />
            <Botao msg={"VER MAIS"} rota={""} estilo={true} />
        </div>
    )
}
export default BotoesSolicitacoesGestor;