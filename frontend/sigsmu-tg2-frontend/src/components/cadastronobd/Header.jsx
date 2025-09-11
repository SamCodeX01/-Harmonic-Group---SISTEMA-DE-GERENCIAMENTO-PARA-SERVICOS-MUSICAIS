import Botao from "../forms/Botao";
import styles from "./header.module.css"

function Header() {
    return (
        <div className={styles.main}>
            <Botao msg={"Início (indicadores)"} estilo={true}/>
            <Botao msg={"Solicitações de Serviço"} estilo={true}/>
            <Botao msg={"Banco de Dados"} estilo={true}/>
            <Botao msg={"Gerencia de Permissões"} estilo={true}/>
            <Botao msg={"Histórico Geral"} estilo={true}/>
        </div>
    )
}
export default Header;