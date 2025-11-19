// Importações de estilos
import t02_cadastro from "./CSS/t02_cadastro.module.css"

// Importações de componentes
import Campo from "components/Campo.jsx";

// Importações do CRUD API
import { adicionarMusico } from "services/Outras/Musico.js";

// Importações do React
import { useEffect, useState } from "react";


// Tela de CADASTRO DE USUÁRIOS - para que usuários se cadastrem no sistema como clientes/músicos/gestores.
function T02_Cadastro() {
    
    // Pega o empresa do radioButton para saber se é empresa ou não
    const [empresa, setEmpresa] = useState(false);

    // Dados de input do usuário
    const [cpf, setCpf]                     = useState("");
    const [nome, setNome]                   = useState("");
    const [dataNasc, setDataNasc]           = useState("");
    const [sexo, setSexo]                   = useState("");
    const [senha, setSenha]                 = useState("");
    const [checkSenha, setCheckSenha]       = useState("");
    const [senhaValidada, setSenhaValidada] = useState(false)
    const [celular, setCelular]             = useState("");
    const [email, setEmail]                 = useState("");
    const [endereco, setEndereco]           = useState(""); // string
    const [dataCadastro, setDataCadastro]   = useState("12-12-2012"); // new Date alguma coisa
    
    // Endereço
    const [cep, setCep]                     = useState("");
    const [estado, setEstado]               = useState("");
    const [cidade, setCidade]               = useState("");
    const [bairro, setBairro]               = useState("");
    const [rua, setRua]                     = useState("");
    const [numero, setNumero]               = useState("");
    const [complemento, setComplemento]     = useState("");
    const [referencia, setReferencia]       = useState("");
    

    // Quando clicarem em cadastrar...
    useEffect(() => {
        if (senhaValidada) {
            adicionarMusico({
                cpf          : cpf,
                nome         : nome,
                dataNasc     : dataNasc,
                sexo         : sexo,
                senha        : senha,
                celular      : celular,
                email        : email,
                endereco     : endereco,
                dataCadastro : dataCadastro
            })
        }
    }, [senhaValidada])


    return(
        <form action="url" method="POST" className={t02_cadastro.main}>
            {/* Muda o valor de empresa quando selecionado (useState) */}
            <input type="radio" name="radio"  id="pessoaFisica" defaultChecked onChange={evt => setEmpresa(!empresa)} />         
            <label htmlFor="pessoaFisica">Pessoa Física</label>

            {/* Muda o valor de empresa quando selecionado (useState) */}
            <input type="radio" name="radio" id="pessoaJuridica" onChange={evt => setEmpresa(!empresa)}/>
            <label htmlFor="pessoaJuridica">Pessoa Jurídica</label>
           
            {/* Renderiza se pessoa jurídica */}
            { empresa &&
                <fieldset>
                    <legend>Para empresas</legend>
                    <Campo msg={"Cnpj:"} type={"number"} name={"cnpj"} 
                    id={"icnpj"} placeholder={"Digite o cnpj da sua empresa"}/>

                    <Campo msg={"Inscrição Estadual:"} type={"number"} name={"inscricaoEstadual"} 
                    id={"iinscricaoEstadual"}  placeholder={"Digite a sua inscrição estadual"}/>

                    <Campo msg={"Razão Social:"} type={"text"} name={"razaoSocial"} 
                    id={"irazaoSocial"} placeholder={"Digite a razão social"}/>

                    <Campo msg={"Nome Fantasia:"} type={"text"} name={"nomeFantasia"} 
                    id={"inomeFantasia"} placeholder={"Digite o nome fantasia"}/>
                </fieldset>
            }

            {/* Renderiza se pessoa física */}
            { !empresa && 
                <fieldset>
                    <legend>Pessoa física</legend>
                    <Campo msg={"Cpf:"} type={"number"} name={"cpf"} 
                    id={"icpf"} placeholder={"Digite seu cpf"} setValue={setCpf} />
                </fieldset>
            }
               
            {/* Cadastro */}
            <fieldset>
                <legend>Cadastro</legend>
                <Campo msg={"Nome:"} type={"text"} name={"nome"} 
                id={"inome"} placeholder={"Digite o seu nome completo"} setValue={setNome} />

                <Campo msg={"Nascimento: "} type={"date"} name={"nascimento"} 
                id={"inascimento"} placeholder={"Digite o seu nome"} setValue={setDataNasc} />
           
                <label htmlFor="titulo">Qual o seu gênero?</label>
                <select onChange={evt => setSexo(evt.currentTarget.value)}>
                    <optgroup label="Titulo">
                        <option value={""}>            Selecione uma opção </option>
                        <option value={"Homem"}>       Homem </option>
                        <option value={"Mulher"}>      Mulher </option>
                        <option value={"Transgênero"}> Transgênero </option>
                        <option value={"Prefire não dizer"}>     Prefiro não dizer </option>
                        <option value={"Outro"}>       Outro </option>
                        <input type="text" />
                    </optgroup>
                </select>

                <Campo msg={"Senha: "} type={"password"} name={"senha"} 
                id={"isenha"} placeholder={"Crie uma senha"} setValue={setSenha} />

                <Campo msg={"Confirmar Senha: "} type={"password"} name={"senha2"} 
                id={"isenha2"} placeholder={"Verifique sua senha"} setValue={setCheckSenha} />
            </fieldset>
           
           {/* Contatos */}
            <fieldset>
                <legend>Contatos</legend>
                <Campo htmlFor={"celular"} msg={"Celular: "} type={"tel"} name={"celular"} 
                id={"celular"} placeholder={"Digite o seu celular"} setValue={setCelular} />

                <Campo htmlFor={"email"} msg={"E-mail: "} type={"email"} name={"email"} 
                id={"email"} placeholder={"Digite o seu e-mail"} setValue={setEmail} />
            </fieldset>

            {/* Endereço */}
            <fieldset>
                <legend>Endereço</legend>
                <Campo htmlFor={"cep"} msg={"CEP: "} type={"text"} name={"cep"} 
                id={"cep"} placeholder={"Digite o seu CEP"} setValue={setCep} />

                <Campo htmlFor={"estado"} msg={"Estado: "} type={"text"} name={"estado"} 
                id={"dataestado"} placeholder={"Digite o estado"} setValue={setEstado} />
                
                <Campo htmlFor={"cidade"} msg={"Cidade: "} type={"text"} name={"cidade"} 
                id={"cidade"} placeholder={"Digite a sua cidade"} setValue={setCidade} />
                
                <Campo htmlFor={"bairro"} msg={"Bairro: "} type={"text"} name={"bairro"} 
                id={"bairro"} placeholder={"Digite o seu bairro"} setValue={setBairro} />

                <Campo htmlFor={"rua"} msg={"Rua: "} type={"text"} name={"rua"} 
                id={"rua"} placeholder={"Digite o nome da rua"} setValue={setRua} />

                <Campo htmlFor={"numero"} msg={"Número: "} type={"text"} name={"numero"} 
                id={"numero"} placeholder={"Digite o número da rua"} setValue={setNumero} />

                <Campo htmlFor={"complemento"} msg={"Complemento: "} type={"text"} name={"complemento"} 
                id={"complemento"} placeholder={"Digite o complemento do endereço"} setValue={setComplemento} />

                <Campo htmlFor={"referencia"} msg={"Referência: "} type={"text"} name={"referencia"} 
                id={"referencia"} placeholder={"Digite o endereço de referência"} setValue={setReferencia} />
            </fieldset>

            <div 
                type="button"
                onClick={evt => {
                    if (senha === checkSenha) {
                        setSenhaValidada(true)

                        setEndereco(
                            cep + ", " +
                            estado + ", " +
                            cidade + ", " +
                            bairro + ", " +
                            rua + ", " +
                            numero + ", " +
                            complemento + ", " +
                            referencia
                        )

                    } else alert("Senhas não coincidem!")

                }}
            >ENVIAR</div>

            {/* Passa para a próxima tela */} 
            {/* <br/><br/> */}
            {/* <Link to="/TelaLogin">AQUI</Link> */}
        </form>
    )
}
export default T02_Cadastro;




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

