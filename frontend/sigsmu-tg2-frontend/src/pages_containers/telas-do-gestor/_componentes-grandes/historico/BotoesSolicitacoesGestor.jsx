// Importações de estilos
import css from "./CSS/botoessolicitacoesgestor.module.css"

// Importações de componentes
import Botao from "../../../../components/Botao";


// DESCRIÇÃO
function BotoesSolicitacoesGestor() {
    return (
        <div className={css.main} onClick={evt => {evt.stopPropagation()}}>
            <Botao msg={"Atribuir Equipe Automático"} rota={"/RotasGestor/AtribuicaoAutomatica"} estilo={true} />
            <Botao msg={"Atribuir Equipe Manual"} rota={"/RotasGestor/AtribuicaoManual"} estilo={true} />
            <Botao msg={"Definir Custos"} rota={"/RotasGestor/Custos"} estilo={true} />
            <Botao msg={"Alterar Contrato"} rota={"/RotasGestor/AlteracaoContrato"} estilo={true} />
            <Botao msg={"Enviar Devolutiva"} rota={"/RotasGestor/Devolutiva"} estilo={true} />
            <Botao msg={"VER MAIS"} rota={""} estilo={true} />
        </div>
    )
}
export default BotoesSolicitacoesGestor;