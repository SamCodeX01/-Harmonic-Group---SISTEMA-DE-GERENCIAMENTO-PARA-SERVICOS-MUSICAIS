import css from "./Campo.module.css"

function Campo({tipo, nome, dica}) {
    return (
        <input 
            type={tipo} 
            name={nome} 
            placeholder={dica} 
            className={css.main}
        />
    )
}
export default Campo;