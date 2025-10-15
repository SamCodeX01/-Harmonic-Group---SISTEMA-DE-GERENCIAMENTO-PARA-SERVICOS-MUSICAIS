import React from "react";
import BotAssistant from "./T00_BotAssistant";
import "./T00_ChatBot.module.css"; // CSS específico para este componente



function T00_ChatBot(){
    return(
        <div className="chatBot-container">
            {/* Conteúdo principal da sua página */}
            <div className="page-content">
                <header className="page-header">
                    <h1>🤖 Meu Assistente Virtual</h1>
                    <p>Powered by Microsoft Bot Framework</p>
                </header>
                
                {/* Seu conteúdo normal da página aqui */}
                <main className="main-content">
                    <h2>Bem-vindo ao Sistema</h2>
                    <p>Este é o conteúdo principal da sua aplicação.</p>
                    <p>O assistente virtual está disponível no canto inferior direito!</p>
                </main>
            </div>
            
            {/* BotAssistant flutuante - AGORA NO CANTO INFERIOR DIREITO */}
            <BotAssistant/>
        </div>
    );
}

export default T00_ChatBot;