// import t04_main from "./site_do_sistema/components_site/t04_main.module.css";
import t04_main from "./t04_main.module.css";
import arabescoEsquerdo from "../imagens_site/arabesco-esquerda-inferior.png"
import arabescoDireito from "../imagens_site/arabesco-direita-superior.png"

function T04_Main(){
   
    return(
        <div>
            <h1>Realize a sua festa com a gente!</h1>     
            <div className={t04_main.container}>

                <div>
                <img className={t04_main.arabescoEsquerdo} src={arabescoEsquerdo} alt="" srcset="" />
                 <img className={t04_main.arabescoDireito} src={arabescoDireito} alt="" srcset="" />
               </div>

                <div className={t04_main.cardsContainer}>
                    <div className={t04_main.cards}>x</div>
                    <div className={t04_main.cards}>x</div>
                    <div className={t04_main.cards}>x</div>
                    <div className={t04_main.cards}>x</div>
                    <div className={t04_main.cards}>x</div>
                    <div className={t04_main.cards}>x</div>
                </div>
               
               <div className={t04_main.container-arabescoDireito}>
                 <img className={t04_main.arabescoDireito} src={arabescoDireito} alt="" srcset="" />
               </div>
                
            </div>
        </div>
    )    
}
export default T04_Main;