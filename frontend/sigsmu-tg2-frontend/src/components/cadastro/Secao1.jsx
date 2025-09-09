// Estilos
import css from "./Secoes.module.css"
import "../../styles/globalStyles.css"

// Componentes
import Campo from "../forms/Campo";


function Secao1() {
    return (
        <fieldset className={css.main}>
            <legend>Dados</legend>

            <div>
                <label htmlFor="">Nome completo</label>
                <Campo tipo={"text"}/>
            </div>

            <div>
                <label htmlFor="">Como se identifica</label>
                <Campo tipo={"text"} dica={"mudar para checkButton"}/>
            </div>

            <div>
                <label htmlFor="">CPF/CNPJ</label>
                <Campo tipo={"text"}/>
            </div>

            <Campo tipo={"text"}/>

        </fieldset>
    )
}
export default Secao1;