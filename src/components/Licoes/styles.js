import styled from "styled-components";

// Container principal que abriga a estrutura das lições
export const Container = styled.div`
    width: 100%;
    display: flex;
    padding-top: 5%;
`;

// Container para o lado esquerdo que terá o texto das lições
export const ContainerLeft = styled.div`
    width: 60%;
    padding-left: 1%;
    opacity: 0; /* Inicialmente invisível */
    transform: translateX(-500px); /* Movimento para animação */
`;

// Estrutura para cada lição
export const ContainerLicoes = styled.div`
    display: flex;
    padding-top: 5%;
`;

// Título das lições
export const Title = styled.h1`
    font-family: 'Rajdhani', sans-serif;
    font-size: 4vw;
    font-weight: normal;
`;

// Formato do círculo numerado
export const Circle = styled.div`
    display: flex;
    width: 5vw;
    height: 5vw;
    background-color: #578E4D;
    justify-content: center;
    align-items: center;
    border-radius: 700px;
`;

// Número dentro do círculo
export const Number = styled.h1`
    font-size: 2.5vw;
    color: #fff;
`;

// Área do texto de cada lição
export const ContainerText = styled.div`
    width: 75%;
    margin-left: 2%;
    justify-content: center;
    align-items: center;
    display: flex;
`;

// Texto explicativo de cada lição
export const Text = styled.h3`
    font-size: 1.5vw;
    font-weight: normal;
`;

// Container para a imagem associada a cada lição (lado direito)
export const ContainerRight = styled.div`
    width: 40%;
    justify-content: flex-end;
    opacity: 0; /* Inicialmente invisível */
    transform: translateX(500px); /* Movimento para animação */
`;

// Imagem correspondente à lição
export const Image = styled.img`
    width: 100%;
    height: 102%;
    object-fit: cover;
    border-radius: 20px;
`;
