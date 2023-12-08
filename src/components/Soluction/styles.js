import styled from "styled-components";

// Estilos estilizados para o componente

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 5%;
    /* Define a estrutura do container, ajusta o padding e a largura */
`;

export const Title = styled.h1`
    font-family: 'Rajdhani', sans-serif;
    font-size: 4vw;
    font-weight: normal;
    opacity: 0;
    /* Estilo para o título com a fonte e o tamanho definidos */
`;

export const ContainerItems = styled.div`
    display: flex;
    margin-top: 5%;
    /* Container para os items com margem superior de 5% */
`;

export const Items = styled.div`
    width: 32%;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease; 
    /* Estilo dos items, com largura definida, alinhamento e efeito de escala no hover */
    &:hover {
        transform: scale(1.1); 
        /* Ao passar o mouse, os items aumentam ligeiramente de tamanho */
    }
`;

export const Circle = styled.div`
    width: 15vw;
    height: 15vw;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
    border-radius: 500px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    display: flex;
    margin-bottom: 5%;
    transition: transform 0.3s ease; 
    /* Define o estilo do círculo, tamanho, sombra, alinhamento e efeito de escala no hover */
    &:hover {
        transform: scale(1.1); 
        /* Ao passar o mouse, o círculo aumenta ligeiramente de tamanho */
    }
`;

export const Icon = styled.img`
    width: 6vw;
    /* Define o estilo do ícone com largura definida */
`;

export const TitleItem = styled.h1`
    font-family: 'Rajdhani', sans-serif;
    font-size: 2vw;
    font-weight: normal;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    /* Define o estilo para o título do item com a fonte, tamanho e alinhamento central */
`;

export const TitleSubTitle = styled.p`
    padding-top: 5%;
    font-size: 1vw;
    text-align: center;
    width: 75%;
    margin: 0 auto;
    /* Define o estilo para o subtítulo com padding, tamanho, alinhamento e largura */
`;
