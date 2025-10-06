// import t04_main from "./site_do_sistema/components_site/t04_main.module.css";
import t04_main from "./t04_main.module.css";
import arabescoEsquerdo from "../imagens_site/arabesco-esquerda-inferior.png"
import arabescoDireito from "../imagens_site/arabesco-direita-superior.png"
import realizeAsuaFesta from "../imagens_site/realize-a-sua-festa.png"
import sobreOProdutor from "../imagens_site/sobre-o-produtor.png"
import queTalFazerParte from "../imagens_site/que-tal-fazer-parte.png"
import formacaoPersonalizada from "../imagens_site/formacao-personalizada.png"
import depoimentos from "../imagens_site/depoimentos.png"
import footer from "../imagens_site/footer.png"

function T04_Main(){
   



    return(
        <div>
            {/* <h1>Realize a sua festa com a gente!</h1>     
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
                
            </div> */}

                <img className={t04_main.telas} src={realizeAsuaFesta} alt="" />
                <img className={t04_main.telas} src={sobreOProdutor} alt="" />
                <img className={t04_main.telas} src={formacaoPersonalizada} alt="" />
                <img className={t04_main.telas} src={depoimentos} alt="" />
                <img className={t04_main.telas} src={queTalFazerParte} alt="" />
                <img className={t04_main.telas} src={footer} alt="" />
                <div className={t04_main.footer}><p>Copyright ©️ 2025. Harmonic Group. Todos os Direitos Reservados</p></div>

        </div>
    )    
}
export default T04_Main;