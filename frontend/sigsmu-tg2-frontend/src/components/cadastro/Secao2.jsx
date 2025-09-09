// Estilos
import css from "./Secoes.module.css"
import "../../styles/globalStyles.css"

// Componentes
import Campo from "../forms/Campo";


function Secao2() {
    return (
        <fieldset className={css.main}>
            <legend>Endereço</legend>

            <div>
                <label htmlFor="">Rua</label>
                <Campo tipo={"text"}/>
            </div>

            <div>
                <label htmlFor="">Número</label>
                <Campo tipo={"text"} dica={"mudar para checkButton"}/>
            </div>

            <div>
                <label htmlFor="">Complemento</label>
                <Campo tipo={"text"}/>
            </div>

            <Campo tipo={"text"}/>
        </fieldset>
    )
}
export default Secao2;