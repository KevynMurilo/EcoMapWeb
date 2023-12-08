import styled, { keyframes } from 'styled-components';

// Definição da animação "float" utilizando keyframes
const float = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

// Container principal da página
export const Container = styled.div`
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    width: 100vw;
    height: 100vh;
`;

// Lado esquerdo do layout
export const ContainerLeft = styled.div`
    width: 45%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

// Título da seção
export const Title = styled.h1`
    font-size: 2.6vw;
    font-weight: bold;
`;

// Subtítulo da seção
export const SubTitle = styled.h3`
    font-size: 1vw;
    font-weight: 400;
    text-align: justify;
    margin-top: 2%;
`;

// Botão de download
export const Button = styled.button`
    margin-top: 5%;
    width: 10vw;
    height: 3vw;
    background-color: #5B8D52;
    color: #fff;
    font-weight: bold;
    font-size: 1vw;
    border-radius: 100px;
    border-width: 0;
    cursor: pointer; 
    transition: all 0.3s ease; 

    &:hover {
        background-color: #4a7b47; 
        transform: scale(1.05); 
    }

    &:focus {
        outline: none; 
    }
`;

// Lado direito do layout
export const ContainerRight = styled.div`
    width: 45%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
`;

// Círculo para a imagem
export const Circle = styled.div`
    width: 24vw;
    height: 24vw;
    border-radius: 50%;
    background-color: #ECECEC;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7); 

    animation: ${float} 3s ease-in-out infinite; 
`;

// Imagem
export const Images = styled.img`
    width: 16vw;
`;
