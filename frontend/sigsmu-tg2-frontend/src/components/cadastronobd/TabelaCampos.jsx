// Importações de estilos
import styles from "./tabelaCampos.module.css"

function TabelaCampos(tabelaAdicionada) {
    return(
        <div className={styles.campos}>
            {
                // tabelaAdicionada.cu
                campos.map((campo, i) => {
                    if (i != 0)
                        return <Botao className={styles.main} msg={campos[0] + campo} estilo={true} key={i} />
                })
            }
        </div>
    )
}
export default TabelaCampos;