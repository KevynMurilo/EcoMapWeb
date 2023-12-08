import styled from 'styled-components';
import Slider from 'react-slick';

// Estilos dos elementos usando styled-components

export const Container = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    transform: translateY(500px); /* Inicialmente fora do campo de visão */
    opacity: 0; /* Inicialmente invisível */
`;

export const Title = styled.h2`
    font-family: 'Rajdhani', sans-serif;
    font-size: 4vw;
    font-weight: normal;
    margin-bottom: 20px; 
`;

export const TitleImage = styled.h3`
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.8vw;
    font-weight: normal;
    text-align: center;
    margin-right: 3.5%;

    @media (max-width: 768px) {
        width: 22vw;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    margin-bottom: 5px;
    cursor: grab;

    img {
        width: 95%;
        height: 30vw;
        object-fit: cover;
        display: block;
        border-radius: 8px;

        @media (max-width: 768px) {
            width: 22vw;
        }
    }
`;

export const StyledSlider = styled(Slider)`
    width: 99%;
    margin: 0 auto;
`;
