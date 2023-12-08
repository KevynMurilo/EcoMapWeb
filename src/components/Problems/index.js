import React, {useLayoutEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Title, TitleImage, ImageContainer, StyledSlider } from "./styles";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap"

// Importando imagens
import ImageDesmatamento from '../../assets/desmatamento.jpg';
import ImageGasefeitoEstufa from '../../assets/gasEfeitoEstufa.jpg';
import ImageAumentoTemperatura from '../../assets/aumentotemperatura.jpeg';
import ImageAmeacavidaselvagem from '../../assets/ameacavidaselvagem.jpg'; 
import ImageImpactoEconomico from '../../assets/impactoEconomico.jpg';
import ImageDescolamentoDeComunidades from '../../assets/deslocamentoDeComunidades.jpeg';
import ImagePrejuizoAgricultura from '../../assets/prejuizoAgricultura.jpg';
import ImageRegeneracaoNatural from '../../assets/regeneracaoNatural.jpg';

// Array de itens para o carousel
const carouselItems = [
    { id: 1, src: ImageDesmatamento, title: "Destruição de ecossistemas" },
    { id: 2, src: ImageGasefeitoEstufa, title: "Emissões de Gases Poluentes" },
    { id: 3, src: ImageAmeacavidaselvagem, title: "Ameaça à vida selvagem" },
    { id: 4, src: ImageAumentoTemperatura, title: "Aumento de Temperatura" },
    { id: 5, src: ImageImpactoEconomico, title: "Impacto econômico" },
    { id: 6, src: ImageDescolamentoDeComunidades, title: "Deslocamento de comunidades" },
    { id: 7, src: ImagePrejuizoAgricultura, title: "Prejuízo para a agricultura" },
    { id: 8, src: ImageRegeneracaoNatural, title: "Regeneração natural dificultada" },

];

// Componente de cada item do carousel
const CarouselItem = ({ item }) => {

// Efeito de scroll do GSAP ao carregar cada item do carousel
    useLayoutEffect(() => {
        const tl = gsap.timeline({
            paused: true, 
        }).to(
            ".Container",
            { y: 0, opacity: 1, duration: 2 }
        );
        ScrollTrigger.create({
            trigger: ".Container",
            start: "top 900px",
            end: "bottom 960px",
            onEnter: () => tl.play(),
            onLeaveBack: () => tl.pause(),
        });

        return () => {
            tl.kill(); 
        };
        }, []);

    return (
        <div className="item">
        <ImageContainer>
            <img src={item.src} alt={item.title}/>
        </ImageContainer>
        <TitleImage>{item.title}</TitleImage>
        </div>
    );
};

const Problems = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Configurações do slider/carousel
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: true, 
        swipeToSlide: true,
        afterChange: (index) => setCurrentSlide(index),
        initialSlide: currentSlide,
    };

    return (
        <Container className="Container">
        <Title>Principais problemas</Title>

        {/* Componente do Slider */}
        <StyledSlider {...sliderSettings}>
            {carouselItems.map((item) => (
            <CarouselItem key={item.id} item={item} />
            ))}
        </StyledSlider>
        </Container>
    );
};

export default Problems;
