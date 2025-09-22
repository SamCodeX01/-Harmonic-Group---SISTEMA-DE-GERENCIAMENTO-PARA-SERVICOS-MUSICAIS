// Importações de estilos
import styles from "./CSS/botoessolicitacoesgestor.module.css"

// Importações de componentes
import BotaoSimples from "../../../forms/BotaoSimples";


// DESCRIÇÃO
function BotoesSolicitacoesGestor() {
    return (
        <div className={styles.main} onClick={evt => {evt.stopPropagation()}}>
            <BotaoSimples msg={"Atribuir Equipe Automático"} rota={"/RotasGestor/AtribuicaoAutomatica"} estilo={true} />
            <BotaoSimples msg={"Atribuir Equipe Manual"} rota={"/RotasGestor/AtribuicaoManual"} estilo={true} />
            <BotaoSimples msg={"Definir Custos"} rota={"/RotasGestor/Custos"} estilo={true} />
            <BotaoSimples msg={"Alterar Contrato"} rota={"/RotasGestor/AlteracaoContrato"} estilo={true} />
            <BotaoSimples msg={"Enviar Devolutiva"} rota={"/RotasGestor/Devolutiva"} estilo={true} />
            <BotaoSimples msg={"VER MAIS"} rota={""} estilo={true} />
        </div>
    )
}
export default BotoesSolicitacoesGestor;