// Importações de componentes
import Botao from "../forms/Botao";

// Importações de estilos
import styles from "./header.module.css"


function Header() {
    return (
        <div className={styles.main}>
            <Botao msg={"Início (indicadores)"} estilo={true} rota={"/RotasGestor/Inicio"}/>
            <Botao msg={"Solicitações de Serviço"} estilo={true} rota={"/RotasGestor/SolicitacoesServico"}/>
            <Botao msg={"Banco de Dados"} estilo={true} rota={"/RotasGestor/BancoDeDados"}/>
            <Botao msg={"Gerencia de Permissões"} estilo={true} rota={"/RotasGestor/Permissoes"}/>
            <Botao msg={"Histórico Geral"} estilo={true} rota={"/RotasGestor/Historico"}/>
        </div>
    )
}
export default Header;