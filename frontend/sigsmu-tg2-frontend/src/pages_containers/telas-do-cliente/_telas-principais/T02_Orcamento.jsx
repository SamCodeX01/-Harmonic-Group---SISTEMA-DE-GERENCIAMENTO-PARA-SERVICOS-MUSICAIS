// Importações de estilos
import t02_orcamento from "./CSS/t02_orcamento.module.css"

// Importações de componentes
import T09_Footer from '../../../site_do_sistema/components_site/T09_Footer'
import Botao from "../../../components/Botao";
import Campo from "../../../components/Campo";

import footerImg from "../../../site_do_sistema/imagens_site/footer.png"

// Tela responsável por iniciar os FORMULÁRIOS DE ORÇAMENTO para o cliente
function T02_Orcamento() {
    return (
        <div className={t02_orcamento.main}>
            {/* <T01_Header/> */}
            
            <form action="" method="post">

                <fieldset className={t02_orcamento.informacoescontato}>
                    <legend>Informações de contato</legend>
                    <Campo msg={"Nome completo"}   type={"text"}   name={"name"}        id={"iname"} />
                    <Campo msg={"CPF"}   type={"text"}   name={"cpf"}        id={"icpf"} />
                    <Campo msg={"Email"}           type={"email"}  name={"email"}       id={"iemail"} />
                    <Campo msg={"Celular"}         type={"number"} name={"phonenumber"} id={"iphonenumber"} />
                    <Campo msg={"Data nascimento"} type={"date"}   name={"borndate"}    id={"iborndate"} />
                    <Campo msg={"Endereço"}        type={"text"}   name={"address"}     id={"iaddress"} />
                </fieldset>

                <fieldset className={t02_orcamento.sobreevento}>
                    <legend>Sobre o evento</legend>
                    <Campo msg={"Nome do pacote"}       type={"text"}   name={"pacote"}        id={"ipacote"} />
                    <Campo msg={"Data do evento"}       type={"date"}   name={"data"}          id={"idata"} />
                    <Campo msg={"Número de convidados"} type={"number"} name={"qtdconvidados"} id={"iqtdconvidados"} />
                    <Campo msg={"Horário de início"}    type={"time"}   name={"horainicio"}    id={"ihorainicio"} />
                    <Campo msg={"Horário de término"}   type={"time"}   name={"horatermino"}   id={"ihoratermino"} /> 
                </fieldset>

                <fieldset className={t02_orcamento.sobrelocalevento}>
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

                    <section className={t02_orcamento.ultimo}>
                        <div className={t02_orcamento.tipolocal}>
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

                        <div className={t02_orcamento.complemento}>
                            <label htmlFor="icomplemento">Complemento</label>
                            <input type="text" name="complemento" id="icomplemento" />
                        </div>
                    </section>

                </fieldset>

            </form>

            <Botao msg={"Próxima"} rota={"/Repertorio"} ativarEstilo={true} />

            <img className={t02_orcamento.footerImagem} src={footerImg} alt="" />

              <T09_Footer/>

        </div>
    )
}
export default T02_Orcamento;