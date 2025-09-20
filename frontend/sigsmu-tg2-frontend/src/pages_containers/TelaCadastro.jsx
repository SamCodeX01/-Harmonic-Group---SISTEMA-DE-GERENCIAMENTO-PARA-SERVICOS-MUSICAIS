// Importações de estilos
import styles from "./CSS/telacadastro.module.css"

// Importações de componentes
import Campo from "../components/forms/Campo";

// Importações do React
import { useState } from "react";


// Tela de CADASTRO DE USUÁRIOS - para que usuários se cadastrem no sistema como clientes/músicos/gestores.
function TelaCadastro() {

    // Pega o empresa do radioButton para saber se é empresa ou não
    const [empresa, setEmpresa] = useState(false);

    return(
        <form action="url" method="POST" className={styles.main}>
            {/* Muda o valor de empresa quando selecionado (useState) */}
            <input type="radio" name="radio"  id="pessoaFisica" defaultChecked onChange={evt => setEmpresa(!empresa)} />         
            <label htmlFor="pessoaFisica">Pessoa Física</label>

            {/* Muda o valor de empresa quando selecionado (useState) */}
            <input type="radio" name="radio" id="pessoaJuridica" onChange={evt => setEmpresa(!empresa)}/>
            <label htmlFor="pessoaJuridica">Pessoa Jurídica</label>
           
           {/* Renderiza o fieldset somente se empresa for igual a true */}
           {(empresa && 
                <fieldset>
                    <legend>Para empresas</legend>
                    <Campo nome={"CNPJ"} msg={"CNPJ:"} tipo={"number"} dica={"Digite o cnpj da sua empresa"}/>
                    <Campo nome={"inscricaoEstadual"} msg={"Inscrição Estadual:"} tipo={"number"} dica={"Digite a sua inscrição estadual"}/>
                    <Campo nome={"razaoSocial"} msg={"Razão Social:"} tipo={"text"} dica={"Digite a razão social"}/>
                    <Campo nome={"nomeFantasia"} msg={"Nome Fantasia:"} tipo={"text"} dica={"Digite o nome fantasia"}/>
                </fieldset>
            )}
               
            <fieldset>
                <legend>Cadastro</legend>

                <label htmlFor="nome">Nome: </label>
                <input type="text" name="nome" id="nome" placeholder="Digite o seu nome"></input>

                <label htmlFor="sobrenome">Sobrenome: </label>
                <input type="text" name="sobrenome" id="sobrenome" placeholder="Digite o seu sobrenome"></input>

                <label htmlFor="nascimento">Nascimento: </label>          
                <input type="date" name="nascimento" id="nascimento"/>            
           
                <label htmlFor="titulo">Qual o seu gênero?</label>
                <select>
                    <optgroup label="Titulo">
                        <option>Feminino</option>
                        <option>Masculino</option>
                        <option>Prefiro não dizer</option>
                        <option>Outro</option>
                        <input type="text" />
                    </optgroup>
                </select>
            </fieldset>
           
            <fieldset>
                <legend>Contatos</legend>

                <label htmlFor="telefone">Telefone</label>
                <input type="text" name="telefone" id="telefone" placeholder="Digite o seu telefone" />
                
                <label htmlFor="celular">Celular</label>
                <input type="text" name="celular" id="celular" placeholder="Digite o seu celular" />
                
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Digite o seu email" />
                
                <label htmlFor="dataCadastro">Data do Cadastro</label>
                <input type="text" name="dataCadastro" id="dataCadastro" placeholder="Digite a data do seu aniversário"></input>
            </fieldset>


            <fieldset>
                <legend>Endereço</legend>

                <label htmlFor="rua">Rua: </label>
                <input type="text" name="rua" id="rua" placeholder="Digite o nome da rua"></input>

                <label htmlFor="numero">Número: </label>
                <input type="text" name="numero" id="numero" placeholder="Digite o número da rua"></input>

                <label htmlFor="complemento">Complemento: </label>
                <input type="text" name="complemento" id="complemento" placeholder="Digite o complemento"></input>

                <label htmlFor="bairro">Bairro: </label>
                <input type="text" name="bairro" id="bairro" placeholder="Digite o bairro"></input>

                <label htmlFor="cep">CEP: </label>
                <input type="number" name="cep" id="cep" placeholder="Digite o cep"></input>

                <label htmlFor="cidade">Cidade: </label>
                <input type="text" name="cidade" id="cidade" placeholder="Digite a cidade"></input>

                <label htmlFor="estado">Estado: </label>
                <input type="text" name="estado" id="estado" placeholder="Digite o estado"></input>
                
                <label htmlFor="referencia">Referência: </label>
                <input type="text" name="referencia" id="referencia" placeholder="Digite uma refência"></input>
            </fieldset>

            <input type="password" name="senha" placeholder="Digite a sua senha" />
            <input type="email" name="senha" placeholder="Digite o seu email" />
            <button type="submit">ENVIAR</button>

            {/* Passa para a próxima tela */} 
            {/* <br/><br/> */}
            {/* <Link to="/TelaLogin">AQUI</Link> */}
        </form>
       
       
    )
}
export default TelaCadastro;




