import styled from "styled-components";

// Container principal com margem inferior de 25%
export const Container = styled.div`
    margin-bottom: 25%;
`;

// ContainerTop: container flexível para a seção superior
export const ContainerTop = styled.div`
    display: flex;
    height: 40vw; /* Altura relativa à viewport */
    justify-content: space-around;
    align-items: center;
`;

// ContainerLeft: estilo para o lado esquerdo da seção superior
export const ContainerLeft = styled.div`
    width: 40%;
    margin-right: 10%;
    max-height: 100%;
    opacity: 0;
    transform: translateX(-500px); /* Inicia fora da tela para animação */
`;

// Hello: estilização para a saudação
export const Hello = styled.h3`
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.5vw; /* Tamanho de fonte relativo à viewport */
    font-weight: normal;
`;

// Title: título principal estilizado
export const Title = styled.h1`
    font-family: 'Rajdhani', sans-serif;
    font-size: 4vw; /* Tamanho de fonte relativo à viewport */
    font-weight: normal;
`;

// BackgroundGreen: estilo para o fundo verde com texto e imagem
export const BackgroundGreen = styled.div`
    background-color: #5B8D52;
    width: 50vw; /* Largura relativa à viewport */
    height: 10vw; /* Altura relativa à viewport */
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

// Image: imagem no fundo verde
export const Image = styled.img`
    width: 6vw; /* Largura relativa à viewport */
    padding-left: 7%;
`;

// TextGreen: texto no fundo verde
export const TextGreen = styled.h1`
    color: #FFF;
    max-width: 90%;
    font-size: 1.2vw; /* Tamanho de fonte relativo à viewport */
`;

// Estilos para o lado direito da seção superior
export const ContainerRight = styled.div`
    width: 40%;
    justify-content: center;
    align-items: center;
    max-height: 100%;
    opacity: 0;
    transform: translateX(500px); /* Inicia fora da tela para animação */
`;

// TextRigh: texto no lado direito
export const TextRigh = styled.h3`
    font-size: 1.5vw; /* Tamanho de fonte relativo à viewport */
    font-weight: normal;
    text-align: justify;
    margin-top: 1%;
`;

// ImageRight: imagem no lado direito
export const ImageRight = styled.img`
    margin-top: 9%;
    width: 40vw; /* Largura relativa à viewport */
    height: 22vw; /* Altura relativa à viewport */
    object-fit: cover;
    border-radius: 20px;
`;

// ContainerBottom: container para a seção inferior
export const ContainerBottom = styled.div`
    margin-top: -10%;
    height: 35vw; /* Altura relativa à viewport */
    background-color: #F4EEE6;
    justify-content: center;
    align-items: center;
    display: flex;
`;

// Item: estilo para os itens na seção inferior
export const Item = styled.div`
    justify-content: center;
    align-items: center;
    width: 20%;
    padding: 1.5%;
    margin-top: 37.5%;
`;

// ItemImage: imagem para os itens
export const ItemImage = styled.img`
    width: 20vw; /* Largura relativa à viewport */
    height: 20vw; /* Altura relativa à viewport */
    object-fit: cover;
    border-radius: 20px;
`;

// ItemTitle: título para os itens
export const ItemTitle = styled.h1`
    font-size: 3vw; /* Tamanho de fonte relativo à viewport */
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Rajdhani', sans-serif;
    font-weight: normal;
`;

// ItemDescription: descrição para os itens
export const ItemDescription = styled.p`
    font-size: 1.2vw; /* Tamanho de fonte relativo à viewport */
    text-align: center;
    padding-top: 5%;
`;

// AreaBtn: área do botão para os itens
export const AreaBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 50%;
    margin: 10% auto;
`;

// IconBtn: ícone do botão
export const IconBtn = styled.img`
    width: 3vw; /* Largura relativa à viewport */
`;

// IconText: texto ao lado do ícone
export const IconText = styled.h1`
    font-size: 1.2vw; /* Tamanho de fonte relativo à viewport */
    font-weight: 600;
`;
