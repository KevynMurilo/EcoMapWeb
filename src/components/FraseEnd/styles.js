import styled from "styled-components";

// Estilos para o componente FraseEnd

// Container principal para FraseEnd
export const Container = styled.div`
    width: 100%;
    height: 40vw; /* Altura relativa à viewport */
    justify-content: center;
    align-items: center;
    display: flex;
    opacity: 0;
    transform: translateX(-2200px); /* Inicia fora da tela para animação */
`;

// ContainerYellow: Contêiner com cor de fundo amarelo
export const ContainerYellow = styled.div`
    width: 90%;
    height: 15vw; /* Altura relativa à viewport */
    background-color: #ECDD5E;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50px;
`;

// Text: Estilo para o texto dentro do ContainerYellow
export const Text = styled.h1`
    font-family: 'Rajdhani', sans-serif;
    font-size: 4vw; /* Tamanho de fonte relativo à viewport */
    font-weight: normal;
`;
