import site from "./Site.module.css"
import Botao from "../components/Botao";
import Rotas from "../routes/Rotas";

function Site(){

return(

    <div>

    <Botao msg={"hjh"} rota={"/TelaLogin"} />
       {/* <button onClick={()=><Rotas/>}>xxxxxxxx</button>      */}
   {/* <!-------------------HEADER-MOBILE------------------> */}

    <ul className="menu-links-mobile" id="menu-links-mobile">
        <li className="menu-links-mobile-li"><a href="#home">HOME</a></li>
        <li className="menu-links-mobile-li"><a href="#quem-somos">QUEM-SOMOS</a></li>
        <li className="menu-links-mobile-li"><a href="#servicos">SERVIÇOS</a></li>
        <li className="menu-links-mobile-li"><a href="#acessorios">ACESSÓRIOS</a></li>
        <li className="menu-links-mobile-li"><a href="#nossas-lojas">NOSSAS LOJAS</a></li>
        <li className="menu-links-mobile-li"><a href="#contato">CONTATO</a></li>
    </ul>

  <div className="logo-mobile" id="logotipo">
    <img id="logo-mobile" src="imagens/logo-mobbimax.png" alt="Logo da Página" srcset="" style={{backgroundColor: "white"}}/>
</div>
<div className="assistencia-tecnica2-mobile">
    <img id="assistencia-tecnica2-mobile" src="imagens/assistencia-tecnica2.jpg" alt=""/>
</div>


{/* <!--/*--------------------------HOME-MOBILE----------------------- */ }
{/* <!-- #00215E ****** */}
{/* #3B8EA5
#E9FFF9 ****** --> */}
    <main>
        <section id="home">
            <h2>Home</h2>
            <img id="imgHome" src="imagens/destaque-home7.jpg" alt=""/>
            <p className="home-texto">Seja bem-vindo ao site da Mobbimax! Somos uma empresa lider em assistência técnica de celular na região de Sorocaba. Aqui oferecemos serviços de reparo para celulares de todas as marcas e modelos. Nossa equipe altamente qualificada e experiente pode ajudar a resolver qualquer problema com o seu aparelho celular. Além disso, oferecemos serviços de manutenção preventiva para garantir que o seu celular esteja sempre funcionando corretamente.
            </p>
        </section>

{/* <!--/*--------------------------QUEM-SOMOS-MOBILE----------------------- */}
         <section id="quem-somos">
             <h2>Quem Somos</h2>
             <img id="img-quem-somos" src="imagens/destaque-home.jpg" alt=""/>
            <p className="quem-somos-texto">A Mobbimax foi fundada em 2012 com o objetivo de fornecer serviços de assistência técnica de alta qualidade para celulares. Desde então, nos tornamos líderes no mercado de assistência técnica de celular em Sorocaba e estamos comprometidos em fornecer serviços excepcionais aos nossos clientes. Ganhando destaque em um mercado altamente competitivo, nos destacamos pela inovação e qualidade em produtos e serviços.
            </p>
        </section>
            
{/* <!-- /*-------------------Missão, Visão e Valores-MOBILE----------------------- */ }

<section id="missao-visao-valores">
     <h2>Missão, Visão e Valores</h2>
            
            <ul className="MisVisVal">
                <li> A Mobbimax tem como missão fornecer soluções de tecnologia móvel que ajudem as empresas a crescer e prosperar. </li>
                <li> A visão da empresa é ser líder em soluções de tecnologia móvel e ser reconhecida como uma das melhores empresas do setor. </li>
                <li>A Mobbimax valoriza a inovação, a qualidade e  o compromisso com seus clientes</li>
            </ul>
</section>

        </main>
        </div>
)
}

export default Site;