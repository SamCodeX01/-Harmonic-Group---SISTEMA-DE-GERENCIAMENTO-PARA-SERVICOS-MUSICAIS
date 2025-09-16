// Importações de componentes
import BotaoSelecionavel from "../forms/Botao";
import Campo from "../forms/Campo";
// import Botao from "../forms/Campo";

// Importações de estilos
import styles from "./header.module.css"


function Header() {
    return (
        <div className={styles.main}>
            {/* <Campo msg={"Início (indicadores)"} tipo={"radio"} nome={"radio1"} />
            <Campo msg={"Solicitações de Serviço"} tipo={"radio"} nome={"radio2"} /> */}

            <BotaoSelecionavel msg={"Início (indicadores)"} estilo={true} rota={"/RotasGestor/Inicio"} selecionavel={true} marcadoPadrao={true} />
            <BotaoSelecionavel msg={"Solicitações de Serviço"} estilo={true} rota={"/RotasGestor/SolicitacoesServico"} selecionavel={true} />
            <BotaoSelecionavel msg={"Banco de Dados"} estilo={true} rota={"/RotasGestor/BancoDeDados"} selecionavel={true} />
            <BotaoSelecionavel msg={"Gerencia de Permissões"} estilo={true} rota={"/RotasGestor/Permissoes"} selecionavel={true} />
            <BotaoSelecionavel msg={"Histórico Geral"} estilo={true} rota={"/RotasGestor/Historico"} selecionavel={true} />
        </div>
    )
}
export default Header;