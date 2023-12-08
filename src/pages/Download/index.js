import React from "react";

// Importação dos estilos e componentes necessários
import { 
    Container,
    ContainerLeft,
    Title,
    SubTitle,
    Button,
    ContainerRight,
    Circle,
    Images
} from "./styles"; // Importação dos estilos do componente

import NavBar from "../../components/NavBar"; // Importação do componente NavBar

import Image1 from '../../assets/tela(1).png'; // Importação da imagem

// Componente responsável pela página de Download
export default function Download() {

    const handleDownloadClick = () => {
        window.location.href = "https://www.figma.com/file/bS7tM6BpbuBjM4kVwuoQoO/App_EcoMap?type=design&node-id=0%3A1&mode=design&t=LGCzDJDlsy1H1A1B-1";
    };

    return (
        <Container>
            {/* Barra de navegação */}
            <NavBar shouldAnimate={false} />

            {/* Parte esquerda da seção de Download */}
            <ContainerLeft>
                {/* Título principal */}
                <Title>
                    Monitoramento <span style={{ color: "#5B8D52" }}>ágil</span> de queimadas para{" "}
                    <span style={{ color: "#5B8D52" }}>preservação ambiental.</span>
                </Title>
                
                {/* Subtítulo */}
                <SubTitle>
                    O aplicativo de monitoramento de queimadas ambientais é uma ferramenta inovadora projetada para oferecer insights valiosos e em tempo real sobre incêndios florestais e queimadas em diversas regiões. Com uma interface intuitiva e funcionalidades avançadas, esse aplicativo tem como objetivo fornecer informações precisas e detalhadas para auxiliar na prevenção, detecção e controle desses eventos danosos ao meio ambiente.
                </SubTitle>
                
                {/* Botão de download */}
                <Button onClick={handleDownloadClick}>Download</Button>
            </ContainerLeft>

            {/* Parte direita da seção de Download */}
            <ContainerRight>
                {/* Círculo com a imagem */}
                <Circle>
                    <Images src={Image1} alt="image" />
                </Circle>
            </ContainerRight>
        </Container>
    );
}
