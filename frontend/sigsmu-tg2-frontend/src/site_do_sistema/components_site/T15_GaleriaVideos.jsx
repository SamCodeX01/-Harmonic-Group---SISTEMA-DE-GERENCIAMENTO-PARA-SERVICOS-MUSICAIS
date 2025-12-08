// components/T15_GaleriaVideos.jsx
import React, { useState } from 'react';
import t15GaleriaVideosCss from './t15_galeriaVideos.module.css';

const T15_GaleriaVideos = () => {
  // Array com 16 vídeos do YouTube (IDs reais do YouTube

/*
Como pegar o ID do YouTube:
URL do YouTube: https://www.youtube.com/watch?v=ABC123xyz
ID do vídeo: ABC123xyz (parte depois do v=)
*/

  const videos = [
    {
      id: 1,
    //   youtubeId: 'dQw4w9WgXcQ',
      youtubeId: 'jfriAJTJclY',
      titulo: 'Casamento Harmônico',
      descricao: 'Cerimônia de casamento com música ao vivo',
      categoria: 'Casamento',
      duracao: '3:45',
      data: '2024-01-15'
    },
    {
      id: 2,
      youtubeId: 'y2vRKozazds',
      titulo: 'Evento Corporativo',
      descricao: 'Performance em evento empresarial',
      categoria: 'Corporativo',
      duracao: '4:20',
      data: '2024-02-10'
    },
    {
      id: 3,
      youtubeId: '1QK6iETRwew',
      titulo: 'Festa de Aniversário',
      descricao: 'Celebração com nossa banda completa',
      categoria: 'Festa',
      duracao: '5:15',
      data: '2024-03-05'
    },
    {
      id: 4,
      youtubeId: 'smWLTNhMJJI',
      titulo: 'Cerimônia Elegante',
      descricao: 'Música clássica para cerimônia especial',
      categoria: 'Cerimônia',
      duracao: '2:50',
      data: '2024-01-25'
    },
    {
      id: 5,
      youtubeId: 'HZOpu8dEz9I',
      titulo: 'Casamento ao Pôr do Sol',
      descricao: 'Momentos especiais com música suave',
      categoria: 'Casamento',
      duracao: '4:10',
      data: '2024-02-18'
    },
    {
      id: 6,
      youtubeId: 'RA9rZ2G1n-I',
      titulo: 'Lançamento de Produto',
      descricao: 'Show em evento corporativo',
      categoria: 'Corporativo',
      duracao: '6:30',
      data: '2024-03-12'
    },
    {
      id: 7,
      youtubeId: '-ZWN5bnIgWw',
      titulo: 'Festa de Formatura',
      descricao: 'Celebração com música animada',
      categoria: 'Festa',
      duracao: '3:55',
      data: '2024-01-30'
    },
    {
      id: 8,
      youtubeId: 'tClbUs5OHDs',
      titulo: 'Cerimônia Religiosa',
      descricao: 'Música sacra em cerimônia especial',
      categoria: 'Cerimônia',
      duracao: '4:40',
      data: '2024-02-22'
    },
    {
      id: 9,
      youtubeId: '7cS2feuLbyI',
      titulo: 'Casamento na Praia',
      descricao: 'Som acústico em ambiente natural',
      categoria: 'Casamento',
      duracao: '3:20',
      data: '2024-03-08'
    },
    {
      id: 10,
      youtubeId: 'gWjuvdExusM',
      titulo: 'Conferência Anual',
      descricao: 'Música de abertura para evento',
      categoria: 'Corporativo',
      duracao: '2:45',
      data: '2024-01-20'
    },
    {
      id: 11,
      youtubeId: 'FbUI8m-OvI8',
      titulo: 'Festa Infantil',
      descricao: 'Músicas temáticas para crianças',
      categoria: 'Festa',
      duracao: '4:55',
      data: '2024-02-14'
    },
    {
      id: 12,
      youtubeId: 'KndbBVPLHls',
      titulo: 'Batizado Especial',
      descricao: 'Cerimônia emocionante com música',
      categoria: 'Cerimônia',
      duracao: '3:10',
      data: '2024-03-18'
    },
    {
      id: 13,
      youtubeId: '4FhVe93Kjvc',
      titulo: 'Casamento no Campo',
      descricao: 'Ambiente rústico com música ao vivo',
      categoria: 'Casamento',
      duracao: '5:05',
      data: '2024-01-28'
    },
    {
      id: 14,
      youtubeId: '_s0sWdmnCLw',
      titulo: 'Workshop Empresarial',
      descricao: 'Música ambiente para networking',
      categoria: 'Corporativo',
      duracao: '3:35',
      data: '2024-02-28'
    },
    {
      id: 15,
      youtubeId: 'yVwXPeYcd3E',
      titulo: 'Festa Temática',
      descricao: 'Show com repertório especial',
      categoria: 'Festa',
      duracao: '4:25',
      data: '2024-03-22'
    },
    {
      id: 16,
      youtubeId: 'n991QaNmEbA',
      titulo: 'Cerimônia de Renovação',
      descricao: 'Momentos especiais em cerimônia',
      categoria: 'Cerimônia',
      duracao: '3:50',
      data: '2024-01-10'
    }
  ];

  const categorias = ['Todos', 'Casamento', 'Corporativo', 'Festa', 'Cerimônia'];

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');
  const [videoSelecionado, setVideoSelecionado] = useState(null);

  const videosFiltrados = categoriaSelecionada === 'Todos' 
    ? videos 
    : videos.filter(video => video.categoria === categoriaSelecionada);

  const handleVideoClick = (video) => {
    setVideoSelecionado(video);
  };

  const handleFecharModal = () => {
    setVideoSelecionado(null);
  };

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  return (
    <div className={t15GaleriaVideosCss.galeriaVideosContainer}>
      {/* Hero Section */}
      <div className={t15GaleriaVideosCss.heroSection}>
        <div className={t15GaleriaVideosCss.heroContent}>
          <h1 className={t15GaleriaVideosCss.heroTitle}>Galeria de Vídeos</h1>
          <p className={t15GaleriaVideosCss.heroSubtitle}>
            Momentos especiais registrados em nossos eventos musicais
          </p>
        </div>
      </div>

      <div className={t15GaleriaVideosCss.contentWrapper}>
        {/* Filtros por Categoria */}
        <div className={t15GaleriaVideosCss.filtrosContainer}>
          <h2 className={t15GaleriaVideosCss.filtrosTitulo}>Filtrar por Categoria</h2>
          <div className={t15GaleriaVideosCss.filtrosGrid}>
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className={`${t15GaleriaVideosCss.filtroBotao} ${
                  categoriaSelecionada === categoria ? t15GaleriaVideosCss.filtroBotaoAtivo : ''
                }`}
                onClick={() => setCategoriaSelecionada(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Vídeos */}
        <div className={t15GaleriaVideosCss.videosGrid}>
          {videosFiltrados.map((video) => (
            <div 
              key={video.id} 
              className={t15GaleriaVideosCss.videoCard}
              onClick={() => handleVideoClick(video)}
            >
              <div className={t15GaleriaVideosCss.videoThumbnail}>
                {/* Thumbnail do YouTube */}
                <img 
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.titulo}
                  className={t15GaleriaVideosCss.thumbnailImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={t15GaleriaVideosCss.thumbnailPlaceholder}>
                  <div className={t15GaleriaVideosCss.playIcon}>▶</div>
                  <span className={t15GaleriaVideosCss.placeholderText}>Assistir Vídeo</span>
                </div>
                
                {/* Overlay com informações */}
                <div className={t15GaleriaVideosCss.videoOverlay}>
                  <div className={t15GaleriaVideosCss.videoInfo}>
                    <span className={t15GaleriaVideosCss.videoDuracao}>{video.duracao}</span>
                    <span className={t15GaleriaVideosCss.videoCategoria}>{video.categoria}</span>
                  </div>
                  <div className={t15GaleriaVideosCss.playButton}>
                    ▶
                  </div>
                </div>
              </div>
              
              <div className={t15GaleriaVideosCss.videoInfoCard}>
                <h3 className={t15GaleriaVideosCss.videoTitulo}>{video.titulo}</h3>
                <p className={t15GaleriaVideosCss.videoDescricao}>{video.descricao}</p>
                <div className={t15GaleriaVideosCss.videoMeta}>
                  <span className={t15GaleriaVideosCss.videoData}>{formatarData(video.data)}</span>
                  <span className={t15GaleriaVideosCss.videoId}>ID: {video.youtubeId}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há vídeos */}
        {videosFiltrados.length === 0 && (
          <div className={t15GaleriaVideosCss.semVideos}>
            <div className={t15GaleriaVideosCss.semVideosIcon}>📹</div>
            <h3>Nenhum vídeo encontrado</h3>
            <p>Tente selecionar outra categoria</p>
          </div>
        )}
      </div>

      {/* Modal do Vídeo */}
      {videoSelecionado && (
        <div className={t15GaleriaVideosCss.modalOverlay} onClick={handleFecharModal}>
          <div className={t15GaleriaVideosCss.modalContainer} onClick={(e) => e.stopPropagation()}>
            <div className={t15GaleriaVideosCss.modalHeader}>
              <h3 className={t15GaleriaVideosCss.modalTitulo}>{videoSelecionado.titulo}</h3>
              <button className={t15GaleriaVideosCss.modalFechar} onClick={handleFecharModal}>
                ✕
              </button>
            </div>
            
            <div className={t15GaleriaVideosCss.modalContent}>
              {/* Player do YouTube */}
              <div className={t15GaleriaVideosCss.videoPlayer}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoSelecionado.youtubeId}?autoplay=1&rel=0`}
                  title={videoSelecionado.titulo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={t15GaleriaVideosCss.youtubeIframe}
                ></iframe>
              </div>
              
              <div className={t15GaleriaVideosCss.modalInfo}>
                <div className={t15GaleriaVideosCss.modalInfoGrid}>
                  <div className={t15GaleriaVideosCss.modalInfoItem}>
                    <span className={t15GaleriaVideosCss.modalInfoLabel}>Categoria:</span>
                    <span className={t15GaleriaVideosCss.modalInfoValue}>{videoSelecionado.categoria}</span>
                  </div>
                  <div className={t15GaleriaVideosCss.modalInfoItem}>
                    <span className={t15GaleriaVideosCss.modalInfoLabel}>Data:</span>
                    <span className={t15GaleriaVideosCss.modalInfoValue}>{formatarData(videoSelecionado.data)}</span>
                  </div>
                  <div className={t15GaleriaVideosCss.modalInfoItem}>
                    <span className={t15GaleriaVideosCss.modalInfoLabel}>Duração:</span>
                    <span className={t15GaleriaVideosCss.modalInfoValue}>{videoSelecionado.duracao}</span>
                  </div>
                  <div className={t15GaleriaVideosCss.modalInfoItem}>
                    <span className={t15GaleriaVideosCss.modalInfoLabel}>ID do YouTube:</span>
                    <span className={t15GaleriaVideosCss.modalInfoValue}>{videoSelecionado.youtubeId}</span>
                  </div>
                </div>
                
                <div className={t15GaleriaVideosCss.modalDescricao}>
                  <h4 className={t15GaleriaVideosCss.modalDescricaoTitulo}>Descrição</h4>
                  <p className={t15GaleriaVideosCss.modalDescricaoTexto}>{videoSelecionado.descricao}</p>
                </div>
                
                <div className={t15GaleriaVideosCss.modalAcoes}>
                  <a 
                    href={`https://www.youtube.com/watch?v=${videoSelecionado.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={t15GaleriaVideosCss.botaoYouTube}
                  >
                    🔗 Abrir no YouTube
                  </a>
                  <button 
                    className={t15GaleriaVideosCss.botaoFechar}
                    onClick={handleFecharModal}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default T15_GaleriaVideos;