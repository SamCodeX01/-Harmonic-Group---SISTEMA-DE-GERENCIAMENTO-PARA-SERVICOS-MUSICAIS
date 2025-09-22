// Importações de estilos
import styles from "./CSS/botoessolicitacoesgestor.module.css"

// Importações de componentes
// import RadioButton from "../forms/RadioButton";
import BotaoSimples from "../../../forms/BotaoSimples";


// DESCRIÇÃO
function BotoesSolicitacoesGestor() {
    return (
        <div className={styles.main} onClick={evt => {evt.stopPropagation()}}>
            <BotaoSimples msg={"Atribuir Equipe Automático"} rota={"/"} estilo={true} />
            <BotaoSimples msg={"Atribuir Equipe Manual"} rota={"/"} estilo={true} />
            <BotaoSimples msg={"Definir Custos"} rota={"/"} estilo={true} />
            <BotaoSimples msg={"Alterar Contrato"} rota={"/"} estilo={true} />
            <BotaoSimples msg={"Enviar Devolutiva"} rota={"/"} estilo={true} />
            <BotaoSimples msg={"VER MAIS"} rota={"/"} estilo={true} />
        </div>
    )
}
export default BotoesSolicitacoesGestor;