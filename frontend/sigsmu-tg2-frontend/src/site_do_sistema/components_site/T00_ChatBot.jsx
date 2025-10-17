import React from "react";
import BotAssistant from "./T00_BotAssistant";
import chatBot from "./t00_chatBot.module.css"; // CSS específico para este componente

function T00_ChatBot(){
    return(
        <div className={chatBot.chatBotContainer}>
            {/* Conteúdo principal da sua página */}
            <div className={chatBot.pageContent}>
                <header className={chatBot.pageHeader}>
                    <h1>🤖 Meu Assistente Virtual</h1>
                    <p>Powered by Microsoft Bot Framework</p>
                </header>
                
                {/* Seu conteúdo normal da página aqui */}
                <main className={chatBot.mainContent}>
                    <h2>Bem-vindo ao Sistema</h2>
                    <p>Este é o conteúdo principal da sua aplicação.</p>
                    <p>O assistente virtual está disponível no canto inferior direito!</p>
                </main>
            </div>
            
            {/* BotAssistant flutuante - AGORA NO CANTO INFERIOR DIREITO */}
            {/* <BotAssistant/> */}
        </div>
    );
}

export default T00_ChatBot;