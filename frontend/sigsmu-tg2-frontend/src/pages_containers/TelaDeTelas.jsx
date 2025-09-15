// Importações de componentes
import Botao from "../components/forms/Botao";

// Importações de estilos
import styles from "./telaDeTelas.module.css"


// Tela criada para MOSTRAR TODAS AS TELAS JÁ CRIADAS (para facilitar)
function TelaDeTelas() {
    return (
        <div className={styles.main}>
            <Botao msg="Tela de Login" estilo={true} rota="/TelaLogin/" />
            <Botao msg="Tela de Cadastro" estilo={true} rota="/TelaCadastro/" />
            <Botao msg="Tela de Alteração do Banco do Gestor" estilo={true} rota="/RotasGestor" />
        </div>
    )
}
export default TelaDeTelas;