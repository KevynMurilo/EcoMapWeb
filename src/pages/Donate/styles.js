import styled from "styled-components";

// Container principal da página
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    overflow: hidden;
`;

// Lado esquerdo do layout
export const ContainerLeft = styled.div`
    width: 40%;
    height: 100vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7); 
`;

// Imagem
export const Image = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
`;

// Lado direito do layout
export const ContainerRight = styled.div`
    width: 70%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
`;

// Subcontainer no lado direito
export const SubContainerRight = styled.div`
    width: 90%;
    height: 75%;
    background-color: #fff;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6); 
`;

// Título
export const Title = styled.h1`
    font-size: 3.5vw;
`;

// Subtítulo
export const SubTitle = styled.h3`
    font-size: 1vw;
    font-weight: 400;
    width: 90%;
`;

// Container para os inputs
export const ContainerInputs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
`;

// Inputs para nome e email
export const NameAndEmail = styled.input`
    width: 23.5vw;
    height: 3vw;
    border-radius: 15px;
    padding-left: 3%;
    font-size: 1vw;
    font-style: italic;
    font-weight: 500;
    margin-top: 5%;
    background-color: #ECECEC;
`;

// Input para valor
export const Amount = styled.input`
    width: 30vw;
    height: 3vw;
    border-radius: 50px;
    padding-left: 3%;
    font-size: 1vw;
    font-style: italic;
`;

// Input para empresa
export const Company = styled.input`
    width: 90%;
    height: 3vw;
    border-radius: 15px;
    padding-left: 3%;
    font-size: 1vw;
    font-style: italic;
    background-color: #ECECEC;
    font-weight: 500;
`;

// Botão de envio
export const ButtonSend = styled.button`
    width: 93%;
    height: 3.4vw;
    border-radius: 15px;
    margin-top: 3%;
    background-color: #5b8d52;
    color: #fff;
    font-weight: bold;
    font-size: 1.5vw;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, transform 0.1s;

    &:hover {
        background-color: #467441;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }

    &:focus {
        outline: none;
    }
`;

// Container para as opções de doação
export const DonationContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1.5%;
`;

// Título para as opções de doação
export const TitleDonation = styled.h1`
    font-size: 1.2vw;
    font-weight: 400;
    width: 90%;
    margin-top: 2%;
`;

// Opção de doação
export const DonationOption = styled.div`
    width: 50px;
    height: 50px;
    margin: 0 1vw;
    border-radius: 50%;
    background-color: ${({ selected }) => (selected ? '#5B8D52' : '#ECECEC')};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    box-shadow: ${({ selected }) => (selected ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none')};
`;

// Valor da doação
export const DonationValue = styled.span`
    font-size: 1.2rem;
    color: ${({ selected }) => (selected ? '#FFF' : '#000')};
`;
