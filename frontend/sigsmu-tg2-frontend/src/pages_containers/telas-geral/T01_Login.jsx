// Importações de estilos
import { useEffect, useState } from "react";
import t01_login from "./CSS/t01_login.module.css"

// Importações de iamgens
import logo1 from "./logo1.jpeg"

// Importações de componentes
import Botao from "components/Botao.jsx";
import Campo from "components/Campo.jsx";

// Importações do React
import { useNavigate } from "react-router-dom";
import { buscarMusicoPorCpf } from "services/Atores/Musico";
import { buscarGestorPorCpf } from "services/Atores/Gestor";


// Tela de LOGIN - para que usuários logem no sistema e vejam configurações específicas para cada tipo de perfil
function T01_Login() {
    const navigate = useNavigate()

    const [cpf, setCpf] = useState()
    const [senha, setSenha]     = useState()

    const [usuarioEncontrado, setUsuarioEncontrado] = useState({})
    let tipoUsuario = null

    async function buscarUsuario() {
        let retorno = null

        try {
            retorno = await buscarGestorPorCpf(cpf)
            setUsuarioEncontrado(retorno.data)
            tipoUsuario = "gestor"
        }
        catch (erro) {
            alert("Usuário não encontrado!")
        }

        //  PRECISA IMPLEMENTAR A LÓGICA DO MÚSICO PARA LOGIN (FALTA DE TEMPO)

        // buscarMusicoPorCpf(cpf)

        // // Buscar por nome do gestor (usuário) e caso não seja encontrado, buscar por nome do músico
        // if (values.usuario === "gestorName") {
        //     navigate("/Intranet/TelaGESTOR")
        // } else if (values.usuario === "musicoName")
        //     navigate("/Intranet/TelaMUSICO")
    }

    // Passador de telas
    useEffect(() => {
        if (tipoUsuario === "gestor") {
            if (senha === usuarioEncontrado.senha)
                navigate("/Intranet/RotasGestor/Inicio")
            else
                alert("Usuário ou senha errados!")
        }
    }, [usuarioEncontrado])



    return (
        <div className={t01_login.main}>
            {/* <img src="../imagens/sem_imagem.png" alt="Logo" className={t01_login.img}/> */}
            <img src={logo1} alt="Logo" className={t01_login.img}/>
            
            <form action="post" className={t01_login.form}>
                <Campo type="text"       name="login"        placeholder="Informe seu email" setValue={setCpf} />
                <Campo type="password"   name="senha"        placeholder="Informe sua senha" setValue={setSenha}   />
                <Botao msg="Fazer Login" ativarEstilo={true} value={ {cpf, senha} }
                    executarComando={(evt, values) => {

                        buscarUsuario()


                        
                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    }} 
                />
            </form>

            <div>
                <p><a href="" target="blank"> Esqueci minha senha </a></p>
                
                <p> Não tem uma conta? </p>
                
                {/* Passa para a próxima tela */}
                <Botao msg="Criar uma nova conta" ativarEstilo={false} rota={"/Intranet/TelaCadastro"}/>
            </div>

        </div>
    )
}
export default T01_Login;