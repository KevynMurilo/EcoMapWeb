import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Importações de estilos e componentes
// Certifique-se de adicionar os caminhos corretos para os imports abaixo
import {
    Container,
    ContainerColor,
    Image,
    Title,
    Autor
} from "./styles";

// Importação da imagem de fundo necessária
import Background from '../../assets/backfrase.jpg';

export default function Frase() {
    // Efeito de layout utilizando GSAP e ScrollTrigger
    useLayoutEffect(() => {
        // Criação de uma timeline do GSAP para animação
        const tl = gsap.timeline({
            paused: true, // Inicia pausado por padrão
        }).to(".ContainerFraseTop", { x: 0, opacity: 1, duration: 2 }); // Animação para ContainerFraseTop

        // Configuração do ScrollTrigger para disparar a animação
        ScrollTrigger.create({
            trigger: ".ContainerFraseTop",
            start: "top 600px",
            end: "bottom 650px",
            onEnter: () => tl.play(), // Toca a animação ao entrar na visão
            onLeaveBack: () => tl.pause(), // Pausa a animação ao sair da visão
        });

        // Limpeza da animação quando o componente é desmontado
        return () => {
            tl.kill();
        };
    }, []);

    return (
        <Container className="ContainerFraseTop">
            {/* Estrutura do componente Frase */}
            <ContainerColor>
                {/* Contêiner com cor de fundo */}
                <Title>"Na natureza, nada se cria, nada se perde, tudo se transforma."</Title>
                {/* Título da frase */}
                <Autor>Antoine Lavoisier</Autor>
                {/* Autor da frase */}
            </ContainerColor>
            <Image src={Background} alt="Background" />
            {/* Imagem de fundo */}
        </Container>
    );
}
