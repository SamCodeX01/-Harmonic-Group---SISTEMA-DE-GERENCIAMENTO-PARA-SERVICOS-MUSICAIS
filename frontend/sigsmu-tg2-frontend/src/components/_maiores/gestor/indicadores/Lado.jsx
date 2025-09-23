import styles from "./CSS/lado.module.css"

function Lado({arrayMsg, outro="outro"}) {
    return (
        <section className={styles.main}>
            <div className={styles.esquerda}>
                {arrayMsg[0]}
                <div>
                    <div>1230</div>
                    <div className={styles.divPequena}>%</div>
                </div>

                {arrayMsg[1]}
                <div>
                    <div>860</div>
                    <div className={styles.divPequena}>%</div>
                </div>

                <div className={styles.grafico}>gráfico</div>
            </div>

            <div className={styles.direita}>
                <div></div>
                <div></div>
            </div>

            <div className={styles.baixo}>
                {outro}
            </div>
        </section>
    )
}
export default Lado;