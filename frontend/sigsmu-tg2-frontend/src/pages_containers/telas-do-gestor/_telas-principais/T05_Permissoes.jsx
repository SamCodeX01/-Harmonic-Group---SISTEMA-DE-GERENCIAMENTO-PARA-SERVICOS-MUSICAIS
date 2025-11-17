// Importações de estilos
import t05_permissoes from "./CSS/t05_permissoes.module.css"

// Importações do React
import { useState } from "react";


// Tela de PERMISSÕES - para gerenciamento de permissões de usuários do sistema
function T05_Permissoes() {
    const [numero, setNumero] = useState(0);

    function incrementar() {
        setNumero(prevP => prevP + 1); // ✅ forma correta
    };

    return (
        <div className={t05_permissoes.main}>
            Em desenvolvimento...
   
            <p>Valor atual: {numero}</p>
            <button onClick={incrementar}>Somar</button>
                
        </div>
    )
}
export default T05_Permissoes;