import Botao from "../components/forms/Botao";
import styles from "./TelaDeTelas.module.css"

function TelaDeTeste() {
    return (
        <div className={styles.main}>
            <Botao msg="Tela de Login" estilo={true} rota="/TelaLogin" />
            <Botao msg="Tela de Cadastro" estilo={true} rota="/TelaCadastro" />
            <Botao msg="Tela de Alteração do Banco do Gestor" estilo={true} rota="/TelaCadastroItensGestor" />
        </div>
    )
}
export default TelaDeTeste;