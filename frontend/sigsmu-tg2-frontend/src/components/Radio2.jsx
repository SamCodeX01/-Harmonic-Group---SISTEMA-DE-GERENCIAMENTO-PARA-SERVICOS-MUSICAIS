// Importações do React
import React from "react";


// Componente que serve para TRANSFORMAR BOTÕES normais em radio (e outros elementos)
function Radio({children, setSelecionado, name}) {
    return (
        <>
            { // Pega cada child do próprio elemento
                React.Children.map(children, (child, i) => {

                    // Retorna uma label e um input invisível
                    return (
                        <>
                            <input 
                                type="radio" 
                                name={name} 
                                id={"i"+name+i}
                                value={child.props.value}

                                // retorna o evento pro pai
                                onChange={evt => {
                                    if (evt.currentTarget.checked)
                                        // console.log("OAI -> " + child.props.value)
                                        setSelecionado(evt.currentTarget)
                                }}
                                style={{display: "none"}}
                            />

                            <label htmlFor={"i"+name+i}> {child} </label>

                            {/*        COLAR NO CSS PARA ALTERAR A COR DO BOTÃO SELECIONADO        */}
                            {/* .main input[type="radio"]:checked + label > div {background: red;} */}

                        </>
                    )
                })
            }
        </>
    )
}
export default Radio;