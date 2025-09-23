import css from "./CSS/lado.module.css"

function Lado({arrayMsg, outro="outro"}) {
    return (
        <section className={css.main}>

            <div className={css.esquerda}>
                {arrayMsg[0]}
                <div>
                    <div>1230</div>
                    <div className={css.divPequena}>%</div>
                </div>

                {arrayMsg[1]}
                <div>
                    <div>860</div>
                    <div className={css.divPequena}>%</div>
                </div>

                <div className={css.grafico}>gráfico</div>
            </div>


            <div className={css.direita}>
                <div></div>
                <div></div>
            </div>


            <div className={css.baixo}>
                {outro}
            </div>
            
        </section>
    )
}
export default Lado;