// Importações de estilos
import styles from "./teladetelas.module.css"

// Importações de componentes
import BotaoSimples from "../components/forms/BotaoSimples";


// Tela criada para MOSTRAR TODAS AS TELAS JÁ CRIADAS (para facilitar)
function TelaDeTelas() {
    return (
        <div className={styles.main}>

            <fieldset>
                <legend>Geral</legend>
                <BotaoSimples msg="Tela de Login" estilo={true} rota="/TelaLogin/" />
                <BotaoSimples msg="Tela de Cadastro" estilo={true} rota="/TelaCadastro/" />
            </fieldset>

            <fieldset>
                <legend>Gestor</legend>
                <BotaoSimples msg="Telas do Gestor" estilo={true} rota="/RotasGestor" />
            </fieldset>

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