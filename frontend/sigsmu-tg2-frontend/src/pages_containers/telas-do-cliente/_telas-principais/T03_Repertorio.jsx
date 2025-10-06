// Importações de estilos
import t03_repertorio from "./CSS/t03_repertorio.module.css"


function T03_Repertorio() {
    return (
        <div className={t03_repertorio.main}>
            
            <div>
                <h1>Repertório</h1>

                <label htmlFor="teste1">Pré definições</label> 
                <select id="teste1">
                    <option>Selecione o tipo de evento</option>

                    <optgroup label="Eventos">
                        <option>Casamento</option>
                        <option>Aniversário</option>
                        <option>Formatura</option>
                    </optgroup>

                </select>
                <span>esse campo faz aparecer os selects abaixo de acordo com a opção escolhida</span>
            </div>


            <div className={t03_repertorio.selects}>

                <label htmlFor="teste2">Entrada dos pais e parentes</label>
                <select id="teste2">
                    <option>Clique para escolher a música</option>

                    <optgroup label="Rock">
                        <option>musica1</option>
                        <option>musica2</option>
                        <option>musica3</option>
                    </optgroup>

                    <optgroup label="Sertanejo">
                        <option>musica1</option>
                        <option>musica2</option>
                        <option>musica3</option>
                    </optgroup>

                    <optgroup label="Pisadinha">
                        <option>musica1</option>
                        <option>musica2</option>
                        <option>musica3</option>
                    </optgroup>

                </select>
            </div>

            <div className={t03_repertorio.selects}>
                <label htmlFor="teste2">Entrada dos noivos</label>
                <select id="teste2">
                    <option>Clique para escolher a música</option>

                    <optgroup label="Rock">
                        <option>musica1</option>
                        <option>musica2</option>
                        <option>musica3</option>
                    </optgroup>

                    <optgroup label="Sertanejo">
                        <option>musica4</option>
                        <option>musica5</option>
                        <option>musica6</option>
                    </optgroup>

                    <optgroup label="Pisadinha">
                        <option>musica7</option>
                        <option>musica8</option>
                        <option>musica9</option>
                    </optgroup>

                </select>
            </div>
            
            <div className={t03_repertorio.selects}>

                <label htmlFor="teste2">Entrada da dama de honra</label>
                <select id="teste2">
                    <option>Clique para escolher a música</option>

                    <optgroup label="Rock">
                        <option>musica1</option>
                        <option>musica2</option>
                        <option>musica3</option>
                    </optgroup>

                    <optgroup label="Sertanejo">
                        <option>musica4</option>
                        <option>musica5</option>
                        <option>musica6</option>
                    </optgroup>

                    <optgroup label="Pisadinha">
                        <option>musica7</option>
                        <option>musica8</option>
                        <option>musica9</option>
                    </optgroup>

                </select>
            </div>


            <button className={t03_repertorio.button}>Adicionar mais momentos</button>


            <div>
                <label htmlFor="teste3">Observações:</label>
                <input type="text" name="obs" id="iobs" placeholder="Digite uma mensagem..."/>
            </div>


            <button>Solicitar Orçamento</button>

        </div>
    )
}
export default T03_Repertorio;