// Importações de estilos
import t01_login from "./CSS/t01_login.module.css"

// Importações de imagens
import logo1 from "./logo1.jpeg"

// Importações de componentes
import Botao from "components/Botao.jsx";
import Campo from "components/Campo.jsx";

// Importações da API (Axios)
import { buscarMusicoPorCpf }       from "services/Atores/Musico.js";
import { buscarGestorPorCpf }       from "services/Atores/Gestor.js";
import { dadosGestor, dadosMusico } from "services/_AUXILIAR/GlobalData.js";

// Importações do React
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


// Tela de LOGIN - para que usuários logem no sistema e vejam configurações específicas para cada tipo de perfil
function T01_Login() {
    
    //============================ PARA TESTES =============================//
    const [ignorarLoginParaTestes, setIgnorarLoginParaTestes] = useState(false)
    const mostrarBotaoIgnorar = true
    //======================================================================//

    const navigate = useNavigate()

    // Pega o cpf e senha do input (FORMS)
    const [cpf, setCpf]     = useState()
    const [senha, setSenha] = useState()

    // Guarda o obj do usuário encontrado no banco (gestor ou músico)
    const [usuarioEncontrado, setUsuarioEncontrado] = useState(null)

    // Checa se de fato o usuário existe ou não no banco
    async function buscarUsuarioNoBanco() {

        try {
            // Aguarda o retorno da API
            let retorno = await buscarGestorPorCpf(cpf)

            // Se houver retorno, guarda o obj retornado
            if (retorno.data !== null)
                setUsuarioEncontrado({...retorno.data, tipo : "gestor"})

            else {
                // Aguarda o retorno da API novamente
                retorno = await buscarMusicoPorCpf(cpf)

                // Se houver retorno, guarda o obj retornado
                if (retorno.data !== null)
                    setUsuarioEncontrado({...retorno.data, tipo : "musico"})
                else
                    alert("Usuário não encontrado!")
            }
        }
        catch (erro) {
            alert("Erro ao buscar usuário!")
        }
    }

    // Responsável por validar e permitir o LOGIN caso um usuário seja encontrado
    useEffect(() => {

        // Passa para as TELAS DO GESTOR caso o usuário seja um gestor
        if (usuarioEncontrado?.tipo === "gestor") {
            if (validarLogin()) {
                dadosGestor.set( usuarioEncontrado )
                navigate("/Intranet/RotasGestor/Inicio")
            }
        }

        // Passa para as TELAS DO MÚSICO caso o usuário seja um músico
        else if (usuarioEncontrado?.tipo === "musico") {
            if (validarLogin()) {
                dadosMusico.set( usuarioEncontrado )
                navigate("/Intranet/RotasMusico/Inicio")
            }
        }
    }, [usuarioEncontrado])

    // Responsável por checar se a senha informada bate com a senha real do usuário
    const validarLogin = () => {

        // Só para visualizar (apagar depois)
        console.log("Senha informada -> " + senha)
        console.log("Senha real -> " + usuarioEncontrado.senha)

        if (senha === usuarioEncontrado.senha)
            return true
        else
            alert("Usuário ou senha inválido!")
    }


    return (
        <div className={t01_login.main}>

            {/* APAGAR DEPOIS */} {mostrarBotaoIgnorar &&
            <div className={t01_login.ignorarLogin} 
                onClick={() => setIgnorarLoginParaTestes(!ignorarLoginParaTestes)}>
            IGNORAR {"\n"}LOGIN: {String(ignorarLoginParaTestes)} </div> }

            {/* <img src="../imagens/sem_imagem.png" alt="Logo" className={t01_login.img}/> */}
            <img src={logo1} alt="Logo" className={t01_login.img}/>
            
            <form action="post" className={t01_login.form}>
                <Campo type="text"       name="login"        placeholder="Informe seu email" setValue={setCpf} />
                <Campo type="password"   name="senha"        placeholder="Informe sua senha" setValue={setSenha} />
                <Botao msg="Fazer Login" ativarEstilo={true} value={ {cpf, senha} }
                    executarComando={() => {

                        // Realiza o processo de LOGIN ou o ignora para testes
                        if (ignorarLoginParaTestes)
                            navigate("/Intranet/TelaPosLogin")
                        else
                            buscarUsuarioNoBanco()
                    }} 
                />
            </form>

            <div>
                <p><a href="" target="blank"> Esqueci minha senha </a></p>
                
                <p> Não tem uma conta? </p>
                
                {/* Leva à tela de CADASTRO DE MÚSICOS */}
                <Botao msg="Criar uma nova conta" ativarEstilo={false} rota={"/Intranet/TelaCadastro"}/>
            </div>

        </div>
    )
}
export default T01_Login;