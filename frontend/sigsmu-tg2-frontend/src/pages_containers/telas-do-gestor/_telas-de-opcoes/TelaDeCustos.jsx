// Importações de estilos
import styles from "./CSS/teladecustos.module.css"

// Importações de componentes
import BotaoSimples from "../../../components/forms/BotaoSimples"
import Campo2 from "../../../components/forms/Campo2"
import Radio from "../../../components/forms/Radio"


// Tela de definição de CUSTOS para cada solicitação de serviço
function TelaDeCustos() {
    return (
        <div>
            <div className={styles.main}>

                <div className={styles.botoes}>
                    <Radio >
                        <BotaoSimples msg={"transporte"} />
                        <BotaoSimples msg={"músico"} />
                        <BotaoSimples msg={"RESUMO"} />
                    </Radio>
                </div>

                <div className={styles.transporte}>
                    <Campo2 msg={"Combustível"} />
                    <Campo2 msg={"Preço por litro"} />
                    <Campo2 msg={"Distância a percorrer"} />
                    <Campo2 msg={"Pedágio"} />
                    <Campo2 msg={"Consumo médio do carro"} />
                </div>

                <div className={styles.musico}>
                    <Campo2 msg={"Cache dos músicos"} />
                    <Campo2 msg={"Alimentação"} />
                    <Campo2 msg={"Aluguel de equipamentos"} />
                    <Campo2 msg={"Demonstração"} />
                    <Campo2 msg={"Passagem do músico"} />
                </div>

            </div>
        </div>
    )
}
export default TelaDeCustos;