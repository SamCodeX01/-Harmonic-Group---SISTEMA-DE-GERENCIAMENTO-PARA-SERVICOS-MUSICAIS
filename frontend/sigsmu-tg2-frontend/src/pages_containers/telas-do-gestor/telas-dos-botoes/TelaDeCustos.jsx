// Importações de estilos
import css from "./CSS/teladecustos.module.css"

// Importações de componentes
import Botao from "components/Botao.jsx"
import Campo from "components/Campo.jsx"
import Radio from "components/Radio.jsx"

// Importações da API (Axios)
import { definirCustoServico }         from "services/Outras/SolicitacaoServico.js"
import { dadosSolicitacaoSelecionada } from "services/_AUXILIAR/GlobalData.js"

// Importações do React
import { useEffect, useState } from "react"
import { useNavigate }         from "react-router-dom"


// Tela de definição de CUSTOS para cada solicitação de serviço
function TelaDeCustos() {
    const navigate = useNavigate()

    // Solicitação selecionada
    const solicitacao = dadosSolicitacaoSelecionada.get()
    
    // Muda o botão selecionado ao clique do usuário
    const [botaoSelecionado, setBotaoSelecionado] = useState()

    // Define se as divs serão mostradas ou não
    const [mostrarTransporte, setMostrarTransporte] = useState()
    const [mostrarMusico, setMostrarMusico]         = useState()


    const [combustivel, setCombustivel]                 = useState()
    const [precoLitro, setPrecoLitro]                   = useState()
    const [distancia, setDistancia]                     = useState()
    const [pedagio, setPedagio]                         = useState()
    const [consumoMedioVeiculo, setConsumoMedioVeiculo] = useState()
    const [cacheMusicos, setCacheMusicos]               = useState()
    const [alimentacao, setAlimentacao]                 = useState()
    const [aluguelEquipamentos, setAluguelEquipamentos] = useState()
    const [demonstracao, setDemonstracao]               = useState()
    const [passagemMusico, setPassagemMusico]           = useState()

    
    // Só executa quando o valor de botaoSelecionado mudar
    useEffect(() => {
        if (botaoSelecionado) {

            setMostrarTransporte(false)
            setMostrarMusico(false)

            switch (botaoSelecionado.id) {
                case "ibutton0":
                    setMostrarTransporte(true)
                    break
                case "ibutton1":
                    setMostrarMusico(true)
                    break
                case "ibutton2":
                    setMostrarTransporte(true)
                    setMostrarMusico(true)
                    break
                default: console.log("ERRO")
            }

        } else setMostrarTransporte(true)
    }, [botaoSelecionado])
    

    return (
        <div>
            <div className={css.main}>

                <div className={css.botoes}>
                    <Radio setSelecionado={setBotaoSelecionado} name={"button"} firstChecked={true}>
                        <Botao msg={"transporte"} />
                        <Botao msg={"músico"} />
                        <Botao msg={"RESUMO"} />
                    </Radio>
                </div>

                {mostrarTransporte && 
                    <div className={css.transporte}>
                        <Campo msg={"Combustível"}            setValue={setCombustivel}/>
                        <Campo msg={"Preço por litro"}        setValue={setPrecoLitro}/>
                        <Campo msg={"Distância a percorrer"}  setValue={setDistancia}/>
                        <Campo msg={"Pedágio"}                setValue={setPedagio}/>
                        <Campo msg={"Consumo médio do carro"} setValue={setConsumoMedioVeiculo}/>
                    </div>
                }

                {mostrarMusico && 
                    <div className={css.musico}>
                        <Campo msg={"Cache dos músicos"}       setValue={setCacheMusicos}/>
                        <Campo msg={"Alimentação"}             setValue={setAlimentacao}/>
                        <Campo msg={"Aluguel de equipamentos"} setValue={setAluguelEquipamentos}/>
                        <Campo msg={"Demonstração"}            setValue={setDemonstracao}/>
                        <Campo msg={"Passagem do músico"}      setValue={setPassagemMusico}/>
                    </div>
                }

                { botaoSelecionado?.id === "ibutton2" && 
                    <Botao
                        msg={"ENVIAR"}
                        executarComando={async () => {
                            try {
                                await definirCustoServico(solicitacao.id, {
                                    combustivel,
                                    precoLitro,
                                    distancia,
                                    pedagio,
                                    consumoMedioVeiculo,
                                    cacheMusicos,
                                    alimentacao,
                                    aluguelEquipamentos,
                                    demonstracao,
                                    passagemMusico
                                })

                                alert("Custo definido com sucesso!")
                                navigate("/Intranet/RotasGestor/SolicitacoesServico", {replace:true})
                            }
                            catch(erro) {
                                alert("Erro ao cadastrar custo! \nVolte a página e tente novamente sem recarregar")
                                console.log("Erro ao cadastrar custo: " + erro)
                            }
                        }}
                    />
                }

            </div>
        </div>
    )
}
export default TelaDeCustos;