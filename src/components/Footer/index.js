import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Importações de estilos e componentes
// Certifique-se de adicionar os caminhos corretos para os imports abaixo
import {
    Container,
    Image,
    ContainerLeft,
    Title,
    Email,
    ButtonSend,
    ContainerRight,
    ContainerIcons,
    Icon,
} from "./styles";

// Importação das imagens necessárias
import Background from '../../assets/campos.jpg';
import Icon1 from '../../assets/instagram.png';
import Icon2 from '../../assets/whatsapp.png';
import Icon3 from '../../assets/twitter.png';

export default function Footer() {
    // Efeito de layout utilizando GSAP e ScrollTrigger
    useLayoutEffect(() => {
        // Criação de uma timeline do GSAP para animação
        const tl = gsap.timeline({
            paused: true, // Inicia pausado por padrão
        }).to(".ContainerFooter", { x: 0, opacity: 1, duration: 2 }); // Animação para ContainerFooter

        // Configuração do ScrollTrigger para disparar a animação
        ScrollTrigger.create({
            trigger: ".ContainerFooter",
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
        <Container className="ContainerFooter">
            {/* Estrutura do componente Footer */}
            {/* Contém um contêiner com imagem de fundo, seções esquerda e direita */}
            <Image src={Background} alt="background" />
            <ContainerLeft>
                <Title>Quer ficar por dentro das novidades?</Title>
                <Title>Nos mande seu E-mail</Title>
                <Email type="email" placeholder="Email" />
                <ButtonSend type="submit">Enviar</ButtonSend>
            </ContainerLeft>
            <ContainerRight>
                <ContainerIcons>
                    {/* Ícones para redes sociais */}
                    <Icon src={Icon1} alt="icon" />
                    <Icon src={Icon2} alt="icon" />
                    <Icon src={Icon3} alt="icon" />
                </ContainerIcons>
            </ContainerRight>
        </Container>
    );
}
