// Importações de estilos
import css from "./CSS/teladecustos.module.css"

// Importações de componentes
import Botao from "../../../components/Botao"
import Campo from "../../../components/Campo"
import Radio from "../../../components/Radio"

// Importações do React
import { useEffect, useState } from "react"


// Tela de definição de CUSTOS para cada solicitação de serviço
function TelaDeCustos() {
    
    // Muda o botão selecionado ao clique do usuário
    const [botaoSelecionado, setBotaoSelecionado] = useState()

    // Define se as divs serão mostradas ou não
    const [mostrarTransporte, setMostrarTransporte] = useState()
    const [mostrarMusico, setMostrarMusico] = useState()
    
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

            </div>
        </div>
    )
}
export default TelaDeCustos;