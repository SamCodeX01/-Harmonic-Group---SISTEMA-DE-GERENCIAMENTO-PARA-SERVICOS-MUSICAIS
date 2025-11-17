// Importações de estilos
import t02_inicio from "./CSS/t02_inicio.module.css"

// Importações de componentes
import Lado from "../_componentes-grandes/indicadores/Lado.jsx";


// Tela de INÍCIO - para auxiliar o gestor com gráficos e análises de desempenho relativos a qualidade dos serviços prestados
function T02_Inicio() {
    return (
        <div className={t02_inicio.main}>
            <Lado arrayMsg={["Receitas", "Meta de Receitas"]} />
            <Lado arrayMsg={["Despesas", "Meta de Despesas"]} />
        </div>
    )
}
export default T02_Inicio;