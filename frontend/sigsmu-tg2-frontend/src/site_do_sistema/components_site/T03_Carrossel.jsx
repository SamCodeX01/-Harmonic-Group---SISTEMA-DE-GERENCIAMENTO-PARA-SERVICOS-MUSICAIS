import React, {useState, useEffect} from "react";

import t03_carrossel from "./t03_carrossel.module.css";

import flores from "../imagens_site/flores.jpg"
import wedding from "../imagens_site/wedding.jpg"
import foto_capa from "../imagens_site/foto_capa.jpg"

function Carrossel(){
    const images = [flores,wedding,foto_capa];

    const [atual, setAtual] = useState(0);

    const nextSlide=()=>{
            setAtual((prev) => (prev + 1) % images.length);                   
        }
    const prevSlide =()=>{
        setAtual((prev) => (prev - 1 + images.length) % images.length);
    }    

    //AUTO-PLAY
    useEffect(() =>{
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [])


return(
    // <div >
    //     <div className={t03_carrossel.flores}><img src={flores} alt="" srcset="" /></div>
    // </div>

    <div className={t03_carrossel.container}>
        <div className={t03_carrossel.carrossel}>
            <img src={images[atual]} alt="slide" className="carrossel-imagem" /> 
            
            <button className={t03_carrossel["btn-prev"]} onClick={prevSlide}>&#10094;</button>
            <button className={t03_carrossel["btn-next"]} onClick={nextSlide}>&#10095;</button>
        </div>

        <div className={t03_carrossel.dots}>
            {images.map((_, index) =>(<span key={index} className={`dot ${index === atual? "active" : ""}`} onClick={() => setAtual(index)}></span>))}
        </div>
    </div>
);

}
export default Carrossel; 