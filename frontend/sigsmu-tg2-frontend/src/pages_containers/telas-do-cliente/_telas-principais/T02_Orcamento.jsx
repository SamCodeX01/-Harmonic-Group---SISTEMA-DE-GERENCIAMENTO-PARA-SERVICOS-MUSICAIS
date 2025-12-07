// Importações de estilos
import t02_orcamento from "./CSS/t02_orcamento.module.css"

// Importações de componentes
import Botao  from "components/Botao.jsx";
import Campo  from "components/Campo.jsx";
import Select from "components/Select.jsx";
// import T09_Footer from '../../../site_do_sistema/components_site/T09_Footer.jsx'

// Importações de imagens
import footerImg from "site_do_sistema/imagens_site/footer.png"

// Importações da API (Axios)
import { listarTiposLocal }               from "services/TabelasIndependentes/TipoLocal.js";
import { listarPacotesServico }           from "services/TabelasIndependentes/PacoteServico.js";
import { dadosCliente, dadosSolicitacao } from "services/_AUXILIAR/GlobalData.js";

// Importações do React
import { useEffect, useState } from "react";


// Tela responsável por iniciar os FORMULÁRIOS DE ORÇAMENTO para o cliente
function T02_Orcamento() {

    //========================== DADOS RETORNADOS DO BANCO ==========================//
    const [tiposLocal,     setTiposLocal]     = useState(null) // tabela TipoLocal
    const [pacotesServico, setPacotesServico] = useState(null) // tabela PacoteServico
    // ============================================================================ //
    
    // Passa os dados informados pelo cliente para o Global.js
    const passarDadosProJSGlobal = (infoCliente, infoSolicitacao) => {
        
        // Pega a data atual do sistema
        const date = new Date();
        const dataBR = date.toLocaleDateString('pt-BR');
        infoSolicitacao["dataSolicitacao"] = dataBR.replaceAll("/","-")
        
        dadosCliente.set(infoCliente)
        dadosSolicitacao.set(infoSolicitacao)
    }
    
    // Retorna a LISTA DE TIPOS DE LOCAL do Banco - OK
    const carregarTiposLocal = async () => {
        try {
            const response = await listarTiposLocal();
            setTiposLocal(response.data)

        } catch (erro) {
            console.error("Erro ao listar tipos de local:", erro);
        }
    };

    // Retorna a LISTA DE PACOTES do Banco - OK
    const carregarPacotesServico = async () => {
        try {
            const response = await listarPacotesServico();
            setPacotesServico(response.data)

        } catch (erro) {
            console.error("Erro ao listar pacotes de serviço:", erro);
        }
    };


    // Chama as 2 funções acima somente uma vez
    useEffect(() => {
        carregarTiposLocal();
        carregarPacotesServico();
    }, [])

    // Serve para não dar undefined caso o cliente deixe a opção padrão no select
    useEffect(() => {
        if (tiposLocal != null && pacotesServico != null) {
            setPacote(pacotesServico[0].id)
            setTipoLocal(tiposLocal[0].id)
        }
    }, [tiposLocal, pacotesServico])


    // Informações de contato
    const [nome,           setNome]          = useState()
    const [cpf,            setCpf]           = useState()
    const [email,          setEmail]         = useState()
    const [celular,        setCelular]       = useState()
    const [dataNasc,       setDataNasc]      = useState()
    const [endereco,       setEndereco]      = useState()

    // Sobre o evento
    const [pacote,         setPacote]        = useState() // id
    const [dataEvento,     setDataEvento]    = useState()
    const [qtdConvidados,  setQtdConvidados] = useState()
    const [horarioInicio,  setHoraInicio]    = useState()
    const [horarioTermino, setHoraTermino]   = useState()

    // Sobre o local do evento
    const [cep,            setCep]           = useState()
    const [nomeLocal,      setNomeLocal]     = useState()
    const [cidade,         setCidade]        = useState()
    const [bairro,         setBairro]        = useState()
    const [rua,            setRua]           = useState()
    const [numero,         setNumero]        = useState()
    const [tipoLocal,      setTipoLocal]     = useState() // id
    const [complemento,    setComplemento]   = useState()


    return (
        <div className={t02_orcamento.main}>
            
            <form action="" method="post">

                {/* FORMS */}
                <fieldset className={t02_orcamento.informacoescontato}>
                    <legend> Informações de contato </legend>
                    <Campo msg={"Nome completo"}   type={"text"}   name={"name"}        id={"iname"}        setValue={setNome}     />
                    <Campo msg={"CPF"}             type={"text"}   name={"cpf"}         id={"icpf"}         setValue={setCpf}      />
                    <Campo msg={"Email"}           type={"email"}  name={"email"}       id={"iemail"}       setValue={setEmail}    />
                    <Campo msg={"Celular"}         type={"number"} name={"phonenumber"} id={"iphonenumber"} setValue={setCelular}  />
                    <Campo msg={"Data nascimento"} type={"date"}   name={"borndate"}    id={"iborndate"}    setValue={setDataNasc} />
                    <Campo msg={"Endereço"}        type={"text"}   name={"address"}     id={"iaddress"}     setValue={setEndereco} />
                </fieldset>

                {/* FORMS */}
                <fieldset className={t02_orcamento.sobreevento}>
                    <legend> Sobre o evento </legend>
                    
                    {/* Exibe os pacotes de serviço disponíveis */} { pacotesServico &&
                    <Select
                        msg={"Nome do pacote"}
                        setValue={setPacote}
                        listaOpcoes={pacotesServico.map(registro => registro.nome)}
                        values={pacotesServico.map(registro => registro.id)}
                    />
                    }
                    <Campo msg={"Data do evento"}       type={"date"}   name={"data"}          id={"idata"}          setValue={setDataEvento}    />
                    <Campo msg={"Número de convidados"} type={"number"} name={"qtdconvidados"} id={"iqtdconvidados"} setValue={setQtdConvidados} />
                    <Campo msg={"Horário de início"}    type={"time"}   name={"horainicio"}    id={"ihorainicio"}    setValue={setHoraInicio}    />
                    <Campo msg={"Horário de término"}   type={"time"}   name={"horatermino"}   id={"ihoratermino"}   setValue={setHoraTermino}   /> 
                </fieldset>

                {/* FORMS */}
                <fieldset className={t02_orcamento.sobrelocalevento}>
                    <legend> Sobre o local do evento </legend>
                    <Campo msg={"Cep"}              type={"text"} name={"cep"}    id={"icep"}    setValue={setCep}       /> 
                    <Campo msg={"Nome do local"}    type={"text"} name={"local"}  id={"ilocal"}  setValue={setNomeLocal} /> 
                    <Campo msg={"Cidade"}           type={"text"} name={"cidade"} id={"icidade"} setValue={setCidade}    /> 
                    <Campo msg={"Bairro"}           type={"text"} name={"bairro"} id={"ibairro"} setValue={setBairro}    /> 
                    <Campo msg={"Rua / Logradouro"} type={"text"} name={"rua"}    id={"irua"}    setValue={setRua}       /> 
                    <Campo msg={"Número"}           type={"text"} name={"numero"} id={"inumero"} setValue={setNumero}    /> 
                    
                    {/* Exibe os tipos de local */} { tiposLocal &&
                    <Select
                        msg={"Tipo local"}
                        setValue={setTipoLocal}
                        listaOpcoes={tiposLocal.map(registro => registro.tipo)}
                        values={tiposLocal.map(registro => registro.id)}
                    />
                    }
                    <Campo msg={"Complemento"} type={"text"} name={"complemento"} id={"icomplemento"} setValue={setComplemento} /> 
                </fieldset>


            <Botao msg={"Próxima"} rota={"/Repertorio"} ativarEstilo={true}
                executarComando={() => {

                    // Obj do cliente
                    const infoCliente = {
                        "cpf"      : cpf,
                        "nome"     : nome,
                        "email"    : email,
                        "celular"  : celular,
                        "dataNasc" : dataNasc,
                        "endereco" : endereco
                    }

                    // String do local (sem tipoLocal ID)
                    const infoLocalEvento = `
                        ${cep},
                        ${nomeLocal},
                        ${cidade},
                        ${bairro},
                        ${rua},
                        ${numero},
                        ${complemento}
                    `

                    // Obj das informações da solicitação
                    const infoSolicitacao = {
                        "localEvento"       : infoLocalEvento,
                        "dataEvento"        : dataEvento,
                        "horarioInicio"     : horarioInicio,
                        "horarioTermino"    : horarioTermino,
                        "qtdConvidados"     : qtdConvidados,
                        "eOrcamento"        : "true",
                        "dataAprovacao"     : "",
                        "cliente"           : {"cpf" : cpf},
                        "pacoteServico"     : {"id"  : Number(pacote)},
                        "tipoLocal"         : {"id"  : Number(tipoLocal)},
                        "statusSolicitacao" : {"id"  : 1}
                    }

                    console.log("=========================================")
                    console.log("cpf ID -> " + cpf)
                    console.log("pacote ID -> " + pacote)
                    console.log("tipoLocal ID -> " + tipoLocal)
                    console.log("=========================================")

                    // Passa os dados para o arquivo Global.js //
                        passarDadosProJSGlobal(infoCliente, infoSolicitacao)
                    // Informações passadas pelo cliente (FORMS) //
                }}
            />

            </form>


            <img className={t02_orcamento.footerImagem} src={footerImg} alt="" />

        </div>
    )
}
export default T02_Orcamento;