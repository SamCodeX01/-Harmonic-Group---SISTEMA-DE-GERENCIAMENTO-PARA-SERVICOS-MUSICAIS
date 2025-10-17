// Importações de estilos
import t01_header from "./CSS/t01_header.module.css"

// Importações de componentes
import Botao from "../../../components/Botao";
import Radio from "../../../components/Radio";

// Importações do React
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


// Componente utilizado como HEADER em todas as telas do gestor, direcionando para a tela que o gestor escolher
function T01_Header() {
    const path = useLocation()
    const splitPath = path.pathname.split("/").filter(Boolean)
    let botaoSelecionado

    useEffect(() => {

    }, [])


    // Usado para pegar o botão selecionado
    const [botao, setBotao] = useState("iheader0")
    // console.log("botao selecionado -> " + botao)

    return (
        <div className={t01_header.main}>
        {
            <Radio setSelecionado={setBotao} name={"header"} firstChecked >
                <Botao msg={"Início (indicadores)"} rota={"/Intranet/RotasGestor/Inicio"} ativarEstilo={true} />
                <Botao msg={"Solicitações de Serviço"} rota={"/Intranet/RotasGestor/SolicitacoesServico"} ativarEstilo={true} />
                <Botao msg={"Banco de Dados"} rota={"/Intranet/RotasGestor/BancoDeDados"} ativarEstilo={true} />
                <Botao msg={"Gerencia de Permissões"} rota={"/Intranet/RotasGestor/Permissoes"} ativarEstilo={true} />
                <Botao msg={"Histórico Geral"} rota={"/Intranet/RotasGestor/Historico"} ativarEstilo={true} />
            </Radio>
        }
        </div>
    )
}
export default T01_Header;