// Importações de estilos
// import tabelagestor from "./CSS/tabelagestor.module.css"

// Importações de componentes
// import Botao from "../forms/Botao";


// DESCRIÇÃO
function TabelaGestor({tabela, campos}) {
    // console.log(tabela + " -> " + campos)

    return (
        <div>
            {/* <Botao className={tabelagestor.main} msg={tabela} />
            <div className={tabelagestor.campos}>
                {
                    campos.map((campo, i) => {
                        if (i != 0)
                            return <Botao className={tabelagestor.main} msg={campos[0] + campo} ativarEstilo={true} selecionavel={true} key={i} />
                    })
                }
            </div> */}
        </div>
    )
}
export default TabelaGestor;