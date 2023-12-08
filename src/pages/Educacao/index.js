import React from "react";
import { 
    Container,
    ImageBack,
    Image,
    ContainerGreen,
    Title,
    Text
} from "./styles"; // Importa os estilos específicos para essa página
import { useNavigate } from "react-router-dom"; // Importa o hook para navegação

import ImageEducacao from '../../assets/pessoas.jpg'; // Importa a imagem de fundo da página
import Back from '../../assets/icons8-voltar-100.png'; // Importa a imagem de voltar

export default function Educacao(){
    const navigate = useNavigate(); // Inicializa o hook de navegação

    // Função para voltar à página inicial ao clicar na imagem de voltar
    const handleClickHome = () => {
        navigate('/');
    };

    return(
        <Container>
            {/* Imagem de voltar que, quando clicada, chama a função para voltar à página inicial */}
            <ImageBack onClick={handleClickHome} src={Back} alt="voltar"/>

            {/* Imagem de fundo da página */}
            <Image src={ImageEducacao} alt="Educacao"/>

            {/* Container verde semitransparente com título e texto */}
            <ContainerGreen>
                <Title>Educação e Conscientização</Title>
                <Text>Acreditamos firmemente que o conhecimento é a chave mestra para combater eficazmente os incêndios florestais. Nossa iniciativa educacional transcende a mera disseminação de informações básicas. Oferecemos workshops interativos, materiais educativos envolventes e colaborações estratégicas com instituições acadêmicas. Explore esta seção para mergulhar em nossa abordagem educacional abrangente, compreendendo como capacitamos indivíduos e comunidades não apenas a compreender os perigos das queimadas, mas também a se tornarem agentes ativos na preservação ambiental, promovendo uma transformação duradoura.</Text>
            </ContainerGreen>
        </Container>
    )
}
