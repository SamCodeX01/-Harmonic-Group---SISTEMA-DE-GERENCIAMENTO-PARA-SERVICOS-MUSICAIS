// Importações de estilos
import botoessolicitacoesgestor from "./CSS/botoessolicitacoesgestor.module.css"

// Importações de componentes
import Botao from "../../../../components/Botao";


// DESCRIÇÃO
function BotoesSolicitacoesGestor() {
    return (
        <div className={botoessolicitacoesgestor.main} onClick={evt => {evt.stopPropagation()}}>
            <Botao msg={"Atribuir Equipes"}  rota={"/Intranet/RotasGestor/SolicitacoesServico/AtribuicaoEquipes"}
            ativarEstilo={true} />
            <Botao msg={"Gerenciar Ensaio"}  rota={"/Intranet/RotasGestor/SolicitacoesServico/GerenciarEnsaio"}
            ativarEstilo={true} />
            <Botao msg={"Definir Custos"}    rota={"/Intranet/RotasGestor/SolicitacoesServico/Custos"}
            ativarEstilo={true} />
            <Botao msg={"Alterar Contrato"}  rota={"/Intranet/RotasGestor/SolicitacoesServico/AlteracaoContrato"}
            ativarEstilo={true} />
            <Botao msg={"Enviar Devolutiva"} rota={"/Intranet/RotasGestor/SolicitacoesServico/Devolutiva"}
            ativarEstilo={true} />
            <Botao msg={"VER MAIS"}          rota={""}
            ativarEstilo={true} />
        </div>
    )
}
export default BotoesSolicitacoesGestor;