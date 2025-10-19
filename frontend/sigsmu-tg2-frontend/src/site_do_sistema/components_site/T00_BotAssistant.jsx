import React, { useState, useEffect, useRef } from 'react';
import botAssistant from './t00_botAssistant.module.css';

const BotAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef(null);

  // Base de conhecimento do bot - HARMONIC GROUP (COMPLETA E CORRIGIDA)
  const botKnowledge = {
    // =============================================
    // SAUDAÇÕES BÁSICAS
    // =============================================
    'olá': 'Olá! Bem-vindo à Harmonic Group! Como posso ajudar você com nossos serviços musicais para eventos?',
    'ola': 'Olá! Bem-vindo à Harmonic Group! Como posso ajudar você com nossos serviços musicais para eventos?',
    'oi': 'Oi! Sou o assistente virtual da Harmonic Group. Em que posso ajudar?',
    'bom dia': 'Bom dia! 🌞 Em que posso ajudar com os serviços musicais da Harmonic Group?',
    'boa tarde': 'Boa tarde! ☀️ Como posso auxiliar você hoje?',
    'boa noite': 'Boa noite! 🌙 Estou aqui para ajudar com nossos serviços musicais.',

    // =============================================
    // SOBRE OS SERVIÇOS E A EMPRESA
    // =============================================
    'harmonic group': 'A Harmonic Group é especializada em serviços musicais para eventos! Oferecemos contratação de músicos e bandas para casamentos, formaturas, festas infantis, eventos corporativos e muito mais! 🎵',
    'empresa': 'A Harmonic Group é especializada em serviços musicais para eventos! Oferecemos contratação de músicos profissionais para diversos tipos de celebrações.',
    
    'serviços': 'Oferecemos serviços musicais completos para: casamentos, bodas, festas privadas, debutantes, formaturas, festas infantis e eventos corporativos. Qual tipo de evento você está planejando?',
    'servicos': 'Oferecemos serviços musicais completos para: casamentos, bodas, festas privadas, debutantes, formaturas, festas infantis e eventos corporativos. Qual tipo de evento você está planejando?',
    'o que oferecem': 'Oferecemos serviços musicais completos para: casamentos, bodas, festas privadas, debutantes, formaturas, festas infantis e eventos corporativos.',
    
    'tipos de evento': 'Atendemos casamentos, bodas, jantares privados, festas de debutantes, formaturas, festas infantis e eventos corporativos! Para qual evento você precisa de música?',
    'eventos': 'Atendemos casamentos, bodas, jantares privados, festas de debutantes, formaturas, festas infantis e eventos corporativos! Para qual evento você precisa de música?',
    'quais eventos': 'Atendemos casamentos, bodas, jantares privados, festas de debutantes, formaturas, festas infantis e eventos corporativos! Para qual evento você precisa de música?',
    'quais eventos atendem': 'Atendemos casamentos, bodas, jantares privados, festas de debutantes, formaturas, festas infantis e eventos corporativos! Para qual evento você precisa de música?',
    'que eventos': 'Atendemos casamentos, bodas, jantares privados, festas de debutantes, formaturas, festas infantis e eventos corporativos! Para qual evento você precisa de música?',
    'atendem quais eventos': 'Atendemos casamentos, bodas, jantares privados, festas de debutantes, formaturas, festas infantis e eventos corporativos! Para qual evento você precisa de música?',
    
    'músicos': 'Todos nossos músicos são profissionais experientes e selecionados! Eles têm vasta experiência em performances ao vivo para garantir qualidade no seu evento.',
    'musicos': 'Todos nossos músicos são profissionais experientes e selecionados! Eles têm vasta experiência em performances ao vivo para garantir qualidade no seu evento.',
    'profissionais': 'Todos nossos músicos são profissionais experientes e selecionados! Eles têm vasta experiência em performances ao vivo para garantir qualidade no seu evento.',
    'experiência': 'Todos nossos músicos são profissionais experientes e selecionados! Eles têm vasta experiência em performances ao vivo para garantir qualidade no seu evento.',
    'experiencia': 'Todos nossos músicos são profissionais experientes e selecionados! Eles têm vasta experiência em performances ao vivo para garantir qualidade no seu evento.',
    
    'bandas': 'Temos diversas bandas e formações musicais! Você pode escolher por estilo musical na nossa plataforma.',
    'banda': 'Temos diversas bandas e formações musicais! Você pode escolher por estilo musical na nossa plataforma.',

    // =============================================
    // PROCESSO DE CONTRATAÇÃO E AGENDAMENTO
    // =============================================
    'contratar': 'Para contratar, acesse nossa plataforma online! Lá você pode ver músicos disponíveis, ver agendas e solicitar orçamento. Posso ajudar com alguma dúvida específica?',
    'contratação': 'Para contratar, acesse nossa plataforma online! Lá você pode ver músicos disponíveis, ver agendas e solicitar orçamento. Posso ajudar com alguma dúvida específica?',
    'contratacao': 'Para contratar, acesse nossa plataforma online! Lá você pode ver músicos disponíveis, ver agendas e solicitar orçamento. Posso ajudar com alguma dúvida específica?',
    'como contratar': 'Para contratar, acesse nossa plataforma online! Lá você pode ver músicos disponíveis, ver agendas e solicitar orçamento.',
    'quero contratar': 'Para contratar, acesse nossa plataforma online! Lá você pode ver músicos disponíveis, ver agendas e solicitar orçamento.',
    
    'agendar': 'O agendamento é feito pela nossa plataforma em tempo real! Após escolher o músico e data, a confirmação é instantânea com notificação por WhatsApp ou e-mail.',
    'agendamento': 'O agendamento é feito pela nossa plataforma em tempo real! Após escolher o músico e data, a confirmação é instantânea com notificação por WhatsApp ou e-mail.',
    'marcar': 'O agendamento é feito pela nossa plataforma em tempo real! Após escolher o músico e data, a confirmação é instantânea com notificação por WhatsApp ou e-mail.',
    'reservar': 'O agendamento é feito pela nossa plataforma em tempo real! Após escolher o músico e data, a confirmação é instantânea com notificação por WhatsApp ou e-mail.',
    
    'repertório': 'Sim! Você pode escolher o repertório! Nossa plataforma tem lista de músicas sugeridas e aceita pedidos específicos para personalizar sua experiência.',
    'repertorio': 'Sim! Você pode escolher o repertório! Nossa plataforma tem lista de músicas sugeridas e aceita pedidos específicos para personalizar sua experiência.',
    'músicas': 'Sim! Você pode escolher o repertório! Nossa plataforma tem lista de músicas sugeridas e aceita pedidos específicos para personalizar sua experiência.',
    'musicas': 'Sim! Você pode escolher o repertório! Nossa plataforma tem lista de músicas sugeridas e aceita pedidos específicos para personalizar sua experiência.',
    'escolher música': 'Sim! Você pode escolher o repertório! Nossa plataforma tem lista de músicas sugeridas e aceita pedidos específicos para personalizar sua experiência.',
    'escolher musicas': 'Sim! Você pode escolher o repertório! Nossa plataforma tem lista de músicas sugeridas e aceita pedidos específicos para personalizar sua experiência.',
    
    'imprevisto': 'Em caso de imprevisto com o músico, nosso sistema busca automaticamente um substituto qualificado para não afetar seu evento!',
    'problema': 'Em caso de imprevisto com o músico, nosso sistema busca automaticamente um substituto qualificado para não afetar seu evento!',
    'substituto': 'Em caso de imprevisto com o músico, nosso sistema busca automaticamente um substituto qualificado para não afetar seu evento!',

    // =============================================
    // CONTRATOS, PAGAMENTOS E SEGURANÇA
    // =============================================
    'contrato': 'Sim! Geramos contrato automatizado em PDF com todas as cláusulas, valores e combinações. Tem validade jurídica e garante segurança para ambas as partes.',
    'contratos': 'Sim! Geramos contrato automatizado em PDF com todas as cláusulas, valores e combinações. Tem validade jurídica e garante segurança para ambas as partes.',
    'documento': 'Sim! Geramos contrato automatizado em PDF com todas as cláusulas, valores e combinações. Tem validade jurídica e garante segurança para ambas as partes.',
    'legal': 'Sim! Geramos contrato automatizado em PDF com todas as cláusulas, valores e combinações. Tem validade jurídica e garante segurança para ambas as partes.',
    
    'pagamento': 'Aceitamos cartão de crédito (até 12x), débito online e PIX! Todos os valores são transparentes, sem taxas escondidas.',
    'pagamentos': 'Aceitamos cartão de crédito (até 12x), débito online e PIX! Todos os valores são transparentes, sem taxas escondidas.',
    'pagar': 'Aceitamos cartão de crédito (até 12x), débito online e PIX! Todos os valores são transparentes, sem taxas escondidas.',
    'forma de pagamento': 'Aceitamos cartão de crédito (até 12x), débito online e PIX! Todos os valores são transparentes, sem taxas escondidas.',
    'formas de pagamento': 'Aceitamos cartão de crédito (até 12x), débito online e PIX! Todos os valores são transparentes, sem taxas escondidas.',
    
    // ORÇAMENTOS E PREÇOS
    'orçamento': 'Os orçamentos são personalizados conforme o tipo de evento, número de músicos e duração do serviço. Posso ajudar a conectar você com nosso time para um orçamento detalhado! Que tipo de evento você está planejando?',
    'orcamento': 'Os orçamentos são personalizados conforme o tipo de evento, número de músicos e duração do serviço. Posso ajudar a conectar você com nosso time para um orçamento detalhado! Que tipo de evento você está planejando?',
    'quanto é': 'Os valores variam conforme o pacote escolhido! Temos opções para diferentes orçamentos. Pode me dizer para qual tipo de evento você precisa?',
    'quanto custa': 'Nossos preços são personalizados por evento! Temos pacotes completos que podem incluir diferentes formatações de banda. Para qual evento você gostaria de saber?',
    'quanto fica': 'O valor depende do tipo de evento e formação musical! Temos opções para todos os orçamentos. Para qual ocasião você precisa?',
    'preço': 'Temos pacotes adaptados para cada tipo de evento! Os valores variam conforme o serviço. Que tipo de evento você está planejando?',
    'preco': 'Temos pacotes adaptados para cada tipo de evento! Os valores variam conforme o serviço. Que tipo de evento você está planejando?',
    'preços': 'Temos pacotes adaptados para cada tipo de evento! Os valores variam conforme o serviço. Que tipo de evento você está planejando?',
    'precos': 'Temos pacotes adaptados para cada tipo de evento! Os valores variam conforme o serviço. Que tipo de evento você está planejando?',
    'valor': 'Nossos preços são personalizados por evento! Temos pacotes completos que podem incluir diferentes formatações de banda.',
    'valores': 'Nossos preços são personalizados por evento! Temos pacotes completos que podem incluir diferentes formatações de banda.',
    'quero orçamento': 'Excelente! Para gerar um orçamento preciso, preciso saber: qual o tipo de evento e a data aproximada?',
    'solicitar orçamento': 'Perfeito! Acesse nossa plataforma ou me informe o tipo de evento que deseja para ajudar com o orçamento!',
    'fazer orçamento': 'Ótimo! Posso ajudar a direcionar para o orçamento ideal. É para casamento, formatura, evento corporativo?',
    'custo': 'Nossos preços são personalizados por evento! Temos pacotes completos que podem incluir diferentes formatações de banda.',
    
    'segurança': 'Nossa plataforma usa criptografia para proteger seus dados! Seus dados pessoais e de pagamento estão sempre seguros.',
    'seguranca': 'Nossa plataforma usa criptografia para proteger seus dados! Seus dados pessoais e de pagamento estão sempre seguros.',
    'proteção': 'Nossa plataforma usa criptografia para proteger seus dados! Seus dados pessoais e de pagamento estão sempre seguros.',
    'protecao': 'Nossa plataforma usa criptografia para proteger seus dados! Seus dados pessoais e de pagamento estão sempre seguros.',
    'dados': 'Nossa plataforma usa criptografia para proteger seus dados! Seus dados pessoais e de pagamento estão sempre seguros.',

    // =============================================
    // PLATAFORMA E TECNOLOGIA
    // =============================================
    'aplicativo': 'Não precisa baixar nada! Nossa plataforma é 100% online e funciona em qualquer navegador de celular, tablet ou computador.',
    'app': 'Não precisa baixar nada! Nossa plataforma é 100% online e funciona em qualquer navegador de celular, tablet ou computador.',
    'download': 'Não precisa baixar nada! Nossa plataforma é 100% online e funciona em qualquer navegador de celular, tablet ou computador.',
    
    'cadastrar': 'O cadastro é rápido e gratuito! Acesse nosso site, clique em "Cadastrar" e em minutos você explora todos os serviços.',
    'cadastro': 'O cadastro é rápido e gratuito! Acesse nosso site, clique em "Cadastrar" e em minutos você explora todos os serviços.',
    'registrar': 'O cadastro é rápido e gratuito! Acesse nosso site, clique em "Cadastrar" e em minutos você explora todos os serviços.',
    
    'notificação': 'Enviamos notificações por WhatsApp e e-mail sobre confirmações, lembretes e mudanças na agenda!',
    'notificacao': 'Enviamos notificações por WhatsApp e e-mail sobre confirmações, lembretes e mudanças na agenda!',
    'notificações': 'Enviamos notificações por WhatsApp e e-mail sobre confirmações, lembretes e mudanças na agenda!',
    'lembrete': 'Enviamos notificações por WhatsApp e e-mail sobre confirmações, lembretes e mudanças na agenda!',
    
    'chatbot': 'Esse sou eu! 😊 Estou aqui para responder dúvidas 24/7 sobre serviços, preços e funcionamento da plataforma.',

    // =============================================
    // PARA MÚSICOS E PARCEIROS
    // =============================================
    'trabalhar': 'Você é músico? Candidate-se em "Trabalhe Conosco" ou "Seja um Músico Parceiro" na nossa plataforma! Após análise, entramos em contato.',
    'trabalho': 'Você é músico? Candidate-se em "Trabalhe Conosco" ou "Seja um Músico Parceiro" na nossa plataforma! Após análise, entramos em contato.',
    'parceiro': 'Você é músico? Candidate-se em "Trabalhe Conosco" ou "Seja um Músico Parceiro" na nossa plataforma! Após análise, entramos em contato.',
    'músico parceiro': 'Músicos parceiros têm área personalizada para gerenciar agenda, repertório, disponibilidade e contratos!',
    'musico parceiro': 'Músicos parceiros têm área personalizada para gerenciar agenda, repertório, disponibilidade e contratos!',
    'área do músico': 'Músicos parceiros têm área personalizada para gerenciar agenda, repertório, disponibilidade e contratos!',
    'area do musico': 'Músicos parceiros têm área personalizada para gerenciar agenda, repertório, disponibilidade e contratos!',

    // =============================================
    // PERSONALIZAÇÃO E EXPERIÊNCIA
    // =============================================
    'música personalizada': 'Sim! Aceitamos pedidos de músicas específicas! Durante a contratação, solicite e analisamos a viabilidade com o músico.',
    'musica personalizada': 'Sim! Aceitamos pedidos de músicas específicas! Durante a contratação, solicite e analisamos a viabilidade com o músico.',
    'personalizar': 'Sim! Aceitamos pedidos de músicas específicas! Durante a contratação, solicite e analisamos a viabilidade com o músico.',
    'pedido especial': 'Sim! Aceitamos pedidos de músicas específicas! Durante a contratação, solicite e analisamos a viabilidade com o músico.',
    
    'pacotes': 'Temos pacotes completos como "Pacote Casamento" e "Pacote Formatura" com diferentes formatações de banda e horas de serviço!',
    'pacote': 'Temos pacotes completos como "Pacote Casamento" e "Pacote Formatura" com diferentes formatações de banda e horas de serviço!',
    'combo': 'Temos pacotes completos como "Pacote Casamento" e "Pacote Formatura" com diferentes formatações de banda e horas de serviço!',
    
    'estilo musical': 'Nossos músicos são categorizados por estilo (Jazz, MPB, Sertanejo, Pop, Clássico)! Use os filtros na plataforma para encontrar o perfil ideal.',
    'estilo': 'Nossos músicos são categorizados por estilo (Jazz, MPB, Sertanejo, Pop, Clássico)! Use os filtros na plataforma para encontrar o perfil ideal.',
    'gênero': 'Nossos músicos são categorizados por estilo (Jazz, MPB, Sertanejo, Pop, Clássico)! Use os filtros na plataforma para encontrar o perfil ideal.',
    'genero': 'Nossos músicos são categorizados por estilo (Jazz, MPB, Sertanejo, Pop, Clássico)! Use os filtros na plataforma para encontrar o perfil ideal.',
    
    'jazz': 'Temos excelentes músicos de Jazz! Perfeito para eventos sofisticados como jantares corporativos ou casamentos elegantes.',
    'mpb': 'MPB é um de nossos estilos mais populares! Temos vários artistas especializados.',
    'sertanejo': 'Sertanejo é sucesso garantido! Temos duplas e bandas completas no estilo.',
    'pop': 'Música pop para animar qualquer festa! Temos bandas versáteis no repertório pop.',
    'clássico': 'Música clássica para cerimônias elegantes! Temos solistas e grupos especializados.',
    'classico': 'Música clássica para cerimônias elegantes! Temos solistas e grupos especializados.',

    // =============================================
    // SUPORTE E RESOLUÇÃO
    // =============================================
    'suporte': 'Nosso time humano está sempre disponível! Peça para falar com um atendente pelo chat ou entre em contato via WhatsApp/e-mail.',
    'atendimento': 'Nosso time humano está sempre disponível! Peça para falar com um atendente pelo chat ou entre em contato via WhatsApp/e-mail.',
    'ajuda humana': 'Nosso time humano está sempre disponível! Peça para falar com um atendente pelo chat ou entre em contato via WhatsApp/e-mail.',
    
    'cancelar': 'Cancelamentos seguem as condições do contrato. Entre em contato conosco o quanto antes para avaliar as opções.',
    'cancelamento': 'Cancelamentos seguem as condições do contrato. Entre em contato conosco o quanto antes para avaliar as opções.',
    
    'remarcar': 'Remarcações são possíveis! Consulte as condições no seu contrato ou fale com nosso atendimento.',
    'remarcação': 'Remarcações são possíveis! Consulte as condições no seu contrato ou fale com nosso atendimento.',
    'remarcacao': 'Remarcações são possíveis! Consulte as condições no seu contrato ou fale com nosso atendimento.',
    'mudar data': 'Remarcações são possíveis! Consulte as condições no seu contrato ou fale com nosso atendimento.',
    
    'avaliação': 'Após o evento, você recebe um e-mail para avaliar o serviço! Seu feedback é essencial para nossa qualidade.',
    'avaliacao': 'Após o evento, você recebe um e-mail para avaliar o serviço! Seu feedback é essencial para nossa qualidade.',
    'feedback': 'Valorizamos seu feedback! Após cada evento, enviamos pesquisa de satisfação.',
    'opinião': 'Valorizamos seu feedback! Após cada evento, enviamos pesquisa de satisfação.',
    'opiniao': 'Valorizamos seu feedback! Após cada evento, enviamos pesquisa de satisfação.',

    // =============================================
    // DIFERENCIAIS
    // =============================================
    'diferencial': 'Oferecemos serviço padronizado e profissional com tecnologia! Temos transparência, segurança jurídica com contratos automatizados e gestão integrada em uma plataforma única!',
    'diferenciais': 'Oferecemos serviço padronizado e profissional com tecnologia! Temos transparência, segurança jurídica com contratos automatizados e gestão integrada em uma plataforma única!',
    'vantagem': 'Diferente da informalidade do setor, temos processos padronizados, plataforma tecnológica e profissionais selecionados!',
    'vantagens': 'Diferente da informalidade do setor, temos processos padronizados, plataforma tecnológica e profissionais selecionados!',
    'por que escolher': 'Diferente da informalidade do setor, temos processos padronizados, plataforma tecnológica e profissionais selecionados!',

    // =============================================
    // TIPOS DE EVENTO ESPECÍFICOS
    // =============================================
    'casamento': 'Para casamentos, oferecemos música para cerimônia e recepção! Temos solistas, duplas e bandas completas. Jazz e MPB são muito populares! Gostaria de saber mais sobre nossos pacotes para casamento? 💒',
    'casamentos': 'Para casamentos, oferecemos música para cerimônia e recepção! Temos solistas, duplas e bandas completas. Jazz e MPB são muito populares! Gostaria de saber mais sobre nossos pacotes para casamento? 💒',
    'noivado': 'Para noivados, temos apresentações mais intimistas! Violinistas, pianistas ou duplas acústicas criam o clima perfeito. 🎻',
    'bodas': 'Para bodas, oferecemos repertórios especiais conforme a época do casamento! Temos opções para todos os gostos. 💍',

    'formatura': 'Para formaturas, temos bandas animadas que tocam os sucessos do momento! Perfeito para celebrar essa conquista! 🎓🎉',
    'formaturas': 'Para formaturas, temos bandas animadas que tocam os sucessos do momento! Perfeito para celebrar essa conquista! 🎓🎉',

    'debutante': 'Para festas de debutantes, oferecemos repertório jovem e animado! DJ + banda ou bandas completas com repertório atual. 👑',
    'debutantes': 'Para festas de debutantes, oferecemos repertório jovem e animado! DJ + banda ou bandas completas com repertório atual. 👑',
    '15 anos': 'Para festas de 15 anos, temos opções desde música clássica para a valsa até bandas pop para a festa! 💃',

    'infantil': 'Para festas infantis, temos músicos especializados em repertório infantil! Personagens cantores, músicas educativas e muito mais! 🎈',
    'festa infantil': 'Para festas infantis, temos músicos especializados em repertório infantil! Personagens cantores, músicas educativas e muito mais! 🎈',
    'crianças': 'Para festas infantis, temos músicos especializados em repertório infantil! Personagens cantores, músicas educativas e muito mais! 🎈',

    'corporativo': 'Para eventos corporativos, oferecemos jazz, bossa nova e MPB para coquetéis, ou bandas versáteis para confraternizações! 💼',
    'empresarial': 'Para eventos corporativos, oferecemos jazz, bossa nova e MPB para coquetéis, ou bandas versáteis para confraternizações! 💼',
    'empresa': 'Para eventos corporativos, oferecemos jazz, bossa nova e MPB para coquetéis, ou bandas versáteis para confraternizações! 💼',

    'jantar': 'Para jantares privados, recomendamos música suave como jazz, piano ou violão! Cria uma atmosfera sofisticada. 🍷',
    'jantares': 'Para jantares privados, recomendamos música suave como jazz, piano ou violão! Cria uma atmosfera sofisticada. 🍷',
    'privado': 'Para eventos privados, adaptamos o repertório ao seu gosto! Temos desde música clássica até pop internacional. 🎵',

    'aniversário': 'Para aniversários, temos opções para todas as idades! Bandas com repertório diversificado para animar sua festa! 🎂',
    'aniversarios': 'Para aniversários, temos opções para todas as idades! Bandas com repertório diversificado para animar sua festa! 🎂',

    // =============================================
    // DEFAULT
    // =============================================
    'default': 'Desculpe, não entendi completamente. Sou especializado em serviços da Harmonic Group como: contratação de músicos, agendamento para eventos, contratos e pagamentos. Pode reformular sua pergunta?'
  };

  // Efeito para rolar para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Função para obter resposta do bot - MELHORADA
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();
    
    // Primeiro: procura por correspondências exatas
    if (botKnowledge[message]) {
      return botKnowledge[message];
    }
    
    // Segundo: procura por palavras-chave parciais (mais flexível)
    const keywords = Object.keys(botKnowledge)
      .filter(key => key !== 'default')
      .sort((a, b) => b.length - a.length); // Ordena por palavras mais longas primeiro

    for (const key of keywords) {
      if (message.includes(key)) {
        return botKnowledge[key];
      }
    }

    // Terceiro: verifica combinações específicas de eventos
    if ((message.includes('casamento') || message.includes('casamentos') || message.includes('noiva'))) {
      return botKnowledge['casamento'];
    }
    
    if ((message.includes('formatura') || message.includes('formaturas') || message.includes('formando'))) {
      return botKnowledge['formatura'];
    }
    
    if ((message.includes('debutante') || message.includes('15 anos') || message.includes('quinze anos'))) {
      return botKnowledge['debutante'];
    }
    
    if ((message.includes('infantil') || message.includes('criança') || message.includes('kids'))) {
      return botKnowledge['infantil'];
    }
    
    if ((message.includes('corporativo') || message.includes('empresa') || message.includes('corporativos'))) {
      return botKnowledge['corporativo'];
    }
    
    if ((message.includes('jantar') || message.includes('privado') || message.includes('intimo'))) {
      return botKnowledge['jantar'];
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
          text: '🎵 Olá! Sou o assistente virtual da Harmonic Group! Posso ajudar com informações sobre serviços musicais, contratação de músicos, agendamento para eventos e muito mais. Como posso ajudar você hoje?',
          timestamp: new Date()
        }]);
      }, 500);
    }
  }, [isExpanded]);

  // Sugestões de perguntas
  const quickQuestions = [
    // 'Quais eventos atendem?',
    // 'Como contratar um músico?',
    // 'Posso escolher as músicas?',
    // 'Quais formas de pagamento?'
  ];

  // Botão flutuante quando minimizado
  if (!isExpanded) {
    return (
      <div className={botAssistant.botFloatingButton} onClick={toggleExpand}>
        <span role="img" aria-label="bot">🎵</span>
        <span className={botAssistant.notificationDot}></span>
      </div>
    );
  }

  return (
    <div className={botAssistant.botAssistantExpanded}>
      {/* Cabeçalho */}
      <div className={botAssistant.botHeader}>
        <div className={botAssistant.botInfo}>
          <div className={botAssistant.botStatus}>
            <div className={botAssistant.statusIndicatorConnected}></div>
            <span>Harmonic Group - Assistente</span>
          </div>
          <div className={botAssistant.connectionInfo}>
            ✅ Online - Especialista em Música
          </div>
        </div>
        <button className={botAssistant.minimizeButton} onClick={toggleExpand}>
          <span role="img" aria-label="minimize">➖</span>
        </button>
      </div>

      {/* Área de Mensagens */}
      <div className={botAssistant.messagesContainer}>
        {messages.length === 0 ? (
          <div className={botAssistant.emptyState}>
            <span role="img" aria-label="bot" className={botAssistant.emptyIcon}>🎵</span>
            <h4>Bem-vindo à Harmonic Group!</h4>
            <p>Seu assistente musical está aqui para ajudar.</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`${botAssistant.message} ${message.type === 'user' ? botAssistant.messageUser : botAssistant.messageBot}`}
            >
              <div className={botAssistant.messageAvatar}>
                {message.type === 'user' ? 
                  <span role="img" aria-label="user">👤</span> : 
                  <span role="img" aria-label="bot">🎵</span>
                }
              </div>
              <div className={botAssistant.messageContent}>
                <div className={botAssistant.messageText}>{message.text}</div>
                <div className={botAssistant.messageTime}>
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
          <div className={`${botAssistant.message} ${botAssistant.messageBot}`}>
            <div className={botAssistant.messageAvatar}>
              <span role="img" aria-label="bot">🎵</span>
            </div>
            <div className={botAssistant.messageContent}>
              <div className={botAssistant.typingIndicator}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Sugestões Rápidas */}
      <div className={botAssistant.quickSuggestions}>
        {quickQuestions.map((question, index) => (
          <button
            key={index}
            className={botAssistant.quickSuggestion}
            onClick={() => sendMessage(question)}
          >
            {question}
          </button>
        ))}
      </div>

      {/* Área de Input */}
      <div className={botAssistant.inputContainer}>
        <div className={botAssistant.inputWrapper}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua mensagem sobre serviços musicais..."
            className={botAssistant.textInput}
          />
          {/* BOTÃO DE ENVIAR */}
          <button
            onClick={handleSend}
            disabled={!inputText.trim() || isLoading}
            className={botAssistant.sendButton}
          >
            <span role="img" aria-label="send">➤</span>
          </button>
        </div>
        
        <div className={botAssistant.suggestions}>
          <small>Tente perguntar sobre: casamentos, contratação, preços, estilos musicais</small>
        </div>
      </div>
    </div>
  );
};

export default BotAssistant;