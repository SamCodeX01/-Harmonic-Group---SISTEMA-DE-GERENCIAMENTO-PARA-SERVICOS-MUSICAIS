import styles from "./tabelaGestor.module.css"

import Botao from "../forms/Botao";


function TabelaGestor({tabela, campos}) {
    console.log(tabela + " -> " + campos)

    return (
        <div>
            <Botao className={styles.main} msg={tabela} />
            <div className={styles.campos}>
                {
                    campos.map((campo, i) => {
                        if (i != 0)
                            return <Botao className={styles.main} msg={campos[0] + campo} estilo={true} selecionavel={true} />
                    })
                }
            </div>
        </div>
    )
}
export default TabelaGestor;