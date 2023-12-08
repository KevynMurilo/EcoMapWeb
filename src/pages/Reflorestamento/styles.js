import styled from "styled-components";

// Estilo para o container principal da página
export const Container = styled.div`
    width: 100%;
    height: 100vh; // Ocupa toda a altura da viewport
`;

// Ícone de voltar para a página anterior
export const ImageBack = styled.img`
    position: absolute; // Posicionamento absoluto na tela
    top: 3%; // Distância de 3% do topo da tela
    left: 1%; // Distância de 1% da esquerda da tela
    z-index: 2; // Coloca o ícone sobre outros elementos
    cursor: pointer; // Mostra que é clicável
`;

// Imagem principal da página
export const Image = styled.img`
    width: 100%; // Ocupa toda a largura disponível
    height: 100vh; // Ocupa toda a altura da viewport
    position: absolute; // Posicionamento absoluto na tela
    top: 0; // Alinhado ao topo da tela
    object-fit: cover; // Ajusta a imagem para cobrir todo o espaço
    z-index: -1; // Coloca atrás de outros elementos
`;

// Container verde semitransparente para o conteúdo
export const ContainerGreen = styled.div`
    background-color: #5B8D52; // Cor de fundo verde
    z-index: 1; // Coloca sobre a imagem, mas atrás do ícone de voltar
    width: 100vw; // Ocupa toda a largura da viewport
    height: 100vh; // Ocupa toda a altura da viewport
    opacity: 0.8; // Opacidade de 80%
    position: absolute; // Posicionamento absoluto na tela
    top: 0; // Alinhado ao topo da tela
    justify-content: center; // Centraliza o conteúdo na vertical
    align-items: center; // Centraliza o conteúdo na horizontal
    display: flex; // Usa flexbox para organização
    flex-direction: column; // Coloca os itens em coluna
`;

// Título da página
export const Title = styled.h1`
    font-family: 'Rajdhani', sans-serif; // Estilo da fonte
    font-size: 4vw; // Tamanho da fonte responsivo
    color: #fff; // Cor do texto (branco)
    opacity: 1; // Opacidade total
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); // Sombra no texto
`;

// Texto descritivo da página
export const Text = styled.p`
    color: #fff; // Cor do texto (branco)
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // Sombra no texto
    font-size: 2vw; // Tamanho da fonte responsivo
    margin-left: 2%; // Margem esquerda
    margin-right: 2%; // Margem direita
    text-align: justify; // Alinhamento justificado
`;
