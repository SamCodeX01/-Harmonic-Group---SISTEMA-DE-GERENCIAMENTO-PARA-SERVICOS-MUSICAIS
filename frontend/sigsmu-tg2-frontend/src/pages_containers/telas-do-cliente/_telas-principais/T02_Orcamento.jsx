// Importações de estilos
import t02_orcamento from "./CSS/t02_orcamento.module.css"

// Importações de componentes
import T09_Footer from '../../../site_do_sistema/components_site/T09_Footer'
import Botao from "../../../components/Botao";
import Campo from "../../../components/Campo";
import Select from "../../../components/Select";

import footerImg from "../../../site_do_sistema/imagens_site/footer.png"
import { useState } from "react";

// Importação dos serviços
import { adicionarCliente } from "../../../services/TelaOrcamento/ClienteService";


// Tela responsável por iniciar os FORMULÁRIOS DE ORÇAMENTO para o cliente
function T02_Orcamento() {

    const selectTipoLocal = [
        "Selecione um tipo",
        "Montanha",
        "Parque",
        "Igreja",
        "Campo de Futebol"
    ]

    // Informações de contato
    const [nome, setNome] = useState()
    const [cpf, setCpf] = useState()
    const [email, setEmail] = useState()
    const [celular, setCelular] = useState()
    const [dataNasc, setDataNasc] = useState()
    const [endereco, setEndereco] = useState()

    // Sobre o evento
    const [pacote, setPacote] = useState()
    const [dataEvento, setDataEvento] = useState()
    const [qtdConvidados, setQtdConvidados] = useState()
    const [horaInicio, setHoraInicio] = useState()
    const [horaTermino, setHoraTermino] = useState()

    // Sobre o local do evento
    const [cep, setCep] = useState()
    const [nomeLocal, setNomeLocal] = useState()
    const [cidade, setCidade] = useState()
    const [bairro, setBairro] = useState()
    const [rua, setRua] = useState()
    const [numero, setNumero] = useState()
    const [tipoLocal, setTipoLocal] = useState()
    const [complemento, setComplemento] = useState()

    return (
        <div className={t02_orcamento.main}>
            {/* <T01_Header/> */}
            
            
            <form action="" method="post">

                <fieldset className={t02_orcamento.informacoescontato}>
                    <legend>Informações de contato</legend>
                    <Campo msg={"Nome completo"}   type={"text"}   name={"name"}        id={"iname"}        setValue={setNome} />
                    <Campo msg={"CPF"}             type={"text"}   name={"cpf"}         id={"icpf"}         setValue={setCpf} />
                    <Campo msg={"Email"}           type={"email"}  name={"email"}       id={"iemail"}       setValue={setEmail} />
                    <Campo msg={"Celular"}         type={"number"} name={"phonenumber"} id={"iphonenumber"} setValue={setCelular} />
                    <Campo msg={"Data nascimento"} type={"date"}   name={"borndate"}    id={"iborndate"}    setValue={setDataNasc} />
                    <Campo msg={"Endereço"}        type={"text"}   name={"address"}     id={"iaddress"}     setValue={setEndereco} />
                </fieldset>

                <fieldset className={t02_orcamento.sobreevento}>
                    <legend>Sobre o evento</legend>
                    <Campo msg={"Nome do pacote"}       type={"text"}   name={"pacote"}        id={"ipacote"}        setValue={setPacote} />
                    <Campo msg={"Data do evento"}       type={"date"}   name={"data"}          id={"idata"}          setValue={setDataEvento} />
                    <Campo msg={"Número de convidados"} type={"number"} name={"qtdconvidados"} id={"iqtdconvidados"} setValue={setQtdConvidados} />
                    <Campo msg={"Horário de início"}    type={"time"}   name={"horainicio"}    id={"ihorainicio"}    setValue={setHoraInicio} />
                    <Campo msg={"Horário de término"}   type={"time"}   name={"horatermino"}   id={"ihoratermino"}   setValue={setHoraTermino} /> 
                </fieldset>

                <fieldset className={t02_orcamento.sobrelocalevento}>
                    <legend>Sobre o local do evento</legend>
                    <Campo msg={"Cep"}              type={"text"} name={"cep"}    id={"icep"}    setValue={setCep} /> 
                    <Campo msg={"Nome do local"}    type={"text"} name={"local"}  id={"ilocal"}  setValue={setNomeLocal} /> 
                    <Campo msg={"Cidade"}           type={"text"} name={"cidade"} id={"icidade"} setValue={setCidade} /> 
                    <Campo msg={"Bairro"}           type={"text"} name={"bairro"} id={"ibairro"} setValue={setBairro} /> 
                    <Campo msg={"Rua / Logradouro"} type={"text"} name={"rua"}    id={"irua"}    setValue={setRua} /> 
                    <Campo msg={"Número"}           type={"text"} name={"numero"} id={"inumero"} setValue={setNumero} /> 
                    
                    <Select
                        listaOpcoes={selectTipoLocal} 
                        setValue={setTipoLocal} 
                        label={"Tipo local"} 
                        selectLabel={"Locais"} 
                        firstGeneric 
                    />
                    <Campo msg={"Complemento"} type={"text"} name={"complemento"} id={"icomplemento"} setValue={setComplemento} /> 

                </fieldset>

            </form>

            <Botao msg={"Próxima"} rota={"/Repertorio"} ativarEstilo={true}
                // FUNFOU! dá pra passar o obj cliente como props para a próx tela
                executarComando={() => {
                    adicionarCliente({
                        "cpf"      : cpf,
                        "nome"     : nome,
                        "email"    : email,
                        "celular"  : celular,
                        "dataNasc" : dataNasc,
                        "endereco" : endereco
                    })
                }}
            />

            <img className={t02_orcamento.footerImagem} src={footerImg} alt="" />

        </div>
    )
}
export default T02_Orcamento;