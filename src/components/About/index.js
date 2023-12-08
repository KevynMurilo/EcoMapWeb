import React, {useLayoutEffect, useRef, useContext} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { 
    Container, 
    ContainerTop,
    ContainerLeft,
    Hello,
    Title,
    BackgroundGreen,
    Image,
    TextGreen,
    ContainerRight,
    TextRigh,
    ImageRight,
    ContainerBottom,
    Item,
    ItemImage,
    ItemTitle,
    ItemDescription,
    AreaBtn,
    IconBtn,
    IconText
} from "./styles";
import { useNavigate } from "react-router-dom";

// Importa o contexto de autenticação
import { AuthContext } from "../../contexts/auth";

import Ambiental from '../../assets/icons8-cuidado-com-o-meio-ambiente-100.png';
import Family from '../../assets/familia.jpg';

import ImagePrevencao from '../../assets/prevenção.jpg';
import ImagemReflorestamento from '../../assets/reflorestamento.png';
import ImageEducacao from '../../assets/pessoas.jpg';
import ImageComunidade from '../../assets/apoioComunidade.jpeg';

import Play from '../../assets/play.png';


export default function About(){
    // Declaração de ref para elementos HTML e animações
    const el = useRef();

    // Efeitos de animação utilizando o GSAP e o ScrollTrigger
    useLayoutEffect(() => {
        // Registra o plugin ScrollTrigger no GSAP
        gsap.registerPlugin(ScrollTrigger);
    
        const animation = gsap.to(".ContainerLeft", {
            duration: 1.5,
            x: 0,
            opacity: 1,
            paused: true, 
        });
    
        ScrollTrigger.create({
            trigger: ".ContainerLeft",
            start: "top 900px",
            onEnter: () => animation.play(), 
            onLeaveBack: () => animation.pause(), 
        });
    
        return () => {
            // Limpeza da animação quando o componente é desmontado
            animation.kill(); 
        };
        }, []);
    

        useLayoutEffect(() => {
            const animation = gsap.to(".ContainerRight", {
                duration: 1.5,
                x: 0,
                opacity: 1,
                paused: true, // Pause the animation by default
            });
        
            ScrollTrigger.create({
                trigger: ".ContainerRight",
                start: "top 900px",
                onEnter: () => animation.play(), // Play the animation when the trigger enters the viewport
                onLeaveBack: () => animation.pause(), // Pause the animation when the trigger leaves the viewport
            });
        
            return () => {
                // Limpeza da animação quando o componente é desmontado
                gsap.killTweensOf(".ContainerRight");
            };
        }, []);

        useLayoutEffect(() => {
            const tl = gsap.timeline({
                paused: true, 
            }).fromTo(
                "#Item-1",
                { opacity: 0, y: 160 },
                { opacity: 1, y: 0, duration: 1 }
            )
            .fromTo(
                "#Item-2",
                { opacity: 0, y: 160 },
                { opacity: 1, y: 0, duration: 1 }
            )
            .fromTo(
                "#Item-3",
                { opacity: 0, y: 160 },
                { opacity: 1, y: 0, duration: 1 }
            )
            .fromTo(
                "#Item-4",
                { opacity: 0, y: 160 },
                { opacity: 1, y: 0, duration: 1 }
            );
            ScrollTrigger.create({
                trigger: "#Item-1",
                start: "top 900px",
                onEnter: () => tl.play(),
                onLeaveBack: () => tl.pause(),
            });
            return () => {
                tl.kill(); 
            };
            }, []);
        


    // Funções para lidar com cliques nos botões, redirecionando para diferentes rotas
    const navigate = useNavigate();

    const handleClickPrevencao = () => {
        navigate('/Prevencao');
    };

    const handleClickReflorestamento = () => {
        navigate('/Reflorestamento ');
    };

    const handleClickEducacao = () => {
        navigate('/Educacao ');
    };

    const handleClickComunidade = () => {
        navigate('/Comunidade ');
    };

    // Obtém os dados do contexto de autenticação
    const { user } = useContext(AuthContext);

    return(
        <Container>

            <ContainerTop className="ContainerTop">
                <ContainerLeft className="ContainerLeft">
                    <Hello>Olá {user ? user.name : 'Visitante'}</Hello>
                    <Title>Bem-vindo ao EcoMap, sua plataforma para combater e prevenir as queimadas e preservar a natureza.</Title>
                    <BackgroundGreen>
                        <Image src={Ambiental} alt="vegetais"/>
                        <TextGreen>Promovendo agroecologia e preservação para prevenir incêndios florestais.</TextGreen>
                    </BackgroundGreen>
                </ContainerLeft>

                <ContainerRight className="ContainerRight">
                    <TextRigh>Unidos na missão de prevenir incêndios florestais e promover a agroecologia, preservação ambiental e o equilíbrio ecológico. Estamos construindo um futuro mais sustentável, onde a natureza e a agricultura coexistem em perfeita harmonia, garantindo um planeta saudável para as gerações futuras.</TextRigh>
                    <ImageRight src={Family} alt="familia"/>
                </ContainerRight>
                </ContainerTop>

                <ContainerBottom>
                    <Item className="Item" id="Item-1" ref={el}>
                        <ItemImage src={ImagePrevencao} alt="Agroecologia"/>
                        <ItemTitle>Prevenção de Queimadas</ItemTitle>
                        <ItemDescription>Práticas agrícolas evitam queimadas e protegem a biodiversidade. Descubra nosso papel na segurança ambiental.</ItemDescription>

                        <AreaBtn onClick={handleClickPrevencao}>
                            <IconBtn src={Play} alt="buttonplay"/>
                            <IconText>Leia mais</IconText>
                        </AreaBtn>
                    </Item>

                    <Item className="Item" id="Item-2"  ref={el}>
                        <ItemImage src={ImagemReflorestamento} alt="Agroecologia"/>
                        <ItemTitle>Reflorestamento e Recuperação</ItemTitle>
                        <ItemDescription>Compromisso integral com a revitalização pós-queimadas. Descubra como dedicadamente restauramos ecossistemas e habitats.</ItemDescription>

                        <AreaBtn onClick={handleClickReflorestamento}>
                            <IconBtn src={Play} alt="buttonplay"/>
                            <IconText>Leia mais</IconText>
                        </AreaBtn>
                    </Item>

                    <Item className="Item" id="Item-3"  ref={el}>
                        <ItemImage src={ImageEducacao} alt="Agroecologia"/>
                        <ItemTitle>Educação e Conscientização</ItemTitle>
                        <ItemDescription>Educação sobre os perigos das queimadas. Explore como o conhecimento combate incêndios florestais.</ItemDescription>

                        <AreaBtn onClick={handleClickEducacao}>
                            <IconBtn src={Play} alt="buttonplay"/>
                            <IconText>Leia mais</IconText>
                        </AreaBtn>
                    </Item>

                    <Item className="Item" id="Item-4"  ref={el}>
                        <ItemImage src={ImageComunidade} alt="Agroecologia"/>
                        <ItemTitle>Apoio a Comunidades</ItemTitle>
                        <ItemDescription>Solidariedade e apoio à reconstrução. Conheça nossa contribuição resiliente contra desafios ambientais.</ItemDescription>

                        <AreaBtn onClick={handleClickComunidade}>
                            <IconBtn src={Play} alt="buttonplay"/>
                            <IconText>Leia mais</IconText>
                        </AreaBtn>
                    </Item>
                </ContainerBottom>
        </Container>
    )
}