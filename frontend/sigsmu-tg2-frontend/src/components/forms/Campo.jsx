import css from "./Campo.module.css"

function Campo({nome, msg, tipo, dica}) {
    return (
        <div>
            <label htmlFor={nome}> {msg} </label>
            <input 
                type={tipo} 
                name={nome} 
                placeholder={dica} 
                className={css.main}
            />
        </div>
    )
}
export default Campo;