import styled from "styled-components";

// Definição de estilos utilizando styled-components

// Container principal que centraliza e organiza os elementos
export const Container = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 10%;
`;

// Área superior do container, onde começam as estatísticas
export const ContainerTop = styled.div`
    align-items: center;
    height: 50vw;
    padding-top: 5%;
    display: flex;
    flex-direction: column;
`;

// Área das estatísticas, com dois elementos lado a lado
export const ContainerStatistics = styled.div`
    display: flex;
    margin-top: 5%;
    justify-content: space-between;
    width: 95%;
    opacity: 0;
    transform: translateX(-500px); /* Inicialmente, a estatística está fora da tela, será animada para entrar */
`;

// Título principal da seção de estatísticas
export const Title = styled.h1`
    font-family: 'Rajdhani', sans-serif;
    font-size: 4vw;
    font-weight: normal;
    opacity: 0; /* Inicialmente invisível, será animado para aparecer */
`;

// Lado esquerdo das estatísticas
export const ContainerLeft = styled.div`
    width: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

// Imagem do lado esquerdo das estatísticas
export const ImageLeft = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;

// Texto descritivo do lado esquerdo das estatísticas
export const TextLeft = styled.p`
    font-weight: 400;
    width: 100%;
    text-align: center;
    font-size: 1.2vw;
    margin: 2%;
`;

// Lado direito das estatísticas
export const ContainerRight = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// Título no lado direito das estatísticas
export const TitleRight = styled.h1`
    font-family: 'Rajdhani', sans-serif;
    width: 70%;
    font-size: 3.5vw;
    text-align: center;
    font-weight: bold;
    margin-bottom: 2%;
    
    span.green {
        color: #276C1B; /* Define a cor verde para algumas palavras no título */
    }
`;

// Linha e texto que acompanham o título no lado direito das estatísticas
export const LineAndText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-top: 18%;
`;

// Linha vertical no lado direito das estatísticas
export const LineRight = styled.div`
    width: 8px;
    height: 7vw;
    background-color: #000;
`;

// Texto abaixo da linha no lado direito das estatísticas
export const SubTextRight = styled.p`
    font-size: 1.5vw;
    font-weight: normal;
    margin-left: 2%;
`;

// Área inferior do container, onde continuam as estatísticas
export const ContainerBottom = styled.div`
    display: flex;
    justify-content: space-evenly;
    opacity: 0;
    transform: translateX(500px); /* Inicialmente fora da tela, será animado para entrar */
`;

// Lado esquerdo da área inferior das estatísticas
export const ContainerBottomLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

// Título no lado esquerdo da área inferior das estatísticas
export const TitleBottomLeft = styled.h1`
    font-family: 'Rajdhani', sans-serif;
    font-size: 3.5vw;
    font-weight: bold;
    width: 80%;
    
    span.green {
        color: #276C1B; /* Define a cor verde para algumas palavras no título */
    }
`;

// Linha e subtítulo abaixo do título no lado esquerdo da área inferior das estatísticas
export const LineBottomAndSubTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 18%;
`;

// Linha vertical no lado esquerdo da área inferior das estatísticas
export const LineBottom = styled.div`
    width: 8px;
    height: 7vw;
    background-color: #000;
`;

// Subtítulo abaixo da linha no lado esquerdo da área inferior das estatísticas
export const SubTitleBottomLeft = styled.p`
    font-size: 1.5vw;
    font-weight: normal;
    margin-left: 2%;
`;

// Lado direito da área inferior das estatísticas (onde está o gráfico)
export const ContainerBottomRight = styled.div`
    width: 35%;
    justify-content: center;
`;
