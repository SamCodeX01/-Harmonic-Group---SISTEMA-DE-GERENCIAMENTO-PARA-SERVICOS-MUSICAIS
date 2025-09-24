// Importações de estilos
import css from "./CSS/telaorcamento.module.css"

// Importações de componentes
import Botao from "../../../components/Botao";


// Tela responsável por iniciar os FORMULÁRIOS DE ORÇAMENTO para o cliente
function TelaOrcamento() {
    return (
        <div className={css.main}>
            
            <form action="" method="post">

                <fieldset>
                    <legend>Informações de contato</legend>

                    <div>
                        <label htmlFor="iname">Nome completo</label>
                        <input type="text" name="name" id="iname" />
                    </div>
                    
                    <div>
                        <label htmlFor="iemail">Email</label>
                        <input type="email" name="email" id="iemail" />
                    </div>
                    
                    <div>
                        <label htmlFor="iphonenumber">Celular</label>
                        <input type="number" name="phonenumber" id="iphonenumber" />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Sobre o evento</legend>

                    <div>
                        <label htmlFor="ipacote">Nome do pacote</label>
                        <input type="text" name="pacote" id="ipacote" />
                    </div>
                    
                    <div>
                        <label htmlFor="idata">Data do evento</label>
                        <input type="date" name="data" id="idata" />
                    </div>
                    
                    <div>
                        <label htmlFor="iqtdconvidados">Número de convidados</label>
                        <input type="number" name="qtdconvidados" id="iqtdconvidados" />
                    </div>

                    <div>
                        <label htmlFor="ihorainicio">Horário de início</label>
                        <input type="time" name="horainicio" id="ihorainicio" />
                    </div>

                    <div>
                        <label htmlFor="ihoratermino">Horário de término</label>
                        <input type="time" name="horatermino" id="ihoratermino" />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Sobre o local do evento</legend>

                    <div>
                        <label htmlFor="icep">Cep</label>
                        <input type="text" name="cep" id="icep" />
                    </div>
                    
                    <div>
                        <label htmlFor="ilocal">Nome do local</label>
                        <input type="text" name="local" id="ilocal" />
                    </div>
                    
                    <div>
                        <label htmlFor="icidade">Cidade</label>
                        <input type="text" name="cidade" id="icidade" />
                    </div>

                    <div>
                        <label htmlFor="ibairro">Bairro</label>
                        <input type="text" name="bairro" id="ibairro" />
                    </div>
                    
                    <div>
                        <label htmlFor="irua">Rua / Logradouro</label>
                        <input type="text" name="rua" id="irua" />
                    </div>
                    
                    <div>
                        <label htmlFor="inumero">Número</label>
                        <input type="text" name="numero" id="inumero" />
                    </div>

                    <section className={css.ultimo}>
                        <div className={css.tipolocal}>
                            <label htmlFor="iselect">Tipo local</label>
                            <select id="iselect">
                                <option>Selecione um tipo</option>
                                <optgroup label="Locais">
                                    <option>Montanha</option>
                                    <option>Parque</option>
                                    <option>Igreja</option>
                                    <option>Campo de Futebol</option>
                                </optgroup>
                            </select>
                        </div>

                        <div className={css.complemento}>
                            <label htmlFor="icomplemento">Complemento</label>
                            <input type="text" name="complemento" id="icomplemento" />
                        </div>
                    </section>

                </fieldset>

            </form>

            <Botao msg={"Próxima"} rota={"/RotasCliente/Repertorio"} estilo={true} />

        </div>
    )
}
export default TelaOrcamento;