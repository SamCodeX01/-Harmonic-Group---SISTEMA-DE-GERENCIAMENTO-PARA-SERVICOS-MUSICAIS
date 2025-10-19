// Importações do React
import React from "react";


// Componente que serve para TRANSFORMAR BOTÕES normais em radio (e outros elementos)
function Radio({children, setSelecionado, name, firstChecked=false}) {
    let esseBotao = null
    let id = null
    
    return (
        <>
            { // Pega cada child do próprio elemento
            React.Children.map(children, (child, i) => {
                id = "i"+name+i

                // Retorna uma label e um input invisível
                return (
                    <div>
                        <input 
                            type="radio"
                            name={name}
                            id={id}

                            // Recebe o valor do botão para si mesmo
                            value={child ? child.props.value : ""}

                            style={{display: "none"}}
                            defaultChecked={i === 0 && firstChecked}

                            onChange={evt => {
                                child.onChange
                                esseBotao = evt.currentTarget

                                if (esseBotao.checked) {
                                    // console.log("botão selecionado -> " + (esseBotao.checked ? esseBotao.id : ""))

                                    // Retorna o evento (radio checked) para o pai
                                    setSelecionado(esseBotao)
                                }
                            }}

                            
                            // checked={selecionado && selecionado === esseBotao ? true : false}
                        />

                        {/* Essa child é o componente <Botao/> que é uma div */}
                        <label htmlFor={id}> {child} </label>
                        {/* Aponta para o input[type="radio"] através da label */}


                        {/*   COLAR NO CSS GLOBAL PARA ALTERAR A COR DOS BOTÕES SELECIONADOS   */}
                        {/* .main input[type="radio"]:checked + label > div {background: red;} */}

                    </div>
                )
            })
            }
        </>
    )
}
export default Radio;