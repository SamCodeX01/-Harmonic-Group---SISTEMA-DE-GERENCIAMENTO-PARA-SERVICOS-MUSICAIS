// import React, {useState, useEffect, useRef} from "react";
// // import {DirectLine} from 'botframework-directlinejs';
// // import {Send, User, Bot, X, Minimize2} from 'lucide-react'
// import './t00_botAssistant.module.css'

// function T00_BotAssistant(){
//     const [messages, setMessages] = useState([]);
//     const [inputText, setInputText] = useState('');
//     const [directLine, setDirectLine] = useState(null);
//     const [isConnected, setIsConnected] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isExpanded, setIsExpanded] = useState(false);
//     const messagesEndRef = useRef(null);

//     // 🔑 MINHA CREDENCIAL AQUI - SECRET KEY
//     const DIRECT_LINE_SECRET = "caa19f35-3905-471d-917f-3ed9a72f09ca"

//   // Efeito para conectar com Direct Line
//   useEffect(()=>{
//     if(!DIRECT_LINE_SECRET){ //Se não for a credencia correta, mostre a mensagem abaixo no console
//         console.error('❌ Configure sua Direct Line Secret primeiro!');
//         return;
//     }

//     console.log('🔗 Conectando ao bot...');

//     const dl = new DirectLine({
//         secret: DIRECT_LINE_SECRET,
//         WebSocket: true
//     });

//     setDirectLine(dl);

//     dl.connectionStatus$
//         .subscribe(status =>{
//             console.log('Status da conexão: ', status);
//             setIsConnected(status === 2); // 2 = conectado
//         });

//         // Escutar mensagens do bot
//         dl.activity$
//             .filter(activity => activity.type === 'message' && activity.from.id !== 'user')
//             .subscribe(activity => {
//             console.log('🤖 Mensagem recebida do bot:', activity);
            
//             setMessages(prev => [...prev, {
//                 id: activity.id || Date.now(),
//                 type: 'bot',
//                 text: activity.text,
//                 timestamp: new date()
//             }]);

//             setIsLoading(false);
//             });

//             return () =>{
//                 if(dl){
//                     dl.end();
//                     console.log('🔌 Conexão encerrada');
//                 }
//             };
//         }, [DIRECT_LINE_SECRET]);

//   // Efeito para rolar para a última mensagem
//   // Função para enviar mensagem
//     // Enviar com Enter
//   // Enviar mensagem
//   // Alternar entre expandido e minimizado
//   // Botão flutuante quando minimizado


  

//     return (
//           // Efeito para rolar para a última mensagem
//             // Função para enviar mensagem
//               // Enviar com Enter
//   // Enviar mensagem
//   // Alternar entre expandido e minimizado
//   // Botão flutuante quando minimizado

//         <div>
//           <p>xxxxxxxxxxxxxx</p>      
//         </div>
//     )
// }
// export default T00_BotAssistant;

//----------------------------------------------------------------------------------------------

import React, { useState, useEffect, useRef } from 'react';
import './T00_BotAssistant.module.css';

const BotAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef(null);

  // Base de conhecimento do bot
  const botKnowledge = {
    'olá': 'Olá! Como posso ajudar você hoje?',
    'oi': 'Oi! Em que posso ser útil?',
    'como você está': 'Estou funcionando perfeitamente! Pronto para ajudar.',
    'qual seu nome': 'Sou seu assistente virtual! Pode me chamar de Assistente.',
    'obrigado': 'De nada! Estou aqui para ajudar! 😊',
    'tchau': 'Até logo! Volte sempre que precisar!',
    'ajuda': 'Posso ajudar com: informações, responder perguntas simples e conversar com você!',
    'horário': `Agora são ${new Date().toLocaleTimeString('pt-BR')}`,
    'data': `Hoje é ${new Date().toLocaleDateString('pt-BR')}`,
    'default': 'Desculpe, não entendi. Pode reformular sua pergunta?'
  };

  // Efeito para rolar para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Função para obter resposta do bot
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Procura por palavras-chave na mensagem
    for (const [key, response] of Object.entries(botKnowledge)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    return botKnowledge.default;
  };

  // Função para enviar mensagem
  const sendMessage = (text) => {
    if (!text.trim()) return;

    // Mensagem do usuário
    const userMessage = {
      id: 'user-' + Date.now(),
      type: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simular processamento do bot
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      
      const botMessage = {
        id: 'bot-' + Date.now(),
        type: 'bot',
        text: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  // Enviar com Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Enviar mensagem
  const handleSend = () => {
    if (inputText.trim()) {
      sendMessage(inputText);
    }
  };

  // Alternar entre expandido e minimizado
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Mensagem de boas-vindas quando expandir pela primeira vez
  useEffect(() => {
    if (isExpanded && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          id: 'welcome',
          type: 'bot',
          text: 'Olá! Sou seu assistente virtual. Como posso ajudar você hoje?',
          timestamp: new Date()
        }]);
      }, 500);
    }
  }, [isExpanded]);

  // Botão flutuante quando minimizado
  if (!isExpanded) {
    return (
      <div className="bot-floating-button" onClick={toggleExpand}>
        <span role="img" aria-label="bot">🤖</span>
        <span className="notification-dot"></span>
      </div>
    );
  }

  return (
    <div className="bot-assistant expanded">
      {/* Cabeçalho */}
      <div className="bot-header">
        <div className="bot-info">
          <div className="bot-status">
            <div className="status-indicator connected"></div>
            <span>Assistente Virtual</span>
          </div>
          <div className="connection-info">
            ✅ Online
          </div>
        </div>
        <button className="minimize-button" onClick={toggleExpand}>
          <span role="img" aria-label="minimize">➖</span>
        </button>
      </div>

      {/* Área de Mensagens */}
      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-state">
            <span role="img" aria-label="bot" className="empty-icon">🤖</span>
            <h4>Bem-vindo ao seu assistente!</h4>
            <p>Comece digitando uma mensagem abaixo.</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.type}`}
            >
              <div className="message-avatar">
                {message.type === 'user' ? 
                  <span role="img" aria-label="user">👤</span> : 
                  <span role="img" aria-label="bot">🤖</span>
                }
              </div>
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
            </div>
          ))
        )}
        
        {isLoading && (
          <div className="message bot">
            <div className="message-avatar">
              <span role="img" aria-label="bot">🤖</span>
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Área de Input */}
      <div className="input-container">
        <div className="input-wrapper">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua mensagem..."
            className="text-input"
          />
          
          <button
            onClick={handleSend}
            disabled={!inputText.trim() || isLoading}
            className="send-button"
          >
            <span role="img" aria-label="send">➤</span>
          </button>
        </div>
        
        <div className="suggestions">
          <small>Tente: "olá", "ajuda", "horário"</small>
        </div>
      </div>
    </div>
  );
};

export default BotAssistant;