// Importações de estilos
import t01_header from "./CSS/t01_header.module.css"

// Importações de componentes
import Botao from "components/Botao.jsx";
import Radio from "components/Radio.jsx";

// Importações do React
import { useEffect, useState } from "react";
import { useLocation }         from "react-router-dom";


// Componente utilizado como HEADER em todas as telas do gestor, direcionando para a tela que o gestor escolher
function T01_Header() {
    const path = useLocation()
    const splitPath = path.pathname.split("/").filter(Boolean)

    // TALVEZ TENHA QUE FAZER ALGO AQUI

    // Usado para pegar o botão selecionado
    const [botao, setBotao] = useState("iheader0")
    // console.log("botao selecionado -> " + botao)

    return (
        <div className={t01_header.main}>
        {
            <Radio setSelecionado={setBotao} name={"header"} firstChecked >
                <Botao msg={"Início (indicadores)"}    rota={"/Intranet/RotasGestor/Inicio"}              ativarEstilo />
                <Botao msg={"Solicitações de Serviço"} rota={"/Intranet/RotasGestor/SolicitacoesServico"} ativarEstilo />
                <Botao msg={"Banco de Dados"}          rota={"/Intranet/RotasGestor/BancoDeDados"}        ativarEstilo />
                <Botao msg={"Histórico Geral"}         rota={"/Intranet/RotasGestor/Historico"}           ativarEstilo />
            </Radio>
        }
        </div>
    )
}
export default T01_Header;