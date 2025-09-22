// Importações de estilos
import styles from "./CSS/teladetelas.module.css"

// Importações de componentes
import BotaoDirecionavel from "../components/forms/BotaoDirecionavel";


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

// Comandos para possíveis erros no powershell

// Para quando não tiver permissão de executar scripts (execução de scripts desabilitada):
// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

// Para quando houver incompatibilidade entre versões node:
// npm uninstall vite @vitejs/plugin-react
// npm install vite@5.4.0 @vitejs/plugin-react@4.2.0