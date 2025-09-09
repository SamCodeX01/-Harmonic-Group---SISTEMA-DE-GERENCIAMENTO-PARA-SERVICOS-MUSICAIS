import css from "./Botao.module.css"

function Botao({valor, estilo, irPara=null}) {
    return (
        <input
            type="button" 
            value={valor} 
            className={`${css.main} ${estilo ? css.cores : ""}`}
            onClick={irPara}
        />
    )
}
export default Botao;