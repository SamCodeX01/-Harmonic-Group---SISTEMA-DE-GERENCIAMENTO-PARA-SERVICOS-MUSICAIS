// Importações de estilos
import t04_bancoDeDados from "./CSS/t04_bancoDeDados.module.css"

// Importação de componentes
import Botao from "components/Botao.jsx"
import Radio from "components/Radio.jsx"

// Importação de componentes grandes
import HelpDoGestor from "../_componentes-grandes/cadastronobd/HelpDoGestor.jsx"

// Importação das funções CRUD
import Select from "pages_containers/telas-do-gestor/_componentes-grandes/cadastronobd/CRUD/Select.jsx"
import Insert from "pages_containers/telas-do-gestor/_componentes-grandes/cadastronobd/CRUD/Insert.jsx"
import Update from "pages_containers/telas-do-gestor/_componentes-grandes/cadastronobd/CRUD/Update.jsx"
import Delete from "pages_containers/telas-do-gestor/_componentes-grandes/cadastronobd/CRUD/Delete.jsx"

// Importações do React
import { useEffect, useState } from "react"


// Tela de BANCO DE DADOS - para que gestores consigam cadastrar novos serviços/músicas/meios de pagamento/etc
function T04_BancoDeDados() {



    // FALTA DESMARCAR (DESCOLORIR) OS BOTÕES NÃO MAIS SELECIONADOS
    // FALTA VALIDAR AS ENTRADAS PRO BANCO (DADOS + ID / DADOS / ID) - adicionar alerts específicos
    // CRIAR CAMPO SOMENTE PARA ID EM DELETE



    // Guarda a operação CRUD (evt)
    const [operacaoCRUD, setOperacaoCRUD] = useState({value: "insert"})

    // Guarda a tabela (evt) e seu obj de valores
    const [tabelaSelecionada, setTabelaSelecionada] = useState(null)
    const [objTabelaSelecionada, setObjTabelaSelecionada] = useState({msg_output: null})

    // Guarda o campo selecionado da tabela (evt)
    const [campoSelecionado, setCampoSelecionado] = useState(null)


    // Configura a mensagem a ser exibida no input do gestor e guarda sua resposta (input)
    const [mensagemInputGestor, setMensagemInputGestor] = useState()
    const [inputGestor, setInputGestor] = useState(null)


    // Configuração das tabelas e campos
    const tablePacoteServico = {
        nome: "PacoteServico",
        campos: ["id", "nome", "valor", "qtdMusicos", "descricao"],
        prefixo: "pac_",
        msg_output: "Pacotes de Serviço"
    }
    const tableInstrumento = {
        nome: "Instrumento",
        campos: ["id", "nome"],
        prefixo: "ins_",
        msg_output: "Instrumento"
    }
    const tableServico = {
        nome: "Servico",
        campos: ["id", "nome"],
        prefixo: "ser_",
        msg_output: "Tipo de Serviço"
    }
    const tableMeioPagamento = {
        nome: "MeioPagamento",
        campos: ["id", "nome"],
        prefixo: "pgt_",
        msg_output: "Meios de Pagamento"
    }
    const tableRepertorio = {
        nome: "Repertorio",
        campos: ["id", "musica", "artista", "genero", "tempo", "tocamos"],
        prefixo: "rep_",
        msg_output: "Repertório / Músicas"
    }
    const tableStatusSolicitacao = {
        nome: "StatusSolicitacao",
        campos: ["id", "situacao"],
        prefixo: "stt_",
        msg_output: "Status / Andamento"
    }
    const tableTipoLocal = {
        nome: "TipoLocal",
        campos: ["id", "nome"],
        prefixo: "tip_",
        msg_output: "Tipo de Local"
    }

    // Usado para percorrer e verificar o obj a ser utilizado
    const objTabelas = [
        tablePacoteServico,
        tableInstrumento,
        tableServico,
        tableMeioPagamento,
        tableRepertorio,
        tableStatusSolicitacao,
        tableTipoLocal
    ]


    // Executa sempre que a operação CRUD mudar
    useEffect(() => {

        // Reseta o campo para não dar erro
        setCampoSelecionado(null)
        setTabelaSelecionada(null)

            switch(operacaoCRUD.value) {
                case "insert": 
                    setMensagemInputGestor("Registro a ser INSERIDO:");
                    break;
                case "update": 
                    setMensagemInputGestor("Dado a ser ATUALIZADO:");
                    break;
                case "delete": 
                    setMensagemInputGestor("Registro a ser DELETADO:");
                    break;
            }
    }, [operacaoCRUD])


    // Executa sempre que a tabela selecionada mudar
    useEffect(() => {
        if (tabelaSelecionada) {

            const obj = objTabelas.find(table => table.nome === tabelaSelecionada.value)
            setObjTabelaSelecionada(obj)
            
            if (obj.campos.length === 2 && operacaoCRUD.value != "delete") {
                setCampoSelecionado({value: obj.prefixo + obj.campos[1]})
            } else if (operacaoCRUD.value != "delete") {
                setCampoSelecionado(null)
            } else {
                setCampoSelecionado({value: obj.prefixo + obj.campos[0]})
            }

        }
    }, [tabelaSelecionada])


    // Executa sempre que o campo selecionado mudar
    useEffect(() => {

        // PENSO EM ADICIONAR OS CAMPOS DA TABELA NA PARTE DO GESTOR

    }, [campoSelecionado])


    // Responsável por exibir os campos selecionáveis da tabela
    const montarCampos = () => {
        if (objTabelaSelecionada.msg_output != null) {

            const prefixo = objTabelaSelecionada.prefixo 
            const campos = objTabelaSelecionada.campos
            
            if (operacaoCRUD.value === "delete") {
                return <Botao msg={campos[0]} value={prefixo+campos[0]}/>
            } 
            
            return <>
                <Radio setSelecionado={setCampoSelecionado} name={"campo"} firstChecked >
                {
                    campos.map((campo, i) => {
                        if (campo !== "id")
                            return <Botao msg={campo} value={prefixo+campo} />
                    })
                }
                </Radio>
            </>
        }
    }


    return (
        <div className={t04_bancoDeDados.main}>

            {/* Local em que REGISTROS DO BANCO serão exibidos para o gestor */}
            <div className={t04_bancoDeDados.schema}>

                <div className={t04_bancoDeDados.txtVisualizar}>
                    <h1> Visualização da Tabela </h1>
                    <h2> (dados puxados do banco) </h2>
                </div>

                
                {/* CRUD_SELECT */} {tabelaSelecionada ?
                    <Select 
                        tabela={objTabelaSelecionada.nome} 
                        campos={objTabelaSelecionada.campos}
                        prefixo={objTabelaSelecionada.prefixo}
                        mostrarPrefixo={true}
                    />
                : <div> Selecione alguma tabela para vizualizá-la </div>}
                  
            </div> 


            {/* Local em que o gestor poderá alternar CADASTRO/ALTERAÇÃO/EXCLUSÃO de dados do banco */}
            <div className={t04_bancoDeDados.botoes}>
                <Radio setSelecionado={setOperacaoCRUD} name={"crud"} firstChecked={true}>
                    <Botao msg={"CADASTRAR"} rota={""} ativarEstilo={true} value={"insert"} />
                    <Botao msg={"ALTERAR"} rota={""} ativarEstilo={true} value={"update"} />
                    <Botao msg={"EXCLUIR"} rota={""} ativarEstilo={true} value={"delete"} />
                </Radio>
            </div>


            {/* Local em que as TABELAS serão exibidas para SELEÇÃO do gestor */}
            <div className={t04_bancoDeDados.seletorTabelas}>
                {
                    // Retorna cada tabela e exibe na tela
                    <Radio setSelecionado={setTabelaSelecionada} name={"table"}>
                    {
                        objTabelas.map((table, i) => {
                            return <Botao msg={table.msg_output} value={table.nome} />
                        })
                    }
                    </Radio>
                }
            </div>


            {/* Local em que a TABELA SELECIONADA e seus CAMPOS serão exibidos para o gestor */}
            <div className={t04_bancoDeDados.tabelaCampos} >
                {tabelaSelecionada ?
                    <div>

                        {/*       Exibe a tabela selecionada       */}
                        <Botao msg={objTabelaSelecionada.msg_output}/>

                        <section className={t04_bancoDeDados.campos}>                          
                            {montarCampos()}
                        </section>

                    </div>

                : <div> Nenhuma tabela selecionada </div> }
            </div>
            

            {/* Local em que o gestor poderá DAR INPUT de dados e manipular o banco */}
            <div className={t04_bancoDeDados.inputGestor}>

                <HelpDoGestor input={true} msg={mensagemInputGestor} setInput={setInputGestor} />

                <div>
                    <HelpDoGestor msg={"Nome da tabela:"} evento={tabelaSelecionada} />
                    
                    {/* BOTÃO EXECUTAR COMANDO */}
                    <button onClick={() => { 
                        const operacao = operacaoCRUD.value

                        if ( tabelaSelecionada && inputGestor && (campoSelecionado || operacao === "insert") ) {

                            switch (operacaoCRUD.value) {
                                case "insert":
                                    {/* CRUD_INSERT */} Insert(
                                        objTabelaSelecionada.nome,
                                        objTabelaSelecionada.campos,
                                        inputGestor
                                    )
                                    break

                                case "update": 
                                    {/* CRUD_UPDATE */} Update (
                                        objTabelaSelecionada.nome,
                                        campoSelecionado.value,
                                        inputGestor
                                    ) // ID puxado pelo input internamente
                                    break

                                case "delete": 
                                    {/* CRUD_DELETE */} Delete(
                                        objTabelaSelecionada.nome,
                                        inputGestor
                                    )
                                    break
                            }
                        } else {
                            if (!tabelaSelecionada)     alert("Falta selecionar a tabela!")
                            else if (!inputGestor)      alert("Falta informar o input a ser executado!")
                            else if (!campoSelecionado) alert("Falta selecionar o campo!")
                        }

                    }}> EXECUTAR COMANDO </button>
                </div>

                <HelpDoGestor 
                    msg={"Campo:"} 
                    evento={campoSelecionado}
                />

            </div>

        </div>
    )
}
export default T04_BancoDeDados;