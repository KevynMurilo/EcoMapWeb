import styled from "styled-components";

// Estilo para o container principal da página
export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

// Estilo para a imagem de voltar
export const ImageBack = styled.img`
    position: absolute;
    top: 3%;
    left: 1%;
    z-index: 2;
    cursor: pointer;
`;

// Estilo para a imagem de fundo da página
export const Image = styled.img`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    object-fit: cover;
    z-index: -1;
`;

// Estilo para o container verde semitransparente com texto
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

// Estilo para o título da seção
export const Title = styled.h1`
    font-family: 'Rajdhani', sans-serif;
    font-size: 4vw;
    color: #fff;
    opacity: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;

// Estilo para o texto explicativo
export const Text = styled.p`
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 2vw;
    margin-left: 2%;
    margin-right: 2%;
    text-align: justify;
`;
