import React, {useLayoutEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { 
    Container,
    Title,
    ContainerItems,
    Items,
    Circle,
    Icon,
    TitleItem,
    TitleSubTitle
} from "./styles";

import Arvore from '../../assets/arvore.png';
import Garden from '../../assets/icons8-garden-100.png';
import Environment from '../../assets/icons8-environment-care-100.png';
import Charity from '../../assets/icons8-charity-64.png';

export default function Soluction(){

    // Utilização do useLayoutEffect para animações baseadas em Scroll
    useLayoutEffect(() => {
        const tl = gsap.timeline({
            paused: true,
        })

        // Animação dos elementos com base em suas classes e propriedades
        .fromTo(
            ".Item-0",
            { opacity: 0, y: 160 },
            { opacity: 1, y: 0, duration: 1 }
        ).fromTo(
            ".Item-1",
            { opacity: 0, y: 160 },
            { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
            ".Item-2",
            { opacity: 0, y: 160 },
            { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
            ".Item-3",
            { opacity: 0, y: 160 },
            { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
            ".Item-4",
            { opacity: 0, y: 160 },
            { opacity: 1, y: 0, duration: 1 }
        );
    
        // Criação do trigger de Scroll para iniciar a animação
        ScrollTrigger.create({
            trigger: ".Item-1",
            start: "top 900px",
            onEnter: () => tl.play(),
            onLeaveBack: () => tl.pause(),
        });
        
        return () => {
            // Limpa a timeline quando o componente é desmontado
            tl.kill(); 
        };
    }, []);

    // Retorno do componente com a estrutura do conteúdo e dos elementos animados
    return(
        <Container>
            <Title className="Item-0">Siga 4 passos fáceis</Title>

            <ContainerItems>
                {/* Elementos a serem animados */}
                <Items className="Item-1">
                    <Circle>
                        <Icon src={Arvore} alt="arvore"/>
                    </Circle>
                    <TitleItem>Reflorestamento e Arborização Urbana.</TitleItem>
                    <TitleSubTitle>Plantamos uma árvore para cada uma cortada, promovendo o reflorestamento e a restauração de ecossistemas vitais.</TitleSubTitle>
                </Items>

                <Items className="Item-2">
                    <Circle>
                        <Icon src={Garden} alt="Garden"/>
                    </Circle>
                    <TitleItem>Cultivo</TitleItem>
                    <TitleItem>Responsável</TitleItem>
                    <TitleSubTitle>Promova métodos agrícolas sustentáveis e preserve a biodiversidade para garantir uma produção alimentar equilibrada.</TitleSubTitle>
                </Items>

                <Items className="Item-3">
                    <Circle>
                        <Icon src={Environment} alt="Environment"/>
                    </Circle>
                <TitleItem>Conscientização</TitleItem>
                <TitleItem>Ambiental</TitleItem>
                <TitleSubTitle>Eduque sobre as queimadas e seus impactos. Inspire a ação através do conhecimento ambiental.</TitleSubTitle>
                </Items>

                <Items className="Item-4">
                    <Circle>
                        <Icon src={Charity} alt="Charity"/>
                    </Circle>
                <TitleItem>Solidariedade</TitleItem>
                <TitleItem>em Ação</TitleItem>
                <TitleSubTitle>Apoie comunidades afetadas por queimadas. Reconstrua não apenas estruturas, mas esperanças.</TitleSubTitle>
                </Items>
                
                
            </ContainerItems>
        </Container>
    )
}