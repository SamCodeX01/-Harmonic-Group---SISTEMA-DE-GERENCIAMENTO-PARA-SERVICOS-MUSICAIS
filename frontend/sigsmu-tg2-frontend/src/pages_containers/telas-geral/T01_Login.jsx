// Importações de estilos
import t01_login from "./CSS/t01_login.module.css"

// Importações de iamgens
import logo1 from "./logo1.jpeg"

// Importações de componentes
import Botao from "../../components/Botao.jsx";
import Campo from "../../components/Campo.jsx";


// Tela de LOGIN - para que usuários logem no sistema e vejam configurações específicas para cada tipo de perfil
function T01_Login() {
    return (
        <div className={t01_login.main}>
            {/* <img src="../imagens/sem_imagem.png" alt="Logo" className={t01_login.img}/> */}
            <img src={logo1} alt="Logo" className={t01_login.img}/>
            
            <form action="post" className={t01_login.form}>
                <Campo type="email" name="login" placeholder="Informe seu email"/>
                <Campo type="password" name="senha" placeholder="Informe sua senha"/>
                <Botao msg="Fazer login" ativarEstilo={true} rota={"/Intranet/TelaPosLogin"}/>
            </form>

            <div>
                <p><a href="" target="blank">Esqueci minha senha</a></p>
                
                <p>Não tem uma conta?</p>
                
                {/* Passa para a próxima tela */}
                <Botao msg="Criar uma nova conta" ativarEstilo={false} rota={"/Intranet/TelaCadastro"}/>
            </div>

        </div>
    )
}
export default T01_Login;