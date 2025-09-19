// Importações de estilos
import styles from "./botoessolicitacoesgestor.module.css"

// Importações de componentes
import RadioButton from "../forms/RadioButton";
import { useState } from "react";

function BotoesSolicitacoesGestor() {
    // const [estado, setEstado] = useState(isActive)

    const [botaoAtivo, setBotaoAtivo] = useState("iradio"+1)

    // const aux = [botaoAtivo, setBotaoAtivo]

    return (
        <div className={styles.main} onClick={evt => {evt.stopPropagation()}}>
            <RadioButton 
                id={1} 
                msg={"Atribuir Equipe Automático"} 
                checked={botaoAtivo} 
                isActive={true} 
                setChecked={setBotaoAtivo} 
            />

            <RadioButton 
                id={2} 
                msg={"Atribuir Equipe Manual"} 
                checked={botaoAtivo} 
                setChecked={setBotaoAtivo} 
            />

            <RadioButton 
                id={3} 
                msg={"Definir Custos"} 
                checked={botaoAtivo} 
                setChecked={setBotaoAtivo} 
            />

            <RadioButton 
                id={4} 
                msg={"Alterar Contrato"} 
                checked={botaoAtivo} 
                setChecked={setBotaoAtivo} 
            />

            <RadioButton 
                id={5} 
                msg={"Enviar Devolutiva"} 
                checked={botaoAtivo} 
                setChecked={setBotaoAtivo} 
            />

            <RadioButton 
                id={6} 
                msg={"Ver Mais"} 
                checked={botaoAtivo} 
                setChecked={setBotaoAtivo} 
            />

        </div>
    )
}
export default BotoesSolicitacoesGestor;