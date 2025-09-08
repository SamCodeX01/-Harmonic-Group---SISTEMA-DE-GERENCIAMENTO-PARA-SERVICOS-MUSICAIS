import css from "./Botao.module.css"

function Botao({valor, estilo}) {
    return (
        <input 
            type="button" 
            value={valor} 
            className={`${css.main} ${estilo ? css.cores : ""}`}
        />
    )
}
export default Botao;