import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Importações de estilos e componentes
// Certifique-se de adicionar os caminhos corretos para os imports abaixo
import {
    Container,
    ContainerYellow,
    Text
} from "./styles";

export default function FraseEnd() {
    // Efeito de layout utilizando GSAP e ScrollTrigger
    useLayoutEffect(() => {
        // Criação de uma timeline do GSAP para animação
        const tl = gsap.timeline({
            paused: true, // Inicia pausado por padrão
        }).to(".ContainerFraseEnd", { x: 0, opacity: 1, duration: 2 }); // Animação para ContainerFraseEnd

        // Configuração do ScrollTrigger para disparar a animação
        ScrollTrigger.create({
            trigger: ".ContainerFraseEnd",
            start: "top 500px",
            end: "bottom 550px",
            onEnter: () => tl.play(), // Toca a animação ao entrar na visão
            onLeaveBack: () => tl.pause(), // Pausa a animação ao sair da visão
        });

        // Limpeza da animação quando o componente é desmontado
        return () => {
            tl.kill();
        };
    }, []);

    return (
        <Container className="ContainerFraseEnd">
            {/* Estrutura do componente FraseEnd */}
            <ContainerYellow>
                {/* Contêiner com cor de fundo amarelo */}
                <Text>"Juntos, somos guardiões do nosso planeta."</Text>
                {/* Texto da frase */}
            </ContainerYellow>
        </Container>
    );
}
