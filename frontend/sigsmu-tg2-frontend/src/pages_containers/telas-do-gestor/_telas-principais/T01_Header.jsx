// Importações de estilos
import t01_header from "./CSS/t01_header.module.css"

// Importações de componentes
import Botao from "../../../components/Botao";
import Radio from "../../../components/Radio";

// Importações do React
import { useState } from "react";


// Componente utilizado como HEADER em todas as telas do gestor, direcionando para a tela que o gestor escolher
function T01_Header() {

    // Usado para pegar o botão selecionado
    const [botao, setBotao] = useState("iheader0")
    console.log("botao selecionado -> " + botao)

    return (
        <div className={t01_header.main}>
        {
            <Radio setSelecionado={setBotao} name={"header"} firstChecked={true}>
                <Botao msg={"Início (indicadores)"} rota={"/Intranet/RotasGestor/Inicio"} estilo={true} />
                <Botao msg={"Solicitações de Serviço"} rota={"/Intranet/RotasGestor/SolicitacoesServico"} estilo={true} />
                <Botao msg={"Banco de Dados"} rota={"/Intranet/RotasGestor/BancoDeDados"} estilo={true} />
                <Botao msg={"Gerencia de Permissões"} rota={"/Intranet/RotasGestor/Permissoes"} estilo={true} />
                <Botao msg={"Histórico Geral"} rota={"/Intranet/RotasGestor/Historico"} estilo={true} />
            </Radio>
        }
        </div>
    )
}
export default T01_Header;