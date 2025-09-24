// Importações de estilos
import css from "./CSS/header.module.css"

// Importações de componentes
import Botao from "../../../components/Botao";
import Radio from "../../../components/Radio";

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
        <div className={css.main}>
        {
            <Radio setSelecionado={setBotao} name={"header"} firstChecked={true}>
                <Botao msg={"Início (indicadores)"} rota={"/RotasGestor/Inicio"} estilo={true} />
                <Botao msg={"Solicitações de Serviço"} rota={"/RotasGestor/SolicitacoesServico"} estilo={true} />
                <Botao msg={"Banco de Dados"} rota={"/RotasGestor/BancoDeDados"} estilo={true} />
                <Botao msg={"Gerencia de Permissões"} rota={"/RotasGestor/Permissoes"} estilo={true} />
                <Botao msg={"Histórico Geral"} rota={"/RotasGestor/Historico"} estilo={true} />
            </Radio>
        }
        </div>
    )
}
export default Header;