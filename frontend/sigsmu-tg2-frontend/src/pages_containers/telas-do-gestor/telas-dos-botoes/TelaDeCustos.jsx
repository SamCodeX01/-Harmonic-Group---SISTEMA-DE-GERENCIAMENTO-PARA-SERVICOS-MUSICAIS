// Importações de estilos
import css from "./CSS/teladecustos.module.css"

// Importações de componentes
import Botao from "../../../components/Botao"
import Campo from "../../../components/Campo"
import Radio from "../../../components/Radio"
import Radio2 from "../../../components/Radio2"
import { useEffect, useState } from "react"


// Tela de definição de CUSTOS para cada solicitação de serviço
function TelaDeCustos() {
    
    // Muda o botão selecionado ao clique do usuário
    const [botaoSelecionado, setBotaoSelecionado] = useState("ibutton0")
    const [botaoSelecionado2, setBotaoSelecionado2] = useState(null)

    // Define se as divs serão mostradas ou não
    const [mostrarTransporte, setMostrarTransporte] = useState()
    const [mostrarMusico, setMostrarMusico] = useState()

    
    // Só executa quando o valor de botaoSelecionado mudar
    useEffect(() => {
        setMostrarTransporte(false)
        setMostrarMusico(false)

        switch (botaoSelecionado) {
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
    }, [botaoSelecionado])
    

    return (
        <div>
            <div className={css.main}>

                <div className={css.botoes}>
                    <Radio selecionado={botaoSelecionado} setSelecionado={setBotaoSelecionado} name={"button"}>
                        <Botao msg={"transporte"} />
                        <Botao msg={"músico"} />
                        <Botao msg={"RESUMO"} />
                    </Radio>
                </div>

                {mostrarTransporte && 
                    <div className={css.transporte}>
                        <Campo labelName={"Combustível"} />
                        <Campo labelName={"Preço por litro"} />
                        <Campo labelName={"Distância a percorrer"} />
                        <Campo labelName={"Pedágio"} />
                        <Campo labelName={"Consumo médio do carro"} />
                    </div>
                }

                {mostrarMusico && 
                    <div className={css.musico}>
                        <Campo labelName={"Cache dos músicos"} />
                        <Campo labelName={"Alimentação"} />
                        <Campo labelName={"Aluguel de equipamentos"} />
                        <Campo labelName={"Demonstração"} />
                        <Campo labelName={"Passagem do músico"} />
                    </div>
                }

                <Radio2 setSelecionado={setBotaoSelecionado2} name={"teste"} >
                    <Botao msg={"TESTE"} value={7} />
                    <Botao msg={"TESTE"} value={8} />
                    <Botao msg={"TESTE"} value={9} />
                </Radio2>

                {/* {botaoSelecionado.value} */}
                {console.log("OAI -> " + botaoSelecionado.value)}

                {/* VER DEPOIS URGENTE!!! */}

            </div>
        </div>
    )
}
export default TelaDeCustos;