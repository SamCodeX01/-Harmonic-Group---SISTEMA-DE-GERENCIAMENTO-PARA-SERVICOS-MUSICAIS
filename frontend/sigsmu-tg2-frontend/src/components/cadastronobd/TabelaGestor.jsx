// Importações de estilos
import styles from "./CSS/tabelagestor.module.css"

// Importações de componentes
import Botao from "../forms/Botao";


// DESCRIÇÃO
function TabelaGestor({tabela, campos}) {
    // console.log(tabela + " -> " + campos)

    return (
        <div>
            <Botao className={styles.main} msg={tabela} />
            <div className={styles.campos}>
                {
                    campos.map((campo, i) => {
                        if (i != 0)
                            return <Botao className={styles.main} msg={campos[0] + campo} estilo={true} selecionavel={true} key={i} />
                    })
                }
            </div>
        </div>
    )
}
export default TabelaGestor;