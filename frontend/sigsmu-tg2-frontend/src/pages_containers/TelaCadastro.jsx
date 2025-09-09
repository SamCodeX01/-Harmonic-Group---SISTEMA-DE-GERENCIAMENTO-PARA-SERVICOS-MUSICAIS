import "../styles/globalStyles.css"
import css from "./TelaCadastro.module.css"

import Secao1 from "../components/cadastro/Secao1.jsx";
import Secao2 from "../components/cadastro/Secao2.jsx";


function TelaCadastro() {
    return (
        <div>
            <form action="post">
                <Secao1/>
                <Secao2/>
            </form>
        </div>
    )
}
export default TelaCadastro;