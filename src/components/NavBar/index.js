import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    Container,
    ContainerLeft,
    ContainerRight,
    Logo,
    LogoName,
    Lista,
    Items,
} from "./styles";

import { useNavigate } from "react-router-dom";
import IconLogo from '../../assets/iconteste.png';

export default function NavBar({ shouldAnimate }) {
    const containerRef = useRef(null);

    useEffect(() => {
        // Executa a animação se shouldAnimate for verdadeiro
        if (shouldAnimate) {
            gsap.registerPlugin(ScrollTrigger);

            // Cria uma timeline para a animação da barra de navegação
            const tl = gsap.timeline({
                paused: true,
                defaults: { duration: 6 },
            });

            // Animação para mover e exibir a barra de navegação ao entrar na tela
            tl.fromTo(containerRef.current, { y: -550, opacity: 0 }, { y: 0, opacity: 1 });

            // Configuração do ScrollTrigger para controlar a animação
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 150px",
                end: "bottom 160px",
                onEnter: () => tl.play(), // Toca a animação ao entrar na visão
                onLeaveBack: () => tl.pause(), // Pausa a animação ao sair da visão
            });

            return () => {
                tl.kill(); // Remove a animação quando o componente é desmontado
            };
        }
    }, [shouldAnimate]);

    const navigate = useNavigate();

    // Funções de clique para navegação
    const handleClickHome = () => {
        navigate('/');
    };

    const handleClickDownload = () => {
        navigate('/Download');
    };

    const handleClickDoacao = () => {
        navigate('/Doacao');
    };

    const handleClickQueimadas = () => {
        navigate('/InpeMap');
    };

    return (
        <Container ref={containerRef} className="ContainerNavBar">
            <ContainerLeft>
                <Logo src={IconLogo} alt="logo"/>
                <LogoName>EcoMap</LogoName>
            </ContainerLeft>
            <ContainerRight>
                <Lista>
                    <Items onClick={handleClickHome}>Início</Items>
                    <Items onClick={handleClickDownload}>Download</Items>
                    <Items onClick={handleClickDoacao}>Doação</Items>
                    <Items onClick={handleClickQueimadas}>Queimadas</Items>
                </Lista>
            </ContainerRight>
        </Container>
    )
}
