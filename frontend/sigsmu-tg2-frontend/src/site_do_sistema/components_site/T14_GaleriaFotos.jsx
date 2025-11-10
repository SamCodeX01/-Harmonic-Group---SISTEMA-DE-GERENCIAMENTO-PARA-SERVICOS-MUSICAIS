// components/Galeria.jsx
import React from 'react';
import galeriaCss from './t14_galeriaFotos.module.css';

// Importação das imagens - CAMINHO CORRIGIDO
const importarImagens = () => {
  const imagens = {};
  for (let i = 1; i <= 16; i++) {
    const numero = String(i).padStart(2, '0');
    imagens[`img_${numero}`] = `/imagens/galeria/img_${numero}.jpg`;
  }
  return imagens;
};

const imagensImportadas = importarImagens();

const Galeria = () => {
  // Array com 16 imagens - AGORA COM IMAGENS REAIS
  const imagens = Array.from({ length: 16 }, (_, index) => {
    const id = index + 1;
    const numero = String(id).padStart(2, '0');
    
    return {
      id: id,
      src: imagensImportadas[`img_${numero}`],
      alt: `Imagem ${id} da galeria Harmonic Group - ${getCategoria(index)}`,
      titulo: `Evento ${id}`,
      categoria: getCategoria(index),
      descricao: getDescricaoEvento(index)
    };
  });

  function getCategoria(index) {
    const categorias = ['Casamento', 'Evento Corporativo', 'Festa', 'Cerimônia'];
    return categorias[index % 4];
  }

  function getDescricaoEvento(index) {
    const descricoes = [
      'Momento especial capturado durante a cerimônia',
      'Performance musical em evento corporativo',
      'Festa animada com nossa banda completa',
      'Cerimônia emocionante com música ao vivo'
    ];
    return descricoes[index % 4];
  }

  const categorias = ['Todos', 'Casamento', 'Evento Corporativo', 'Festa', 'Cerimônia'];

  const [categoriaSelecionada, setCategoriaSelecionada] = React.useState('Todos');
  const [imagemExpandida, setImagemExpandida] = React.useState(null);

  const imagensFiltradas = categoriaSelecionada === 'Todos' 
    ? imagens 
    : imagens.filter(img => img.categoria === categoriaSelecionada);

  const handleImagemClick = (imagem) => {
    setImagemExpandida(imagem);
  };

  const handleFecharModal = () => {
    setImagemExpandida(null);
  };

  // Função para debug - verifica se as imagens estão carregando
  const verificarImagens = () => {
    console.log('Caminhos das imagens:');
    imagens.forEach(img => {
      console.log(`${img.id}: ${img.src}`);
    });
  };

  // Executa a verificação quando o componente monta
  React.useEffect(() => {
    verificarImagens();
  }, []);

  return (
    <div className={galeriaCss.galeriaContainer}>
      {/* Hero Section */}
      <div className={galeriaCss.heroSection}>
        <div className={galeriaCss.heroContent}>
          <h1 className={galeriaCss.heroTitle}>Nossa Galeria</h1>
          <p className={galeriaCss.heroSubtitle}>
            Momentos especiais capturados em nossos eventos musicais
          </p>
        </div>
      </div>

      <div className={galeriaCss.contentWrapper}>
        {/* Filtros por Categoria */}
        <div className={galeriaCss.filtrosContainer}>
          <h2 className={galeriaCss.filtrosTitulo}>Filtrar por Categoria</h2>
          <div className={galeriaCss.filtrosGrid}>
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className={`${galeriaCss.filtroBotao} ${
                  categoriaSelecionada === categoria ? galeriaCss.filtroBotaoAtivo : ''
                }`}
                onClick={() => setCategoriaSelecionada(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Imagens */}
        <div className={galeriaCss.galeriaGrid}>
          {imagensFiltradas.map((imagem) => (
            <div 
              key={imagem.id} 
              className={galeriaCss.galeriaItem}
              onClick={() => handleImagemClick(imagem)}
            >
              <div className={galeriaCss.imagemWrapper}>
                {/* IMAGEM REAL - substitui o placeholder */}
                <img 
                  src={imagem.src} 
                  alt={imagem.alt}
                  className={galeriaCss.imagemReal}
                  onError={(e) => {
                    console.log(`Erro ao carregar imagem: ${imagem.src}`);
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextSibling;
                    if (placeholder) {
                      placeholder.style.display = 'flex';
                    }
                  }}
                  onLoad={(e) => {
                    console.log(`Imagem carregada: ${imagem.src}`);
                    e.target.style.display = 'block';
                    const placeholder = e.target.nextSibling;
                    if (placeholder) {
                      placeholder.style.display = 'none';
                    }
                  }}
                />
                {/* Placeholder de fallback */}
                <div className={galeriaCss.imagemPlaceholder}>
                  <span className={galeriaCss.imagemTexto}>
                    img_{String(imagem.id).padStart(2, '0')}
                    <br />
                    <small>(não encontrada)</small>
                  </span>
                </div>
                
                <div className={galeriaCss.imagemOverlay}>
                  <div className={galeriaCss.imagemInfo}>
                    <h3 className={galeriaCss.imagemTitulo}>{imagem.titulo}</h3>
                    <span className={galeriaCss.imagemCategoria}>{imagem.categoria}</span>
                  </div>
                  <div className={galeriaCss.imagemIcone}>🔍</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há imagens */}
        {imagensFiltradas.length === 0 && (
          <div className={galeriaCss.semImagens}>
            <h3>Nenhuma imagem encontrada</h3>
            <p>Tente selecionar outra categoria</p>
          </div>
        )}
      </div>

      {/* Modal de Imagem Expandida */}
      {imagemExpandida && (
        <div className={galeriaCss.modalOverlay} onClick={handleFecharModal}>
          <div className={galeriaCss.modalContainer} onClick={(e) => e.stopPropagation()}>
            <div className={galeriaCss.modalHeader}>
              <h3 className={galeriaCss.modalTitulo}>{imagemExpandida.titulo}</h3>
              <button className={galeriaCss.modalFechar} onClick={handleFecharModal}>
                ✕
              </button>
            </div>
            <div className={galeriaCss.modalContent}>
              <div className={galeriaCss.modalImagemContainer}>
                <img 
                  src={imagemExpandida.src} 
                  alt={imagemExpandida.alt}
                  className={galeriaCss.modalImagemReal}
                  onError={(e) => {
                    console.log(`Erro no modal: ${imagemExpandida.src}`);
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextSibling;
                    if (placeholder) {
                      placeholder.style.display = 'flex';
                    }
                  }}
                  onLoad={(e) => {
                    e.target.style.display = 'block';
                    const placeholder = e.target.nextSibling;
                    if (placeholder) {
                      placeholder.style.display = 'none';
                    }
                  }}
                />
                <div className={galeriaCss.modalImagemPlaceholder}>
                  <span className={galeriaCss.modalImagemTexto}>
                    {imagemExpandida.src}
                    <br />
                    <small>Imagem não encontrada</small>
                  </span>
                </div>
              </div>
              <div className={galeriaCss.modalInfo}>
                <p className={galeriaCss.modalCategoria}>
                  <strong>Categoria:</strong> {imagemExpandida.categoria}
                </p>
                <p className={galeriaCss.modalDescricao}>
                  {imagemExpandida.descricao}
                </p>
                <p className={galeriaCss.modalNomeArquivo}>
                  <strong>Arquivo:</strong> {imagemExpandida.src.split('/').pop()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;