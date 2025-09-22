// Importações de estilos
import css from "./CSS/tabelagestor.module.css"

// Importações de componentes
// import Botao from "../forms/Botao";


// DESCRIÇÃO
function TabelaGestor({tabela, campos}) {
    // console.log(tabela + " -> " + campos)

    return (
        <div>
            {/* <Botao className={css.main} msg={tabela} />
            <div className={css.campos}>
                {
                    campos.map((campo, i) => {
                        if (i != 0)
                            return <Botao className={css.main} msg={campos[0] + campo} estilo={true} selecionavel={true} key={i} />
                    })
                }
            </div> */}
        </div>
    )
}
export default TabelaGestor;