import React, { useState } from "react";
import T09_Footer from "./T09_Footer";
import pacote01 from "../imagens_site/pacotes01.png"
import pacote02 from "../imagens_site/pacotes02.png"
import pacote03 from "../imagens_site/pacotes03.png"
import footer from "../imagens_site/footer.png"
import t10_servicos from "./t10_servicos.module.css"
import AgrupamentoOpcoes from "../../components/AgrupamentoOpcoes"


function T10_Servicos() {
    // const entradaPaisPadrinhos = {
    //     Musicas_Sugeridas: ["musica1","musica2","musica3"]
    // }
    // const entradaNoivo = {
    //     Musicas_Sugeridas: ["musica1","musica2","musica3"]
    // }

    // Roteiro para o Músico - CASAMENTO CIVIL

const cerimoniaCivil = {
    title: "🎩 Cerimônia Civil",
    description: "Oficialização legal do casamento. Fique atento aos sinais do oficial e do casal.",
    parts: {
        acolhidaConvidados: {
            title: "🎶 Acolhida dos Convidados",
            description: "Música de fundo enquanto os convidados chegam e se acomodam.",
            musicas: ["Perfect - Ed Sheeran", "A Thousand Years - Christina Perri", "Say You Won't Let Go - James Arthur", "All of Me - John Legend", "Thinking Out Loud - Ed Sheeran"]
        },
        entradaNoivo: {
            title: "🚶‍♂️ Entrada do Noivo",
            description: "Momento em que o noivo entra e se posiciona. Música serena.",
            musicas: ["Marry Me - Train", "I Choose You - Sara Bareilles", "Better Together - Jack Johnson", "You Are The Best Thing - Ray LaMontagne", "Lucky - Jason Mraz ft. Colbie Caillat"]
        },
        entradaNoiva: {
            title: "👰‍♀️ Entrada da Noiva",
            description: "O ápice da cerimônia. Música emocionante e solene.",
            musicas: ["A Thousand Years - Christina Perri", "Turning Page - Sleeping At Last", "Can't Help Falling In Love - Kina Grannis", "Make You Feel My Love - Adele", "The Wedding Song - Angus & Julia Stone"]
        },
        votosAliancas: {
            title: "📝 Votos e Alianças",
            description: "MOMENTO DE SILÊNCIO durante os votos. Música suave de fundo apenas para a assinatura.",
            musicas: ["Hallelujah - Pentatonix", "Flightless Bird, American Mouth - Iron & Wine", "The Book of Love - Peter Gabriel", "Bloom - The Paper Kites", "First Day Of My Life - Bright Eyes"]
        },
        saidaNoivos: {
            title: "🎉 Saída dos Noivos",
            description: "Momento de celebração! Música alegre e energética.",
            musicas: ["Signed, Sealed, Delivered I'm Yours - Stevie Wonder", "You Are The Best Thing - Ray LaMontagne", "I Gotta Feeling - The Black Eyed Peas", "Best Day Of My Life - American Authors", "Happy - Pharrell Williams"]
        }
    }
};

// Roteiro para o Músico - CASAMENTO RELIGIOSO

const cerimoniaReligiosa = {
    title: "⛪ Cerimônia Religiosa",
    description: "Celebração do sacramento do matrimônio. A música deve guiar a liturgia.",
    parts: {
        preCerimonia: {
            title: "🎶 Pré-cerimônia",
            description: "Música ambiente para a chegada e acomodação dos convidados.",
            musicas: ["Oceans (Where Feet May Fail) - Hillsong UNITED", "10,000 Reasons (Bless the Lord) - Matt Redman", "How Great Is Our God - Chris Tomlin", "In Christ Alone - Adrienne Liesching", "Good Good Father - Chris Tomlin"]
        },
        procissaoEntrada: {
            title: "🚶‍♂️👰‍♀️ Procissão de Entrada",
            description: "Entrada do cortejo (padrinhos, pajens, noivo) e, por fim, da noiva.",
            musicas: ["Christ Is Enough - Hillsong Worship", "Your Love Never Fails - Jesus Culture", "Build My Life - Pat Barrett", "Great Are You Lord - All Sons & Daughters", "King of My Heart - Sarah McMillan"]
        },
        ofertorio: {
            title: "🍞🍷 Ofertório",
            description: "Momento em que os noivos levam as oferendas ao altar.",
            musicas: ["Here I Am To Worship - Tim Hughes", "Open The Eyes Of My Heart - Paul Baloche", "Holy Spirit - Francesca Battistelli", "Broken Vessels (Amazing Grace) - Hillsong Worship", "Come As You Are - Crowder"]
        },
        comunhao: {
            title: "🥖 Comunhão",
            description: "Momento sagrado da partilha da Eucaristia. Música contemplativa.",
            musicas: ["What A Beautiful Name - Hillsong Worship", "Reckless Love - Cory Asbury", "Who You Say I Am - Hillsong Worship", "No Longer Slaves - Bethel Music", "Lord I Need You - Matt Maher"]
        },
        procissaoSaida: {
            title: "🎉 Procissão de Saída",
            description: "Saída dos recém-casados. Música de júbilo e celebração!",
            musicas: ["Happy Day - Tim Hughes", "This Is Amazing Grace - Phil Wickham", "Made Me Glad - Hillsong Worship", "How He Loves - David Crowder Band", "Joy - For King & Country"]
        }
    }
};

const festaAniversario = {
    title: "🎂 Festa de Aniversário",
    description: "Celebração de vida. O clima é de alegria e descontração para todas as idades.",
    parts: {
        recepçãoConvidados: {
            title: "🚶‍♂️🚶‍♀️ Recepção dos Convidados",
            description: "Música de fundo enquanto os convidados chegam e cumprimentam o aniversariante.",
            musicas: ["Happy - Pharrell Williams", "I Gotta Feeling - Black Eyed Peas", "Uptown Funk - Mark Ronson ft. Bruno Mars", "Can't Stop The Feeling! - Justin Timberlake", "Walking On Sunshine - Katrina & The Waves"]
        },
        parabens: {
            title: "🎉 Hora do Parabéns",
            description: "Momento do parabéns e do corte do bolo. A música deve ser energética e conhecida por todos.",
            musicas: ["Parabéns Pra Você (Versão Festiva)", "Happy - Pharrell Williams", "Celebration - Kool & The Gang", "We Are Family - Sister Sledge", "Best Day Of My Life - American Authors"]
        },
        picoFesta: {
            title: "💃🕺 Pico da Festa",
            description: "Horário em que a festa está no auge. Foque em hits dançantes que todo mundo conhece.",
            musicas: ["Dance Monkey - Tones and I", "Blinding Lights - The Weeknd", "Levitating - Dua Lipa", "Shape of You - Ed Sheeran", "Get Lucky - Daft Punk ft. Pharrell Williams"]
        },
        momentoLento: {
            title: "😴 Momento Lento / Balada",
            description: "Para dar uma respirada na pista ou para os casais dançarem. Reduza o ritmo.",
            musicas: ["Perfect - Ed Sheeran", "Thinking Out Loud - Ed Sheeran", "All of Me - John Legend", "Stand By Me - Ben E. King", "At Last - Etta James"]
        },
        encerramento: {
            title: "👋 Encerramento / Despedida",
            description: "Música de despedida, ainda animada, mas que marque o fim do evento.",
            musicas: ["Time of My Life - Bill Medley & Jennifer Warnes", "Good Riddance (Time of Your Life) - Green Day", "See You Again - Wiz Khalifa ft. Charlie Puth", "Don't You (Forget About Me) - Simple Minds", "My Way - Frank Sinatra"]
        }
    }
};

// Roteiro para o Músico - FORMATURA

const festaFormatura = {
    title: "🎓 Festa de Formatura",
    description: "Celebração de uma conquista. O público é jovem e o clima é de euforia e nostalgia.",
    parts: {
        coquetelChegada: {
            title: "🥂 Coquetel de Chegada",
            description: "Música ambiente para os formandos e convidados chegarem, se cumprimentarem e tirarem fotos.",
            musicas: ["The A Team - Ed Sheeran", "Riptide - Vance Joy", "Budapest - George Ezra", "Count on Me - Bruno Mars", "Home - Edward Sharpe & The Magnetic Zeros"]
        },
        entradaFormandos: {
            title: "🎉 Entrada dos Formandos",
            description: "Momento de grande euforia! Música alta e energética para a entrada triunfal.",
            musicas: ["We Are The Champions - Queen", "I Believe I Can Fly - R. Kelly", "Stronger - Kanye West", "Hall of Fame - The Script ft. will.i.am", "Started From the Bottom - Drake"]
        },
        picoFesta: {
            title: "💃🕺 Pico da Festa (Hits da Geração)",
            description: "Toque os maiores sucessos que marcaram a época da faculdade/escola deles.",
            musicas: ["Dynamite - BTS", "Savage Love - Jason Derulo", "Don't Start Now - Dua Lipa", "Watermelon Sugar - Harry Styles", "Blinding Lights - The Weeknd"]
        },
        momentoNostalgia: {
            title: "😢 Momento Nostalgia / Flashback",
            description: "Um bloco com músicas que eram hits no Ensino Médio/Faculdade para relembrar.",
            musicas: ["Hey, Soul Sister - Train", "Viva La Vida - Coldplay", "I'm Yours - Jason Mraz", "Yeah! - Usher ft. Lil Jon", "Party Rock Anthem - LMFAO"]
        },
        ultimaMusica: {
            title: "✨ Última Música / Despedida Épica",
            description: "A música final que vai marcar o fim dessa fase e o início de uma nova.",
            musicas: ["Good Riddance (Time of Your Life) - Green Day", "My Way - Frank Sinatra", "The Nights - Avicii", "We Are Young - Fun. ft. Janelle Monáe", "See You Again - Wiz Khalifa ft. Charlie Puth"]
        }
    }
};

// Roteiro para o Músico - EVENTO CORPORATIVO

const eventoCorporativo = {
    title: "💼 Evento Corporativo",
    description: "Foco em networking e branding. A música é ambiente, elegante e não atrapalha a conversação.",
    parts: {
        recepçãoWelcome: {
            title: "🤝 Recepção / Welcome Drink",
            description: "Música instrumental ou lounge para receber os convidados e facilitar o networking.",
            musicas: ["Fly Me To The Moon - Frank Sinatra", "The Girl From Ipanema - Stan Getz", "Feeling Good - Michael Bublé", "Beyond - Leon Bridges", "Sunny - Boney M."]
        },
        jantarJantar: {
            title: "🍽️ Jantar / Background Music",
            description: "Música estritamente ambiente, volume baixo, para não competir com as conversas à mesa.",
            musicas: ["Watermelon Sugar - Harry Styles (Lofi Version)", "Blinding Lights - The Weeknd (Jazz Cover)", "Shape of You - Ed Sheeran (Piano Instrumental)", "Get Lucky - Daft Punk (Bossa Nova Cover)", "Redbone - Childish Gambino (Lofi Hip Hop)"]
        },
        posJantarNetwork: {
            title: "🥃 Pós-Jantar / Networking Intenso",
            description: "Ainda ambiente, mas pode ser um pouco mais perceptível, criando um clima descontraído.",
            musicas: ["Treasure - Bruno Mars", "Locked Out Of Heaven - Bruno Mars", "Valerie - Mark Ronson ft. Amy Winehouse", "September - Earth, Wind & Fire", "Sir Duke - Stevie Wonder"]
        },
        aberturaPista: {
            title: "💃 Abertura da Pista de Dança",
            description: "Se houver, inicie com clássicos atemporais e dançantes para engajar todos.",
            musicas: ["Billie Jean - Michael Jackson", "Dancing Queen - ABBA", "Uptown Funk - Mark Ronson ft. Bruno Mars", "Twist And Shout - The Beatles", "I Wanna Dance with Somebody - Whitney Houston"]
        },
        encerramento: {
            title: "🎊 Encerramento / Final Elegante",
            description: "Uma música de despedida positiva e inspiradora, encerrando o evento com chave de ouro.",
            musicas: ["My Way - Frank Sinatra", "What a Wonderful World - Louis Armstrong", "Here Comes The Sun - The Beatles", "Beautiful Day - U2", "On Top Of The World - Imagine Dragons"]
        }
    }
};


/*
Para a entrada dos Pais e Padrinhos: Jesus Alegria dos Homens
Para a entrada do Noivo: Clarins de Roma
Anúncio da Noiva: Clarinada da Rainha ou a de Mahler
Entrada da Noiva: Marcha Nupcial de Mendelssohn
Entrada da Dama e Pajem com as alianças: Minueto de Bach em Sol Maior
Benção das Alianças (Católico): Ave Maria de Gounod Música de Louvor (Evangélico): Agnus Dei – Michael W.Smith
Assinaturas: Clair de Lune – Debussy
Cumprimentos dos Padrinhos: Nessum Dorma – Turandot
Saída dos Padrinhos: Con te Partiro – Andrea Bocelli
Saída do Casal: Nona Sinfonia de Beethoven – Ode à Alegria*/

const x = ()=>{
      switch (input) {
                case "cerimonia-civil": return <AgrupamentoOpcoes obj = {cerimoniaCivil}/>
                case "cerimonia-religiosa": return <AgrupamentoOpcoes obj = {cerimoniaCivil}/>
                case "aniversario": return <AgrupamentoOpcoes obj = {festaAniversario}/>
                case "formatura": return <AgrupamentoOpcoes obj = {festaFormatura}/>
                case "corporativo": return <AgrupamentoOpcoes obj = {eventoCorporativo}/>
            }
            
}

const [input, setInput] = useState()

return(
    <div>
        <img className={t10_servicos.xvii} src={pacote01} alt=""/>
        <img className={t10_servicos.xvii} src={pacote02} alt=""/>
        <img className={t10_servicos.xvii} src={pacote03} alt=""/>
        <img className={t10_servicos.xvii} src={footer} alt=""/>
        
        <select onChange={evt => setInput( evt.currentTarget.value )}>
            <option value=""> SASAMENTO</option>
            <option value=""> aniversario</option>
        </select>

        {x()}

        <T09_Footer/>
    </div>
)

}
export default T10_Servicos;

/*
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
