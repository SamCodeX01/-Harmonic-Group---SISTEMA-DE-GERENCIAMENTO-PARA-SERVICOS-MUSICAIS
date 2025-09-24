// Importações do React
import React from "react";


// Componente que serve para TRANSFORMAR BOTÕES normais em radio (e outros elementos)
function Radio({children, setSelecionado, name, firstChecked=false}) {
    return (
        <>
            { // Pega cada child do próprio elemento
            React.Children.map(children, (child, i) => {

                // Retorna uma label e um input invisível
                return (
                    <div>
                    
                    <input 
                        type="radio"
                        name={name}
                        id={"i"+name+i}

                        // Recebe o valor do botão para si mesmo
                        value={child.props.value}

                        onChange={evt => {
                            if (evt.currentTarget.checked) {
                                // Retorna o evento (radio) para o pai
                                setSelecionado(evt.currentTarget)
                            }
                        }}

                        style={{display: "none"}}
                        defaultChecked={i === 0 && firstChecked}
                    />

                    <label htmlFor={"i"+name+i}> {child} </label>

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