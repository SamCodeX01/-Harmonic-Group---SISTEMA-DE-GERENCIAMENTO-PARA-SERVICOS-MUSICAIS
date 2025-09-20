// Importações do React
import React from "react";


// Componente que serve para TRANSFORMAR BOTÕES normais em radio
function Radio({children, selecionado, setSelecionado, name, grupo=1}) {
    return (
        <>
            { // Pega cada child do próprio elemento
            React.Children.map(children, (child, i) => {

                // Retorna uma label e um input invisível
                return (
                    <>
                        <label htmlFor={"i"+name+i}>
                        {
                            // Clone a child para poder fazer alterações (child.props -> somente leitura)
                            React.cloneElement(child, {

                                // Passa o style como parâmetro via props (o componente tem que ter a props)
                                style: {
                                    background: selecionado === ("i"+name+i) ? "red" : ""
                                }
                            })
                        }
                        </label>

                        {/* Utiliza input radio para marcar somente um elemento */}
                        <input 
                            type="radio" 
                            name={grupo} 
                            id={"i"+name+i} 

                            onChange={evt => {
                                if (evt.currentTarget.checked)
                                    setSelecionado(evt.currentTarget.id)
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