// Importações de componentes
import Botao from "../forms/Botao";
import Campo from "../forms/Campo";
// import Botao from "../forms/Campo";

// Importações de estilos
import styles from "./header.module.css"


function Header() {
    return (
        <div className={styles.main}>
            {/* <Campo msg={"Início (indicadores)"} tipo={"radio"} nome={"radio1"} />
            <Campo msg={"Solicitações de Serviço"} tipo={"radio"} nome={"radio2"} /> */}

            <Botao msg={"Início (indicadores)"} estilo={true} rota={"/RotasGestor/Inicio"} selecionavel={true} marcadoPadrao={true} />
            <Botao msg={"Solicitações de Serviço"} estilo={true} rota={"/RotasGestor/SolicitacoesServico"} selecionavel={true} />
            <Botao msg={"Banco de Dados"} estilo={true} rota={"/RotasGestor/BancoDeDados"} selecionavel={true} />
            <Botao msg={"Gerencia de Permissões"} estilo={true} rota={"/RotasGestor/Permissoes"} selecionavel={true} />
            <Botao msg={"Histórico Geral"} estilo={true} rota={"/RotasGestor/Historico"} selecionavel={true} />
        </div>
    )
}
export default Header;