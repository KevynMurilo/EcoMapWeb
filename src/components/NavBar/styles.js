import styled from "styled-components";

// Container principal que envolve a barra de navegação
export const Container = styled.div`
    display: flex;
    position: fixed;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
    width: 90vw;
    height: 3vw;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    z-index: 999;
    border-radius: 40px;
    border: 1px solid #000;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
`;

// Área à esquerda do container com o logo
export const ContainerLeft = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

// Logo
export const Logo = styled.img`
    width: 4.5vw;
    padding-left: 10%;
`;

// Nome do logo
export const LogoName = styled.h1`
    color: #000;
    font-size: 2vw;

    @media (max-width: 768px) {
        font-size: 5vw;
    }
`;

// Área à direita do container com a lista de itens
export const ContainerRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

// Lista de itens de navegação
export const Lista = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-right: 20%;
    display: flex;

    @media (max-width: 768px) {
        margin-right: 15%;
    }
`;

// Itens da lista de navegação
export const Items = styled.li`
    display: inline-block;
    margin-left: 5rem;
    font-size: 1.2vw;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }

    @media (max-width: 768px) {
        font-size: 2vw;
        margin-right: 15%;
        margin-left: 0;
    }
`;
