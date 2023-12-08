import React, {useLayoutEffect} from "react";
import gsap from "gsap"
import { 
    Container,
    ContainerTop,
    ContainerStatistics,
    Title,
    ContainerLeft,
    ImageLeft,
    TextLeft,
    ContainerRight,
    TitleRight,
    LineAndText,
    LineRight,
    SubTextRight,

    ContainerBottom,
    ContainerBottomLeft,
    ContainerBottomRight,
    TitleBottomLeft,
    LineBottom,
    LineBottomAndSubTitle,
    SubTitleBottomLeft,
} from "./styles";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import Chart from "react-apexcharts";

import Estatisticas from '../../assets/estatisticas.jpeg';

export default function Statistics() {

    // Configurações e dados para o gráfico de pizza (pie chart)
    const options = {
        labels: ["Amazônia", "Cerrado", "Caatinga", "Mata Atlântica", "Pantanal"],
        dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
                return `${opts.w.globals.series[opts.seriesIndex]}%`;
            },
        },
        legend: {
            markers: {
                width: "10%", 
                height: "10%",
            },
        },
        responsive: [
            {
                breakpoint: 999,
                options: {
                    chart: {
                        width: "110%",
                        height: "160%"
                    },
                    legend: {
                        position: "bottom",
                        markers:{
                            width: "5%",
                            height: "5%"
                        }
                    },
                },
            },
        ],
    };

    const series = [52, 28.7, 9, 9, 6, 2];

    // Efeitos de animação usando o gsap e ScrollTrigger
    useLayoutEffect(() => {
        const tl = gsap.timeline({
            paused: true, 
        }).to(
            ".ContainerStatistics",
            { opacity: 1, x: 0, duration: 1 }
        );
        ScrollTrigger.create({
            trigger: ".ContainerStatistics",
            start: "top 900px",
            onEnter: () => tl.play(),
            onLeaveBack: () => tl.pause(),
        });
        return () => {
            tl.kill(); 
        };
        }, []);

        // Animação para a seção inferior
        useLayoutEffect(() => {
            const tl = gsap.timeline({
                paused: true, 
            }).to(
                ".ContainerBottom",
                { x: 0, opacity: 1, duration: 1 }
            );
            ScrollTrigger.create({
                trigger: ".ContainerBottom",
                start: "top 900px",
                end: "bottom 960px",
                onEnter: () => tl.play(),
                onLeaveBack: () => tl.pause(),
            });

            return () => {
                tl.kill(); 
            };
            }, []);
            
            // Animação para o título principal
            useLayoutEffect(() => {
                const tl = gsap.timeline({
                    paused: true, 
                }).to(
                    ".Title",
                    { opacity: 1, duration: 2 }
                );
                ScrollTrigger.create({
                    trigger: ".Title",
                    start: "top 900px",
                    onEnter: () => tl.play(),
                    onLeaveBack: () => tl.pause(),
                });
                return () => {
                    tl.kill(); 
                };
                }, []);

    // Retorno do componente com as seções e conteúdo
    return (
        <Container>
            <ContainerTop>
            <Title className="Title">Estatísticas</Title>
            
            <ContainerStatistics className="ContainerStatistics">
                <ContainerLeft>
                    <ImageLeft src={Estatisticas} alt="Estatisticas"/>
                    <TextLeft>Em 2023, na América do Sul, o Brasil lidera em números de focos por queimadas, registrando 160.553 ocorrências</TextLeft>
                </ContainerLeft>

                <ContainerRight>
                    <TitleRight>
                        Focos de <span className="green">Queimadas</span> por <span className="green">País</span> em 2023
                    </TitleRight>
                    <LineAndText>
                        <LineRight/>
                        <SubTextRight>Dados tirados do programa de queimadas do INEP no período: 11/11/23</SubTextRight>
                    </LineAndText>
                </ContainerRight>
            </ContainerStatistics>
            </ContainerTop>

            <ContainerBottom className="ContainerBottom">
                <ContainerBottomLeft>
                    <TitleBottomLeft>Focos de <span className="green">Queimadas</span> por <span className="green">Biomas</span> em 2023</TitleBottomLeft>
                    
                    <LineBottomAndSubTitle>
                        <LineBottom/>
                        <SubTitleBottomLeft>A Amazônia, corresponde com 52.7% dos casos envolvendo queimadas, entre Janeiro e Junho deste ano houve em media 1,45 milhões de hectares atingidos.</SubTitleBottomLeft>
                    </LineBottomAndSubTitle>
                </ContainerBottomLeft>

                <ContainerBottomRight>
                    <Chart options={options} series={series} type="pie" width="100%" height="100%" />
                </ContainerBottomRight>
            </ContainerBottom>
        </Container>
    )
}
