// Importações de estilos
import css from "./CSS/telaposlogin.module.css"

// Importações de componentes
import Botao from "../../components/Botao";


// Tela responsável por direcionar o usuário para sua rota correspondente
function TelaPosLogin() {
    return (
        <div className={css.main}>
            <fieldset>
                <legend>Direcionamento de Usuários</legend>
                <Botao msg="Telas do Cliente" estilo={true} rota="/RotasCliente" />
                <Botao msg="Telas do Musico" estilo={false} rota="" />
                <Botao msg="Telas do Gestor" estilo={true} rota="/RotasGestor" />
            </fieldset>
        </div>
    )
}
export default TelaPosLogin;

// Comandos para possíveis erros no powershell

// Para quando não tiver permissão de executar scripts (execução de scripts desabilitada):
// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

// Para quando houver incompatibilidade entre versões node:
// npm uninstall vite @vitejs/plugin-react
// npm install vite@5.4.0 @vitejs/plugin-react@4.2.0