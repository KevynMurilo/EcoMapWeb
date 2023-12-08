import styled from "styled-components";

// Estilos para o componente Frase

// Container principal com imagem de fundo e layout
export const Container = styled.div`
    width: 100%;
    height: 25vw; /* Altura relativa à viewport */
    padding-top: 5%;
    position: relative;
    display: flex;
    overflow: hidden;
    opacity: 0;
    transform: translateX(-2200px); /* Inicia fora da tela para animação */
`;

// ContainerColor: Contêiner com cor de fundo para a frase
export const ContainerColor = styled.div`
    background-color: #5B8D52;
    height: 25vw; /* Altura relativa à viewport */
    width: 100%;
    z-index: 99;
    opacity: 0.9;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

// Image: Imagem de fundo para o contêiner da frase
export const Image = styled.img`
    width: 100vw; /* Largura relativa à viewport */
    height: 25vw; /* Altura relativa à viewport */
    z-index: -1;
    position: absolute;
    top: 16.5%; /* Posicionamento vertical */
`;

// Title: Título estilizado para a frase
export const Title = styled.h1`
    font-size: 4vw; /* Tamanho de fonte relativo à viewport */
    text-align: center;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
    font-family: 'Rajdhani', sans-serif;
`;

// Autor: Estilização para o autor da frase
export const Autor = styled.h3`
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
    color: #EEDC5E;
    font-size: 2vw; /* Tamanho de fonte relativo à viewport */
`;
