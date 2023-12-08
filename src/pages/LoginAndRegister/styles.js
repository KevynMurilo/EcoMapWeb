import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const ContainerLogo = styled.div`
    display: flex;
    position: fixed;
    top: 3%;
    transition: right 0.5s ease, left 0.5s ease;
    right: ${props => (props.registering === 'true' ? '2%' : 'auto')};
    left: ${props => (props.registering === 'true' ? 'auto' : '2%')};

    @media (max-width: 768px) {
        left: 2%;


    }
`;


export const DivLogo = styled.div`
    display: flex;
    background: linear-gradient(#05404D, #245F49);
    border-radius: 5px;
    width: 30%;
    height: 5vw;
    order: ${props => (props.registering === 'true' ? '2' : '0')};

    @media (max-width: 768px) {
        width: 8vw;
        height: 15vw;
        order: 0;
    }
    
`;

export const TitleLogo = styled.h1`
    background: linear-gradient(#05404D, #245F49);
    background-clip: text;
    -webkit-background-clip: text; 
    color: transparent;
    font-weight: bold;
    font-size: 1.6vw;

    @media (max-width: 768px) {
        font-size: 5vw;
    }
`;

export const ContainerTitleAndDescription = styled.div`
    margin-left: 1vw;
    justify-content: center;
    align-items: center;
`;


export const DescriptionTitle = styled.p`
    display: flex;
    font-size: 0.8vw;

    @media (max-width: 768px) {
        font-size: 3vw;
        width: 50%;
    }
    
`;

export const ContainerLeft = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: transform 0.5s ease;
    transform: translateX(${props => (props.registering === 'true' ? '100%' : '0')});

    @media (max-width: 768px) {
        width: 100%;
        transition: none;
        transform: translateX(0);
    }
`;

export const TitleWelcome = styled.h1`
    font-size: 6vw;
    color: #296C50;

    @media (max-width: 768px) {
        font-size: 13vw;
    }
`;

export const Instruction = styled.p`
    font-size: 1vw;
    color: #909090;

    @media (max-width: 768px) {
        font-size: 2.5vw;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`;

export const Input = styled.input`
    width: 50%;
    height: 7vh;
    border-radius: 10px;
    padding-left: 2%;
    padding-right: 2%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-width: 0;
    margin-top: 2%;
    font-size: 1vw;

    @media (max-width: 768px) {
        width: 80%;
        font-size: 4vw;
    }
`;

export const ContainerCheckAndForgot= styled.div`
    display: flex;
    margin-top: 5%;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    width: 50%;

    @media (max-width: 768px) {
        width: 80%;
        margin-top: 8%;
    }
`;

export const CheckboxContainer = styled.div`
    display: flex;
    border-radius: 4px;
`;

export const CheckboxInput = styled.input`
    margin: 0;
    width: 1vw;

    @media (max-width: 768px) {
        width: 5vw;
    }
`;

export const CheckboxLabel = styled.label`
    margin-left: 5px;
    flex-grow: 1; 
    text-align: right; 
    font-size: 0.8vw;

    @media (max-width: 768px) {
        font-size: 3vw;
    }
`;

export const ContainerForgotPassword = styled.div`
    display: flex;
`;

export const ForgotPasswordLink = styled.a`
    text-decoration: underline;
    color: #000;
    font-weight: 500;
    cursor: pointer;
    font-size: 0.8vw;

    @media (max-width: 768px) {
        font-size: 3vw;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    margin-top: 5%;

    @media (max-width: 768px) {
        width: 80%;
        justify-content: space-between;
        margin-right: 5%;
        margin-top: 8%;
    }
`;

export const Button = styled.button`
    display: flex;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    width: 10vw;
    height: 3vw;
    border-radius: 10px;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    font-size: 1vw;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
    }

    @media (max-width: 768px) {
        width: 25vw;
        height: 10vw;
        font-size: 4vw;
    }
`;

export const BackgroundRight = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    z-index: -1;
    
`;

export const ContainerRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50%;
    transition: transform 0.5s ease;
    transform: translateX(${props => (props.registering === 'true' ? '-100%' : '0')});
    box-shadow: ${props => (props.registering === 'true' ? '10px 0px 10px rgba(0, 0, 0, 0.5)' : '-10px 0px 10px rgba(0, 0, 0, 0.5)')};

    @media (max-width: 768px) {
        display: none;
        transition: none;
    }
`;

export const LogoRight = styled.div`
    justify-content: center;
    align-items: center;
    z-index: 999;
    position: fixed;
    pointer-events: none;
`;

export const TitleLogoRight = styled.h1`
    color: #FFF;
    font-size: 3vw;
    font-weight: bold;
    margin-top: 10px;
`;

export const LogoIcon = styled.img`
    width: 30vw;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 1); 
`;