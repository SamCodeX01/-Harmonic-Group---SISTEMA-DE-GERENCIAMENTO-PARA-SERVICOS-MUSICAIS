// Importações do React
import { useState } from "react";

// Importações de componentes
import BotaoSelecionavel from "../forms/BotaoSelecionavel";

// Importações de estilos
import styles from "./header.module.css"


// Componente utilizado como HEADER em todas as telas do gestor. 
// Direciona para a tela que o gestor escolher
function Header() {
    const [botao, setBotao] = useState("Início (indicadores)")


    const gambiarra = () => {}
    
    const dados = {
        "Início (indicadores)"    : "/RotasGestor/Inicio",
        "Solicitações de Serviço" : "/RotasGestor/SolicitacoesServico",
        "Banco de Dados"          : "/RotasGestor/BancoDeDados",
        "Gerencia de Permissões"  : "/RotasGestor/Permissoes",
        "Histórico Geral"         : "/RotasGestor/Historico"
    }// key = nome da tela        - value = rota

    return (
        <div className={styles.main}>
        {
            Object.entries(dados).map((dado, i) => {
                return <BotaoSelecionavel 
                    msg={dado[0]}               // define a mensagem a ser exibida no botão
                    estilo={true}               // define se o botão tem estilo ou não
                    rota={dado[1]}              // define a rota a qual o botão irá direcionar
                    key={"button" + (i+1)}      // define o id do botão (para não dar erro no console)
                    selecionado={botao}         // envia o botão atualmente selecionado (serve para comparação)
                    setSelecionado={setBotao}   // envia o método set para alterar o estado dos botões
                    callback={gambiarra}        // serve pra nada, só pra não quebrar tudo!
                />
            })
        }
        </div>
    )
}
export default Header;