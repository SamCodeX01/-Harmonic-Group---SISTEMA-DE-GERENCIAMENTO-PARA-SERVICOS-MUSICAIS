// Importações de estilos
import css from "./CSS/teladecustos.module.css"

// Importações de componentes
import Botao from "../../../components/Botao"
import Campo from "../../../components/Campo"
import Radio from "../../../components/Radio"


// Tela de definição de CUSTOS para cada solicitação de serviço
function TelaDeCustos() {
    return (
        <div>
            <div className={css.main}>

                <div className={css.botoes}>
                    <Radio >
                        <Botao msg={"transporte"} />
                        <Botao msg={"músico"} />
                        <Botao msg={"RESUMO"} />
                    </Radio>
                </div>

                <div className={css.transporte}>
                    <Campo labelName={"Combustível"} />
                    <Campo labelName={"Preço por litro"} />
                    <Campo labelName={"Distância a percorrer"} />
                    <Campo labelName={"Pedágio"} />
                    <Campo labelName={"Consumo médio do carro"} />
                </div>

                <div className={css.musico}>
                    <Campo labelName={"Cache dos músicos"} />
                    <Campo labelName={"Alimentação"} />
                    <Campo labelName={"Aluguel de equipamentos"} />
                    <Campo labelName={"Demonstração"} />
                    <Campo labelName={"Passagem do músico"} />
                </div>

            </div>
        </div>
    )
}
export default TelaDeCustos;