import styled from "styled-components";

// Estilos para o componente Footer

// Container principal com imagem de fundo e layout
export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 31vw; /* Altura relativa à viewport */
    opacity: 0;
    transform: translateX(500px); /* Inicia fora da tela para animação */
`;

// Imagem de fundo para o container
export const Image = styled.img`
    width: 100%;
    height: 31vw; /* Altura relativa à viewport */
    object-fit: cover;
`;

// ContainerLeft: Estilização para a seção esquerda do footer
export const ContainerLeft = styled.div`
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    z-index: 2;
    text-align: left;
    color: #fff;
    padding-left: 3%;
    display: flex;
    flex-direction: column;
    width: 50%;
`;

// Title: Título estilizado para a seção esquerda
export const Title = styled.h1`
    font-family: 'Rajdhani', sans-serif;
    color: #fff;
    font-size: 2.5vw; /* Tamanho de fonte relativo à viewport */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;

// Email: Estilização para o input de e-mail
export const Email = styled.input`
    width: 30vw; /* Largura relativa à viewport */
    height: 3vw; /* Altura relativa à viewport */
    border-radius: 50px;
    padding-left: 3%;
    font-size: 1vw; /* Tamanho de fonte relativo à viewport */
    font-style: italic;
    border-width: 0;
`;

// ButtonSend: Estilização para o botão de enviar
export const ButtonSend = styled.button`
    width: 8vw; /* Largura relativa à viewport */
    height: 3vw; /* Altura relativa à viewport */
    border-radius: 50px;
    background-color: #578E4D;
    color: #fff;
    font-weight: bold;
    font-size: 1.5vw; /* Tamanho de fonte relativo à viewport */
    margin-top: 2%;
    cursor: pointer;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
    border-width: 0;
    transition: all 0.3s ease;

    &:hover {
        background-color: #4a7b47;
        transform: scale(1.05);
    }

    &:focus {
        outline: none;
    }
`;

// ContainerRight: Estilização para a seção direita do footer
export const ContainerRight = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// ContainerIcons: Container para os ícones de redes sociais
export const ContainerIcons = styled.div`
    width: 25%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: 50%;
    left: 70%;
`;

// Icon: Estilização para os ícones de redes sociais
export const Icon = styled.img`
    width: 3vw; /* Largura relativa à viewport */
    margin-left: 15%;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`;
