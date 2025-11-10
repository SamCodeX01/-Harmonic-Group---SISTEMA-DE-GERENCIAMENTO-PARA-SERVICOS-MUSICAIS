import React, { useState } from "react";
import T09_Footer from "./T09_Footer";
import pacote01 from "../imagens_site/pacotes01.png"
import pacote02 from "../imagens_site/pacotes02.png"
import pacote03 from "../imagens_site/pacotes03.png"
import footer from "../imagens_site/footer.png"
// import t10_servicos from "./t10_servicos.module.css"
import servicosCss from "./t10_servicos.module.css"
import EventoItem from "../../components/EventoItem";

function T10_Servicos() {

     const pacotesCasamento = [
    {
      nome: "Harmonic Duo",
      descricao: "Formação para cerimônia de casamento composta por dois violinos e playback.",
      instrumentos: ["2 Violinos", "Playback"]
    },
    {
      nome: "Harmonic Trio",
      descricao: "Formação para cerimônia de casamento composta por dois violinos e um piano.",
      instrumentos: ["2 Violinos", "Piano"]
    },
    {
      nome: "Harmonic Allegro",
      descricao: "Formação para cerimônia de casamento composta por dois violinos, um piano e um vocalista.",
      instrumentos: ["2 Violinos", "Piano", "Vocalista"]
    },
    {
      nome: "Harmonic Adagio",
      descricao: "Formação para cerimônia de casamento composta por dois violinos, um piano, um vocalista, uma percussão e brinde.",
      instrumentos: ["2 Violinos", "Piano", "Vocalista", "Percussão", "Brinde Musical"]
    },
    {
      nome: "Harmonic Presto",
      descricao: "Formação para cerimônia de casamento composta por dois violinos, um piano, um vocalista, uma percussão, trompete triunfal e brinde.",
      instrumentos: ["2 Violinos", "Piano", "Vocalista", "Percussão", "Trompete Triunfal", "Brinde Musical"]
    },
    {
      nome: "Trompete Triunfal",
      descricao: "Momento que precede à entrada da noiva, onde trompetes tocam música triunfante antes da entrada.",
      instrumentos: ["Trompetes Triunfais"],
      observacao: "Pode ser adicionado a qualquer pacote"
    }
  ];

  const pacotesFestas = [
    {
      nome: "Plugados Harmonic 4",
      descricao: "Formação de banda para festas composta por guitarra ou violão, baixo, bateria e vocalista.",
      instrumentos: ["Guitarra/Violão", "Baixo", "Bateria", "Vocalista"]
    },
    {
      nome: "Harmonic 5",
      descricao: "Formação de banda para festas composta por guitarra ou violão, baixo, bateria, vocalista e teclado.",
      instrumentos: ["Guitarra/Violão", "Baixo", "Bateria", "Vocalista", "Teclado"]
    },
    {
      nome: "Harmonic 6",
      descricao: "Formação de banda para festas composta por guitarra ou violão, baixo, bateria, vocalista, teclado e saxofone.",
      instrumentos: ["Guitarra/Violão", "Baixo", "Bateria", "Vocalista", "Teclado", "Saxofone"]
    },
    {
      nome: "DJ",
      descricao: "Anime a sua festa com o nosso DJ, com músicas do momento a sua escolha. Surpreenda seus convidados.",
      instrumentos: ["DJ Profissional", "Equipamento Completo"]
    }
  ];

  const pacotesAcusticos = [
    {
      nome: "Acústico 3",
      descricao: "Formação de banda para festas composta por violão, percussão e vocalista.",
      instrumentos: ["Violão", "Percussão", "Vocalista"]
    },
    {
      nome: "Acústico 4",
      descricao: "Formação de banda para festas composta por violão, percussão, vocalista e teclado.",
      instrumentos: ["Violão", "Percussão", "Vocalista", "Teclado"]
    },
    {
      nome: "Acústico 5",
      descricao: "Formação de banda para festas composta por violão, percussão, baixo acústico, teclado e vocalista.",
      instrumentos: ["Violão", "Percussão", "Baixo Acústico", "Teclado", "Vocalista"]
    },
    {
      nome: "Acústico 6",
      descricao: "Formação de banda para festas composta por violão, percussão, baixo acústico, teclado, violino e vocalista.",
      instrumentos: ["Violão", "Percussão", "Baixo Acústico", "Teclado", "Violino", "Vocalista"]
    }
  ];
 
return(
    <div>
            {/* <img className={t10_servicos.imagemPacotes} src={pacote01} alt=""/>
            <img className={t10_servicos.imagemPacotes} src={pacote02} alt=""/>
            <img className={t10_servicos.imagemPacotes} src={pacote03} alt=""/>
            <img className={t10_servicos.imagemPacotes} src={footer} alt=""/> */}
             
    <div className={servicosCss.servicosContainer}>

      <div className={servicosCss.heroSection}>
        <div className={servicosCss.heroContent}>
          <h1 className={servicosCss.heroTitle}>Nossos Serviços</h1>
          <p className={servicosCss.heroSubtitle}>
            Descubra o pacote musical perfeito para tornar seu evento inesquecível
          </p>
        </div>
      </div>

      <div className={servicosCss.contentWrapper}>
        {/* Pacotes para Casamento */}
        <section className={servicosCss.packageSection}>
          <div className={servicosCss.sectionHeader}>
            <h2 className={servicosCss.sectionTitle}>Formações para Cerimônias de Casamento</h2>
            <p className={servicosCss.sectionDescription}>
              Independente da formação, todas elas executarão lindas músicas de qualidade, 
              a diferença é quanto mais instrumentos, mais cheia e bonita ficará a produção sonora.
            </p>
          </div>
          
          <div className={servicosCss.packagesGrid}>
            {pacotesCasamento.map((pacote, index) => (
              <div key={index} className={servicosCss.packageCard}>
                <div className={servicosCss.packageHeader}>
                  <h3 className={servicosCss.packageName}>{pacote.nome}</h3>
                </div>
                <div className={servicosCss.packageBody}>
                  <p className={servicosCss.packageDescription}>{pacote.descricao}</p>
                  <div className={servicosCss.instrumentsList}>
                    <h4 className={servicosCss.instrumentsTitle}>Instrumentos:</h4>
                    <ul className={servicosCss.instruments}>
                      {pacote.instrumentos.map((instrumento, idx) => (
                        <li key={idx} className={servicosCss.instrumentItem}>
                          🎵 {instrumento}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {pacote.observacao && (
                    <p className={servicosCss.observacao}>
                      <strong>Obs.:</strong> {pacote.observacao}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pacotes para Festas */}
        <section className={servicosCss.packageSection}>
          <div className={servicosCss.sectionHeader}>
            <h2 className={servicosCss.sectionTitle}>Formações para Festas</h2>
          </div>
          
          <div className={servicosCss.packagesGrid}>
            {pacotesFestas.map((pacote, index) => (
              <div key={index} className={servicosCss.packageCard}>
                <div className={servicosCss.packageHeader}>
                  <h3 className={servicosCss.packageName}>{pacote.nome}</h3>
                </div>
                <div className={servicosCss.packageBody}>
                  <p className={servicosCss.packageDescription}>{pacote.descricao}</p>
                  <div className={servicosCss.instrumentsList}>
                    <h4 className={servicosCss.instrumentsTitle}>Formação:</h4>
                    <ul className={servicosCss.instruments}>
                      {pacote.instrumentos.map((instrumento, idx) => (
                        <li key={idx} className={servicosCss.instrumentItem}>
                          🎵 {instrumento}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pacotes Acústicos */}
        <section className={servicosCss.packageSection}>
          <div className={servicosCss.sectionHeader}>
            <h2 className={servicosCss.sectionTitle}>Formações Acústicas</h2>
          </div>
          
          <div className={servicosCss.packagesGrid}>
            {pacotesAcusticos.map((pacote, index) => (
              <div key={index} className={servicosCss.packageCard}>
                <div className={servicosCss.packageHeader}>
                  <h3 className={servicosCss.packageName}>{pacote.nome}</h3>
                </div>
                <div className={servicosCss.packageBody}>
                  <p className={servicosCss.packageDescription}>{pacote.descricao}</p>
                  <div className={servicosCss.instrumentsList}>
                    <h4 className={servicosCss.instrumentsTitle}>Formação:</h4>
                    <ul className={servicosCss.instruments}>
                      {pacote.instrumentos.map((instrumento, idx) => (
                        <li key={idx} className={servicosCss.instrumentItem}>
                          🎵 {instrumento}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className={servicosCss.ctaSection}>
          <div className={servicosCss.ctaCard}>
            <h2 className={servicosCss.ctaTitle}>Não encontrou o que procurava?</h2>
            <p className={servicosCss.ctaText}>
              Entre em contato conosco para criar um pacote personalizado 
              que atenda perfeitamente às suas necessidades.
            </p>
            <button className={servicosCss.ctaButton}>
              Solicitar Orçamento Personalizado
            </button>
          </div>
        </div>
      </div>
    </div>
  );

    </div>
    )

}
export default T10_Servicos;



/*
https://www.casamentos.com.br/artigos/musicas-para-casamento-civil--c6417

Ordem de músicas clássicas para entrada de casamento

Para a entrada dos Pais e Padrinhos: Jesus Alegria dos Homens
Para a entrada do Noivo: Clarins de Roma
Anúncio da Noiva: Clarinada da Rainha ou a de Mahler
Entrada da Noiva: Marcha Nupcial de Mendelssohn
Entrada da Dama e Pajem com as alianças: Minueto de Bach em Sol Maior
Benção das Alianças (Católico): Ave Maria de Gounod Música de Louvor (Evangélico): Agnus Dei – Michael W.Smith
Assinaturas: Clair de Lune – Debussy
Cumprimentos dos Padrinhos: Nessum Dorma – Turandot
Saída dos Padrinhos: Con te Partiro – Andrea Bocelli
Saída do Casal: Nona Sinfonia de Beethoven – Ode à Alegria
*/
