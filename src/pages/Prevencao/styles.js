import styled from "styled-components";

// Estilização do container principal da página
export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

// Estilização da imagem de "voltar" posicionada no canto superior esquerdo
export const ImageBack = styled.img`
    position: absolute;
    top: 3%;
    left: 1%;
    z-index: 2;
    cursor: pointer;
`;

// Estilização da imagem principal da página
export const Image = styled.img`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    object-fit: cover;
    z-index: -1;
`;

// Estilização do container verde semitransparente sobre a imagem
export const ContainerGreen = styled.div`
    background-color: #5B8D52;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
    z-index: 1;
    position: absolute;
    top: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

// Estilização do título da página
export const Title = styled.h1`
    font-family: 'Rajdhani', sans-serif;
    font-size: 4vw;
    color: #fff;
    opacity: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;

// Estilização do texto explicativo da página
export const Text = styled.p`
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 2vw;
    margin-left: 2%;
    margin-right: 2%;
    text-align: justify;
`;
