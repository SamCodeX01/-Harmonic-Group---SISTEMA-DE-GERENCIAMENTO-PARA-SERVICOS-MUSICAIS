// Importações do React
import React from "react";


// Componente que serve para TRANSFORMAR BOTÕES normais em radio (e outros elementos)
function Radio({children, selecionado, setSelecionado, name, grupo=1, arrayValoresRadio=null, callbackValores=null}) {
    return (
        <>
            { // Pega cada child do próprio elemento
                React.Children.map(children, (child, i) => {

                    // Retorna uma label e um input invisível
                    return (
                        <>
                            <label htmlFor={"i"+name+i}>
                            {
                                // Clona a child para poder fazer alterações (child.props -> somente leitura)
                                React.cloneElement(child, {

                                    // Passa o style como parâmetro via props (o componente tem que ter a props)
                                    style: {
                                        background: selecionado === ("i"+name+i) ? "red" : ""
                                    }

                                    // style: teste
                                })
                            }
                            </label>

                            {/* Utiliza input radio para marcar somente um elemento */}
                            <input 
                                type="radio" 
                                name={name + grupo} 
                                id={"i"+name+i} 
                                value={arrayValoresRadio !== null ? arrayValoresRadio[i] : ""}

                                // retorna o evento pro pai
                                onChange={evt => {
                                    if (evt.currentTarget.checked) {
                                        setSelecionado(evt.currentTarget.id)
                                        callbackValores(evt.currentTarget.value)
                                    }
                                }}
                                style={{display: "none"}}
                            />
                        </>
                    )
                })
            }
        </>
    )
}
export default Radio;