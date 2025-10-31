// components/SejaParceiro.jsx
import React from 'react';
import sejaParceiroCss from './t13_SejaParceiro.module.css';

const SejaParceiro = () => {
  return (
    <div className={sejaParceiroCss.parceiroContainer}>
      <div className={sejaParceiroCss.heroSection}>
        <div className={sejaParceiroCss.heroContent}>
          <h1 className={sejaParceiroCss.heroTitle}>Seja um Parceiro Harmonic</h1>
          <p className={sejaParceiroCss.heroSubtitle}>
            Junte-se à nossa rede de músicos talentosos e faça parte dos eventos mais especiais
          </p>
        </div>
      </div>

      <div className={sejaParceiroCss.contentWrapper}>
        <div className={sejaParceiroCss.benefitsSection}>
          <h2 className={sejaParceiroCss.sectionTitle}>Por que ser um parceiro Harmonic?</h2>
          
          <div className={sejaParceiroCss.benefitsGrid}>
            <div className={sejaParceiroCss.benefitCard}>
              <div className={sejaParceiroCss.benefitIcon}>💰</div>
              <h3 className={sejaParceiroCss.benefitTitle}>Remuneração Justa</h3>
              <p className={sejaParceiroCss.benefitText}>
                Pagamentos competitivos e transparentes para todos os nossos músicos parceiros.
              </p>
            </div>

            <div className={sejaParceiroCss.benefitCard}>
              <div className={sejaParceiroCss.benefitIcon}>📅</div>
              <h3 className={sejaParceiroCss.benefitTitle}>Agenda Flexível</h3>
              <p className={sejaParceiroCss.benefitText}>
                Você escolhe quando e onde quer tocar, de acordo com sua disponibilidade.
              </p>
            </div>

            <div className={sejaParceiroCss.benefitCard}>
              <div className={sejaParceiroCss.benefitIcon}>🎵</div>
              <h3 className={sejaParceiroCss.benefitTitle}>Eventos Diversificados</h3>
              <p className={sejaParceiroCss.benefitText}>
                Participe de casamentos, eventos corporativos, festas e muito mais.
              </p>
            </div>

            <div className={sejaParceiroCss.benefitCard}>
              <div className={sejaParceiroCss.benefitIcon}>🤝</div>
              <h3 className={sejaParceiroCss.benefitTitle}>Rede Profissional</h3>
              <p className={sejaParceiroCss.benefitText}>
                Conecte-se com outros músicos talentosos e expanda sua rede de contatos.
              </p>
            </div>
          </div>
        </div>

        <div className={sejaParceiroCss.requirementsSection}>
          <h2 className={sejaParceiroCss.sectionTitle}>Requisitos para Parceria</h2>
          
          <div className={sejaParceiroCss.requirementsList}>
            <div className={sejaParceiroCss.requirementItem}>
              <span className={sejaParceiroCss.requirementNumber}>1</span>
              <div className={sejaParceiroCss.requirementContent}>
                <h3 className={sejaParceiroCss.requirementTitle}>Experiência Comprovada</h3>
                <p className={sejaParceiroCss.requirementText}>
                  Mínimo de 2 anos de experiência profissional na sua área musical.
                </p>
              </div>
            </div>

            <div className={sejaParceiroCss.requirementItem}>
              <span className={sejaParceiroCss.requirementNumber}>2</span>
              <div className={sejaParceiroCss.requirementContent}>
                <h3 className={sejaParceiroCss.requirementTitle}>Instrumento Próprio</h3>
                <p className={sejaParceiroCss.requirementText}>
                  Possuir instrumento próprio e em bom estado de conservação.
                </p>
              </div>
            </div>

            <div className={sejaParceiroCss.requirementItem}>
              <span className={sejaParceiroCss.requirementNumber}>3</span>
              <div className={sejaParceiroCss.requirementContent}>
                <h3 className={sejaParceiroCss.requirementTitle}>Disponibilidade</h3>
                <p className={sejaParceiroCss.requirementText}>
                  Flexibilidade para ensaios e eventos principalmente aos finais de semana.
                </p>
              </div>
            </div>

            <div className={sejaParceiroCss.requirementItem}>
              <span className={sejaParceiroCss.requirementNumber}>4</span>
              <div className={sejaParceiroCss.requirementContent}>
                <h3 className={sejaParceiroCss.requirementTitle}>Profissionalismo</h3>
                <p className={sejaParceiroCss.requirementText}>
                  Comprometimento, pontualidade e postura profissional em todos os eventos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={sejaParceiroCss.applicationSection}>
          <div className={sejaParceiroCss.applicationCard}>
            <h2 className={sejaParceiroCss.applicationTitle}>Candidate-se Agora</h2>
            <p className={sejaParceiroCss.applicationText}>
              Preencha o formulário abaixo e junte-se à nossa equipe de músicos parceiros
            </p>
            
            <form className={sejaParceiroCss.applicationForm}>
              <div className={sejaParceiroCss.formRow}>
                <div className={sejaParceiroCss.formGroup}>
                  <label className={sejaParceiroCss.formLabel}>Nome Completo</label>
                  <input type="text" className={sejaParceiroCss.formInput} />
                </div>
                <div className={sejaParceiroCss.formGroup}>
                  <label className={sejaParceiroCss.formLabel}>Email</label>
                  <input type="email" className={sejaParceiroCss.formInput} />
                </div>
              </div>

              <div className={sejaParceiroCss.formRow}>
                <div className={sejaParceiroCss.formGroup}>
                  <label className={sejaParceiroCss.formLabel}>Telefone</label>
                  <input type="tel" className={sejaParceiroCss.formInput} />
                </div>
                <div className={sejaParceiroCss.formGroup}>
                  <label className={sejaParceiroCss.formLabel}>Instrumento Principal</label>
                  <select className={sejaParceiroCss.formSelect}>
                    <option value="">Selecione...</option>
                    <option value="violino">Violino</option>
                    <option value="viola">Viola</option>
                    <option value="violoncelo">Violoncelo</option>
                    <option value="piano">Piano</option>
                    <option value="violao">Violão</option>
                    <option value="guitarra">Guitarra</option>
                    <option value="baixo">Baixo</option>
                    <option value="bateria">Bateria</option>
                    <option value="vocal">Vocal</option>
                    <option value="trompete">Trompete</option>
                    <option value="percussao">Percussão</option>
                  </select>
                </div>
              </div>

              <div className={sejaParceiroCss.formGroup}>
                <label className={sejaParceiroCss.formLabel}>Experiência Profissional</label>
                <textarea 
                  className={sejaParceiroCss.formTextarea} 
                  rows="4"
                  placeholder="Descreva sua experiência como músico..."
                ></textarea>
              </div>

              <div className={sejaParceiroCss.formGroup}>
                <label className={sejaParceiroCss.formLabel}>Link para Portfólio/Audio</label>
                <input 
                  type="url" 
                  className={sejaParceiroCss.formInput}
                  placeholder="YouTube, SoundCloud, etc..."
                />
              </div>

              <button type="submit" className={sejaParceiroCss.submitButton}>
                Enviar Candidatura
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SejaParceiro;