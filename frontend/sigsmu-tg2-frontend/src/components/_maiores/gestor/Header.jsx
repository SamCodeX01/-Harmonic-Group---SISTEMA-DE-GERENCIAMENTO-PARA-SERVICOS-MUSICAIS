// Importações de estilos
import styles from "./header.module.css"

// Importações de componentes
import BotaoSimples from "../../forms/BotaoSimples";
import Radio from "../../forms/Radio";

// Importações do React
import { useState } from "react";


// Componente utilizado como HEADER em todas as telas do gestor, direcionando para a tela que o gestor escolher
function Header() {

    // Usado para pegar o botão selecionado
    const [botao, setBotao] = useState("iheader0")

    const teste = {
                background: "red"
            }

    return (
        <div className={styles.main}>
        {
            <Radio selecionado={botao} setSelecionado={setBotao} name={"header"} teste={teste}>
                <BotaoSimples msg={"Início (indicadores)"} rota={"/RotasGestor/Inicio"} estilo={true} />
                <BotaoSimples msg={"Solicitações de Serviço"} rota={"/RotasGestor/SolicitacoesServico"} estilo={true} />
                <BotaoSimples msg={"Banco de Dados"} rota={"/RotasGestor/BancoDeDados"} estilo={true} />
                <BotaoSimples msg={"Gerencia de Permissões"} rota={"/RotasGestor/Permissoes"} estilo={true} />
                <BotaoSimples msg={"Histórico Geral"} rota={"/RotasGestor/Historico"} estilo={true} />
            </Radio>
        }
        </div>
    )
}
export default Header;