// Importações de estilos
import styles from "./CSS/telalogin.module.css"

// Importações de componentes
import Botao from "../../components/forms/Botao.jsx";
import Campo from "../../components/forms/Campo.jsx";


// Tela de LOGIN - para que usuários logem no sistema e vejam configurações específicas para cada tipo de perfil
function TelaLogin() {
    return (
        <div className={styles.main}>
            <img src="../imagens/sem_imagem.png" alt="Logo" className={styles.img}/>
            
            <form action="post" className={styles.form}>
                <Campo tipo="email" nome="login" 
                dica="Informe seu email"/>
                <Campo tipo="password" nome="senha"
                dica="Informe sua senha"/>
                <Botao msg="Fazer login" estilo={true}/>
            </form>
            <p><a href="" target="blank">Esqueci minha senha</a></p>
            
            <p>Não tem uma conta?</p>

            {/* Passa para a próxima tela */}
            <Botao msg="Criar uma nova conta" estilo={false} /> 
            {/* rota="/TelaCadastro" /> */}
        </div>
    )
}
export default TelaLogin;