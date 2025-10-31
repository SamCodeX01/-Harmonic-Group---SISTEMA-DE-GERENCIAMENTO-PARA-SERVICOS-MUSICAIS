// components/Contatos.jsx
import React from 'react';
import contatosCss from './T12_Contatos.module.css';

const Contatos = () => {
  return (
    <div className={contatosCss.contatosContainer}>
      <div className={contatosCss.heroSection}>
        <div className={contatosCss.heroContent}>
          <h1 className={contatosCss.heroTitle}>Entre em Contato</h1>
          <p className={contatosCss.heroSubtitle}>
            Estamos aqui para transformar seu evento em uma experiência musical inesquecível
          </p>
        </div>
      </div>

      <div className={contatosCss.contentWrapper}>
        <div className={contatosCss.contactInfo}>
          <div className={contatosCss.infoCard}>
            <div className={contatosCss.infoIcon}>📞</div>
            <h3 className={contatosCss.infoTitle}>Telefone</h3>
            <p className={contatosCss.infoText}>(11) 9999-9999</p>
            <p className={contatosCss.infoText}>(11) 8888-8888</p>
          </div>

          <div className={contatosCss.infoCard}>
            <div className={contatosCss.infoIcon}>✉️</div>
            <h3 className={contatosCss.infoTitle}>Email</h3>
            <p className={contatosCss.infoText}>contato@harmonicgroup.com</p>
            <p className={contatosCss.infoText}>orcamentos@harmonicgroup.com</p>
          </div>

          <div className={contatosCss.infoCard}>
            <div className={contatosCss.infoIcon}>📍</div>
            <h3 className={contatosCss.infoTitle}>Endereço</h3>
            <p className={contatosCss.infoText}>
              Rua Harmonia, 123<br />
              Vila Musical<br />
              São Paulo - SP<br />
              CEP: 01234-567
            </p>
          </div>

          <div className={contatosCss.infoCard}>
            <div className={contatosCss.infoIcon}>🕒</div>
            <h3 className={contatosCss.infoTitle}>Horário de Atendimento</h3>
            <p className={contatosCss.infoText}>
              Segunda a Sexta: 9h às 18h<br />
              Sábado: 9h às 13h<br />
              Domingo: Fechado
            </p>
          </div>
        </div>

        <div className={contatosCss.contactForm}>
          <h2 className={contatosCss.formTitle}>Solicite um Orçamento</h2>
          <form className={contatosCss.form}>
            <div className={contatosCss.formRow}>
              <div className={contatosCss.formGroup}>
                <label className={contatosCss.formLabel}>Nome Completo</label>
                <input type="text" className={contatosCss.formInput} />
              </div>
              <div className={contatosCss.formGroup}>
                <label className={contatosCss.formLabel}>Email</label>
                <input type="email" className={contatosCss.formInput} />
              </div>
            </div>

            <div className={contatosCss.formRow}>
              <div className={contatosCss.formGroup}>
                <label className={contatosCss.formLabel}>Telefone</label>
                <input type="tel" className={contatosCss.formInput} />
              </div>
              <div className={contatosCss.formGroup}>
                <label className={contatosCss.formLabel}>Tipo de Evento</label>
                <select className={contatosCss.formSelect}>
                  <option value="">Selecione...</option>
                  <option value="casamento">Casamento</option>
                  <option value="aniversario">Aniversário</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="formatura">Formatura</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div className={contatosCss.formGroup}>
              <label className={contatosCss.formLabel}>Data do Evento</label>
              <input type="date" className={contatosCss.formInput} />
            </div>

            <div className={contatosCss.formGroup}>
              <label className={contatosCss.formLabel}>Mensagem</label>
              <textarea 
                className={contatosCss.formTextarea} 
                rows="5"
                placeholder="Conte-nos mais sobre seu evento..."
              ></textarea>
            </div>

            <button type="submit" className={contatosCss.submitButton}>
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contatos;