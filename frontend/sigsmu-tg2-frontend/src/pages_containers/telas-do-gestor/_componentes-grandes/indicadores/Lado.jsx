// Importações de estilos
import lado from "./CSS/lado.module.css"


// Componente criado para replicar os lados da tela inicial do gestor
function Lado({arrayMsg, outro="outro"}) {
    return (
        <section className={lado.main}>

            <div className={lado.esquerda}>
                {arrayMsg[0]}
                <div>
                    <div>1230</div>
                    <div className={lado.divPequena}>%</div>
                </div>

                {arrayMsg[1]}
                <div>
                    <div>860</div>
                    <div className={lado.divPequena}>%</div>
                </div>

                <div className={lado.grafico}>gráfico</div>
            </div>


            <div className={lado.direita}>
                <div></div>
                <div></div>
            </div>


            <div className={lado.baixo}>
                {outro}
            </div>
            
        </section>
    )
}
export default Lado;