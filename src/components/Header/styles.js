import styled, { keyframes } from "styled-components";
import Slider from "react-slick";

// Definição de animações Keyframes para uso nos estilos
const fadeIn = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(0.5);
    }
    100% {
        transform: scale(1);
    }
`;

const fadeInText = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fallIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const riseUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeInDots = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 49vw;
`;

export const ContainerText = styled.div`
    display: flex;
    width: 100%;
    max-width: 60%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    opacity: 0;
    animation: ${fadeInText} 1s ease-in-out forwards;
    animation-delay: 3s;
    margin-left: 5%;
`;

export const Title = styled.h1`
    font-size: 5vw;
    color: #FFF;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
    text-align: start;
    opacity: 0;
    animation: ${fallIn} 2s ease-in-out forwards;
    animation-delay: 3s;
`;

export const SubTitle = styled.h3`
    font-size: 1.3vw;
    color: #FFF;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
    width: 100%;
    opacity: 0;
    animation: ${riseUp} 1s ease-in-out forwards;
    animation-delay: 4s;
`;

export const ImageBackground = styled.img`
    width: 100%;
    height: 49vw;
    object-fit: cover;
    animation: ${fadeIn} 3s ease-in-out;
`;

export const StyledSlider = styled(Slider)`
    width: 100%;
    height: 49vw;
    position: absolute;
    top: 0;
    overflow: hidden;

    .slick-dots {
        z-index: 10;
        position: absolute;
        top: 40%;
        left: 18%;
        width: 50px;
        height: 50px;
        opacity: 0;  
        animation: ${fadeInDots} 1s ease-in-out forwards;  
        animation-delay: 3s;

        /* Media queries para responsividade */
        @media (max-width: 999px) {
            left: 15%;
        }

        @media (max-width: 550px) {
            left: 12%;
            top: 35%;
        }

        @media (max-width: 440px) {
            left: 8%;
            top: 31%;
        }
    } 

    .slick-dots li button {
        background-color: rgba(255, 255, 255, 0.5);  
        border-radius: 200px;
    }
    .slick-dots li.slick-active button {
        background-color: #ECDD5E; 
    }
`;
