import { useNavigate } from "react-router-dom";
import css from "./Botao.module.css"

function Botao({msg, estilo, rota}) {
    const navigate = useNavigate()

    return (
        <button className={`${css.main} ${estilo ? css.cores : ""}`}
        onClick={() => navigate(rota)}>
        {msg} </button>
    )
}
export default Botao;