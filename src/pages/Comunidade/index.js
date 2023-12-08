import React from "react";
import { 
    Container,
    ImageBack,
    Image,
    ContainerGreen,
    Title,
    Text
} from "./styles"; // Importação dos estilos do componente
import { useNavigate } from "react-router-dom";

import Back from '../../assets/icons8-voltar-100.png'; // Importação do ícone de voltar
import ImageComunidade from '../../assets/apoioComunidade.jpeg'; // Importação da imagem da comunidade

export default function Comunidade() {
    const navigate = useNavigate(); // Utilização do hook de navegação

    // Função para voltar à página inicial ao clicar no ícone de voltar
    const handleClickHome = () => {
        navigate('/');
    };

    // Renderização do conteúdo da página
    return (
        <Container>
            <ImageBack onClick={handleClickHome} src={Back} alt="voltar" /> {/* Ícone de voltar */}
            <Image src={ImageComunidade} alt="Comunidade" /> {/* Imagem da comunidade */}
            <ContainerGreen>
                <Title>Apoio a Comunidades</Title> {/* Título */}
                <Text>
                    {/* Texto explicativo sobre o apoio às comunidades impactadas */}
                </Text>
            </ContainerGreen>
        </Container>
    )
}
