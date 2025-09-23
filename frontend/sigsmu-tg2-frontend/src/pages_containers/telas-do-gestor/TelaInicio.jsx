// Importações de estilos
import styles from "./CSS/telainicio.module.css"

// Importações de componentes
import Lado from "../../components/_maiores/gestor/indicadores/Lado";

// Importações do React
import { useState } from "react";


// Tela de INÍCIO - para auxiliar o gestor com gráficos e análises de desempenho relativos a qualidade dos serviços prestados
function TelaInicio() {
    

    return (
        <div className={styles.main}>
            <Lado arrayMsg={["Receitas", "Meta de Receitas"]} />
            <Lado arrayMsg={["Despesas", "Meta de Despesas"]} />
        </div>
    )
}
export default TelaInicio;