// Importações de estilos
import t02_orcamento from "./CSS/t02_orcamento.module.css"

// Importações de componentes
import T09_Footer from '../../../site_do_sistema/components_site/T09_Footer'
import Botao from "../../../components/Botao";
import Campo from "../../../components/Campo";
import Select from "../../../components/Select";

import footerImg from "../../../site_do_sistema/imagens_site/footer.png"
import { useEffect, useState } from "react";

// Importação dos serviços
import { listarTiposLocal } from "../../../services/TelaOrcamento/TipoLocalService";
import { listarPacotesServico } from "../../../services/TelaOrcamento/PacoteServicoService";
import { adicionarCliente } from "../../../services/TelaOrcamento/ClienteService";
import { adicionarSolicitacaoServico } from "../../../services/TelaOrcamento/SolicitacaoServicoService"

import getConfig from "./T03_repertorio_config";


// Tela responsável por iniciar os FORMULÁRIOS DE ORÇAMENTO para o cliente
function T02_Orcamento() {

    // Dados retornados do Banco
    const [tiposLocal,     setTiposLocal]     = useState(null)
    const [pacotesServico, setPacotesServico] = useState(null)


    // Retorna a LISTA DE TIPOS DE LOCAL do Banco
    const carregarTiposLocal = async () => {
        try {
            const response = await listarTiposLocal();
            setTiposLocal(response.data)

        } catch (erro) {
            console.error("Erro ao listar tipos de local:", erro);
        }
    };

    // Retorna a LISTA DE PACOTES do Banco
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


    // Informações passadas pelo cliente (FORMS)
    const [infoCliente,     setInfoCliente]     = useState(null) // obj ?
    const [infoLocalEvento, setInfoLocalEvento] = useState(null) // string
    const [infoSolicitacao, setInfoSolicitacao] = useState(null) // obj ?

    // Itens e valores de TipoLocal (passados pro Select)
    const [opcoesTipoLocal, setOpcoesTipoLocal] = useState()
    const [idsTipoLocal,    setIdsTipoLocal]    = useState()

    // Itens e valores de PacoteServico (passados pro Select)
    const [opcoesPacoteServico, setOpcoesPacoteServico] = useState()
    const [idsPacoteServico,    setIdsPacoteServico]    = useState()



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


    // Define as opções a serem exibidas para escolha do cliente e seus valores (ids)
    useEffect(() => {
        if (tiposLocal) {

            setOpcoesTipoLocal(
                tiposLocal.map(local => {
                    return local.tipo
                })
            )

            setIdsTipoLocal(
                tiposLocal.map(local => {
                    return local.id
                })
            )
        }
    }, [tiposLocal])

    // Define as opções a serem exibidas para escolha do cliente e seus valores (ids)
    useEffect(() => {
        if (pacotesServico) {

            setOpcoesPacoteServico(
                pacotesServico.map(pacote => {
                    return pacote.nome
                })
            )

            setIdsPacoteServico(
                pacotesServico.map(pacote => {
                    return pacote.id
                })
            )
        }
    }, [pacotesServico])


    useEffect(() => {

        // // AQUI!!!
        // console.log("infoCliente -> " + infoCliente.nome)

        // Guarda os valores no .js do repertório (esquema)
        getConfig([infoCliente, infoSolicitacao])
        
    }, [infoSolicitacao])

    return (
        <div className={t02_orcamento.main}>
            
            <form action="" method="post">

                <fieldset className={t02_orcamento.informacoescontato}>
                    <legend>Informações de contato</legend>
                    <Campo msg={"Nome completo"}   type={"text"}   name={"name"}        id={"iname"}        setValue={setNome}     />
                    <Campo msg={"CPF"}             type={"text"}   name={"cpf"}         id={"icpf"}         setValue={setCpf}      />
                    <Campo msg={"Email"}           type={"email"}  name={"email"}       id={"iemail"}       setValue={setEmail}    />
                    <Campo msg={"Celular"}         type={"number"} name={"phonenumber"} id={"iphonenumber"} setValue={setCelular}  />
                    <Campo msg={"Data nascimento"} type={"date"}   name={"borndate"}    id={"iborndate"}    setValue={setDataNasc} />
                    <Campo msg={"Endereço"}        type={"text"}   name={"address"}     id={"iaddress"}     setValue={setEndereco} />
                </fieldset>

                <fieldset className={t02_orcamento.sobreevento}>
                    <legend>Sobre o evento</legend>
                    
                    {/* <Campo msg={"Nome do pacote"}       type={"text"}   name={"pacote"}        id={"ipacote"}        setValue={setPacote}        /> */}

                    { opcoesPacoteServico &&
                    <Select
                        msg={"Nome do pacote"}
                        setValue={setPacote}
                        listaOpcoes={opcoesPacoteServico}
                        values={idsPacoteServico}
                    />
                    }

                    <Campo msg={"Data do evento"}       type={"date"}   name={"data"}          id={"idata"}          setValue={setDataEvento}    />
                    <Campo msg={"Número de convidados"} type={"number"} name={"qtdconvidados"} id={"iqtdconvidados"} setValue={setQtdConvidados} />
                    <Campo msg={"Horário de início"}    type={"time"}   name={"horainicio"}    id={"ihorainicio"}    setValue={setHoraInicio}    />
                    <Campo msg={"Horário de término"}   type={"time"}   name={"horatermino"}   id={"ihoratermino"}   setValue={setHoraTermino}   /> 
                </fieldset>

                <fieldset className={t02_orcamento.sobrelocalevento}>
                    <legend>Sobre o local do evento</legend>
                    <Campo msg={"Cep"}              type={"text"} name={"cep"}    id={"icep"}    setValue={setCep}       /> 
                    <Campo msg={"Nome do local"}    type={"text"} name={"local"}  id={"ilocal"}  setValue={setNomeLocal} /> 
                    <Campo msg={"Cidade"}           type={"text"} name={"cidade"} id={"icidade"} setValue={setCidade}    /> 
                    <Campo msg={"Bairro"}           type={"text"} name={"bairro"} id={"ibairro"} setValue={setBairro}    /> 
                    <Campo msg={"Rua / Logradouro"} type={"text"} name={"rua"}    id={"irua"}    setValue={setRua}       /> 
                    <Campo msg={"Número"}           type={"text"} name={"numero"} id={"inumero"} setValue={setNumero}    /> 
                    

                    { opcoesTipoLocal &&
                    <Select
                        msg={"Tipo local"}
                        setValue={setTipoLocal}
                        listaOpcoes={opcoesTipoLocal}
                        values={idsTipoLocal}
                    />
                    }
                    <Campo msg={"Complemento"} type={"text"} name={"complemento"} id={"icomplemento"} setValue={setComplemento} /> 
                </fieldset>

            </form>

            <Botao msg={"Próxima"} rota={"/Repertorio"} ativarEstilo={true}
                executarComando={() => {

                    // TESTE
                    // console.log("tipoLocal ID -> " + tipoLocal)
                    // console.log("pacote ID -> " + pacote)

                    // Obj do Cliente
                    setInfoCliente({
                        "cpf"      : cpf,
                        "nome"     : nome,
                        "email"    : email,
                        "celular"  : celular,
                        "dataNasc" : dataNasc,
                        "endereco" : endereco
                    })

                    // String do local (sem tipoLocal)
                    setInfoLocalEvento(`
                        ${cep},
                        ${nomeLocal},
                        ${cidade},
                        ${bairro},
                        ${rua},
                        ${numero},
                        ${complemento}
                    `)

                    // Obj das informações da solicitação
                    setInfoSolicitacao({
                        "localEvento"     : infoLocalEvento,
                        "dataEvento"      : dataEvento,
                        "horarioInicio"   : horarioInicio,
                        "horarioTermino"  : horarioTermino,
                        "qtdConvidados"   : qtdConvidados,
                        "dataSolicitacao" : "DD/MM/YYYY",
                        "eOrcamento"      : "true",
                        "dataAprovacao"   : "",
                        "cliente"         : {"cpf" : cpf},
                        "pacoteServico"   : {"id"  : pacote},
                        "tipoLocal"       : {"id"  : tipoLocal}
                    })
                }}
            />

            <img className={t02_orcamento.footerImagem} src={footerImg} alt="" />

        </div>
    )
}
export default T02_Orcamento;