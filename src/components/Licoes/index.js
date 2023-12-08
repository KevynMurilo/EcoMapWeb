import React, {useLayoutEffect} from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { 
    Container,
    ContainerLeft,
    ContainerLicoes,
    Title,
    Circle,
    Number,
    ContainerText,
    Text,
    ContainerRight,
    Image
} from "./styles";

import Bombeiros from '../../assets/bombeiros.jpg';

export default function Licoes(){

    // Efeito de animação para a seção esquerda
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const animation = gsap.to(".ContainerLeftLicao", {
            duration: 1.5,
            x: 0,
            opacity: 1,
            paused: true, 
        });
    
        ScrollTrigger.create({
            trigger: ".ContainerLeftLicao",
            start: "top 900px",
            onEnter: () => animation.play(), 
            onLeaveBack: () => animation.pause(), 
        });
    
        return () => {
            animation.kill(); 
        };
        }, []);

    
         // Efeito de animação para a seção direita
        useLayoutEffect(() => {
            const animation = gsap.to(".ContainerRightLicao", {
                duration: 1.5,
                x: 0,
                opacity: 1,
                paused: true,
            });
        
            ScrollTrigger.create({
                trigger: ".ContainerRightLicao",
                start: "top 900px",
                onEnter: () => animation.play(), 
                onLeaveBack: () => animation.pause(), 
            });
        
            return () => {
                gsap.killTweensOf(".ContainerRightLicao");
            };
        }, []);

    return(
        <Container className="Container">

            {/* Seção Esquerda */}
            <ContainerLeft className="ContainerLeftLicao">
                    <Title>
                    Três lições da natureza para um futuro melhor
                    </Title>

                     {/* Cada lição */}
                    <ContainerLicoes>
                        <Circle>
                            <Number>
                                1
                            </Number>
                        </Circle>
                        <ContainerText>
                            <Text>Harmonia: A natureza nos ensina sobre a interconexão e equilíbrio entre todos os elementos do nosso planeta.</Text> 
                        </ContainerText>
                    </ContainerLicoes>

                    <ContainerLicoes>
                        <Circle>
                            <Number>
                                2
                            </Number>
                        </Circle>
                        <ContainerText>
                            <Text>Adaptação: A capacidade da natureza de se ajustar e evoluir nos lembra da importância de ser flexível e resiliente diante das mudanças.</Text> 
                        </ContainerText>
                    </ContainerLicoes>

                    <ContainerLicoes>
                        <Circle>
                            <Number>
                                3
                            </Number>
                        </Circle>
                        <ContainerText>
                            <Text>Futuro Sustentável: Ao aprender com a natureza, podemos moldar um futuro onde a preservação do meio ambiente é a chave para a prosperidade global.</Text> 
                        </ContainerText>
                    </ContainerLicoes>
            </ContainerLeft>

            {/* Seção Direita */}
            <ContainerRight className="ContainerRightLicao">
                <Image src={Bombeiros} alt="Bombeiros"/>
            </ContainerRight>
        </Container>
    )
}