// Importações de estilos
import css from "./CSS/telalogin.module.css"

// Importações de componentes
import Botao from "../../components/forms/Botao.jsx";
import Campo from "../../components/forms/Campo.jsx";


// Tela de LOGIN - para que usuários logem no sistema e vejam configurações específicas para cada tipo de perfil
function TelaLogin() {
    return (
        <div className={css.main}>
            <img src="../imagens/sem_imagem.png" alt="Logo" className={css.img}/>
            
            <form action="post" className={css.form}>
                <Campo 
                    type="email" 
                    name="login" 
                    placeholder="Informe seu email"
                />

                <Campo 
                    type="password" 
                    name="senha"
                    placeholder="Informe sua senha"
                />
                
                <Botao 
                    msg="Fazer login" 
                    estilo={true}
                    rota={"/RotasGestor/"}
                />
            </form>
            <p><a href="" target="blank">Esqueci minha senha</a></p>
            
            <p>Não tem uma conta?</p>

            {/* Passa para a próxima tela */}
            <Botao 
                msg="Criar uma nova conta"
                estilo={false} 
                rota={"/TelaCadastro/"} 
            />

        </div>
    )
}
export default TelaLogin;