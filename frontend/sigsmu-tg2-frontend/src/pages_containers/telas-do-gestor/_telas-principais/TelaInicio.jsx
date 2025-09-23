// Importações de estilos
import css from "./CSS/telainicio.module.css"

// Importações de componentes
import Lado from "../_componentes-grandes/indicadores/Lado";


// Tela de INÍCIO - para auxiliar o gestor com gráficos e análises de desempenho relativos a qualidade dos serviços prestados
function TelaInicio() {
    

    return (
        <div className={css.main}>
            <Lado arrayMsg={["Receitas", "Meta de Receitas"]} />
            <Lado arrayMsg={["Despesas", "Meta de Despesas"]} />
        </div>
    )
}
export default TelaInicio;