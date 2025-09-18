// Importações de componentes
import BotaoDirecionavel from "../components/forms/BotaoDirecionavel";

// Importações de estilos
import styles from "./telaDeTelas.module.css"


// Tela criada para MOSTRAR TODAS AS TELAS JÁ CRIADAS (para facilitar)
function TelaDeTelas() {
    return (
        <div className={styles.main}>
            <BotaoDirecionavel msg="Tela de Login" estilo={true} rota="/TelaLogin/" />
            <BotaoDirecionavel msg="Tela de Cadastro" estilo={true} rota="/TelaCadastro/" />
            <BotaoDirecionavel msg="Tela de Alteração do Banco do Gestor" estilo={true} rota="/RotasGestor" />
        </div>
    )
}
export default TelaDeTelas;