// HTML: Tags para Formulário


// Tag <form>:
// A tag <form> é a principal responsável por criar o formulário. Ela agrupa os campos e controla a submissão.


// <form action="url" method="post">
// </form>


// action: Define a URL para onde os dados do formulário serão enviados.


// method: Define o método de envio dos dados (normalmente GET ou POST).


// Tag <input>:
// A tag <input> é usada para criar campos de entrada, como texto, senha, botões, etc. A propriedade type define o tipo de campo.


// <input type="text" name="nome" placeholder="Digite seu nome">
// <input type="password" name="senha" placeholder="Digite sua senha">
// <input type="submit" value="Enviar">


// Alguns tipos de input comuns:


// text: Campo de texto.


// password: Campo para senha.


// email: Campo para email.


// submit: Botão para submeter o formulário.


// checkbox: Caixa de seleção.


// radio: Botões de opção.


// date: Campo para data.


// number: Campo para números.


// Tag <textarea>:
// Usada para criar campos de texto multilinha.


// <textarea name="mensagem" placeholder="Digite sua mensagem"></textarea>




// Tag <label>:
// Usada para associar um texto a um campo de entrada (como título ou descrição do campo).


// <label for="nome">Nome:</label>
// <input type="text" id="nome" name="nome">




// Tag <select> e <option>:
// Usada para criar listas suspensas.


// <label for="cidade">Cidade:</label>
// <select id="cidade" name="cidade">
//   <option value="rio">Rio de Janeiro</option>
//   <option value="sp">São Paulo</option>
//   <option value="bh">Belo Horizonte</option>
// </select>




// Tag <button>:
// Usada para criar botões. Pode ser usada para submeter o formulário ou para executar outras ações.


// <button type="submit">Enviar</button>




// Tag <fieldset> e <legend>:
// Usadas para agrupar e rotular conjuntos de campos dentro do formulário.


// <fieldset>
//   <legend>Informações Pessoais</legend>
//   <label for="nome">Nome:</label>
//   <input type="text" id="nome" name="nome">
// </fieldset>


// CSS: Propriedades para Estilização de Formulários


// Aqui estão algumas das propriedades mais comuns que você pode usar para estilizar formulários em CSS:


// Estilizando o formulário (<form>):


// padding: Controla o espaço interno do formulário.


// margin: Controla o espaço externo.


// width: Define a largura do formulário.


// form {
//   margin: 20px auto;
//   padding: 20px;
//   width: 300px;
//   background-color: #f4f4f4;
//   border-radius: 8px;
// }




// Estilizando os campos de entrada (<input>, <textarea>, etc.):


// width: Define a largura do campo.


// padding: Ajusta o preenchimento dentro do campo.


// border: Define a borda do campo.


// border-radius: Cria bordas arredondadas.


// font-size: Ajusta o tamanho da fonte.


// color: Define a cor do texto.


// background-color: Define a cor de fundo.


// box-sizing: Define como as bordas e o preenchimento afetam a largura total do campo.


// input, textarea, select {
//   width: 100%;
//   padding: 10px;
//   margin: 8px 0;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 16px;
//   box-sizing: border-box;
// }




// Estilizando o botão (<button> ou <input type="submit">):


// background-color: Define a cor de fundo do botão.


// color: Define a cor do texto no botão.


// border: Ajusta a borda do botão.


// padding: Ajusta o preenchimento dentro do botão.


// cursor: Mudança do cursor para indicar que o botão é clicável.


// border-radius: Cria bordas arredondadas no botão.


// button {
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;
// }


// button:hover {
//   background-color: #45a049;
// }




// Estilizando a etiqueta (<label>):


// display: Para organizar a posição do label.


// font-weight: Para ajustar a espessura da fonte.


// margin-bottom: Para adicionar espaçamento abaixo do label.


// label {
//   display: block;
//   margin-bottom: 8px;
//   font-weight: bold;
// }




// Espaçamento e Alinhamento:


// margin: Para adicionar espaço entre os elementos.


// padding: Para adicionar espaço dentro dos campos.


// display: block: Faz com que o elemento ocupe toda a largura disponível (útil para labels).


// display: inline-block: Faz com que os elementos fiquem na mesma linha, mas ainda possam ter padding e margin.


// .form-group {
//   margin-bottom: 15px;
// }


// input[type="submit"] {
//   width: 100%;
// }


// Exemplos de Estilização


// Ajustando o Formulário no Centro da Página:


// body {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   margin: 0;
// }


// form {
//   width: 100%;
//   max-width: 400px;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   background-color: #fff;
// }




// Estilizando um Campo de Seleção:


// select {
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   font-size: 16px;
//   width: 100%;
// }




// Essas são as principais tags e propriedades que você usará para criar e estilizar formulários em HTML e CSS. Se precisar de algo mais detalhado ou específico, é só avisar!

