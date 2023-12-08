import React from "react";
import { 
    Container,
    ImageBack,
    Image,
    ContainerGreen,
    Title,
    Text
} from "./styles";  // Importação dos estilos definidos para a página

import { useNavigate } from "react-router-dom";  // Importação do hook de navegação

import Back from '../../assets/icons8-voltar-100.png';  // Importação da imagem de voltar
import ImagePrevencao from '../../assets/prevenção.jpg';  // Importação da imagem da prevenção

export default function Prevencao(){
    const navigate = useNavigate();  // Inicialização do hook de navegação

    const handleClickHome = () => {
        navigate('/');  // Função que direciona para a página inicial ao clicar na imagem de voltar
    };

    return(
        <Container>
            <ImageBack onClick={handleClickHome} src={Back} alt="voltar"/>  {/* Botão de voltar para a página inicial */}
            <Image src={ImagePrevencao} alt="Prevencao"/>  {/* Imagem da prevenção de queimadas */}
            <ContainerGreen>
                <Title>Prevenção de Queimadas</Title>  {/* Título da página */}
                <Text>
                    {/* Texto explicativo sobre a abordagem para prevenção de queimadas */}
                    Em nossa jornada incansável pela prevenção de queimadas, adotamos uma abordagem holística que transcende a mera produção de alimentos. Comprometemo-nos profundamente com métodos agroecológicos, estabelecendo uma simbiose refinada entre a agricultura e os ecossistemas naturais. Desde a escolha estratégica de culturas resilientes até a implementação de avançadas técnicas de manejo, cada aspecto é meticulosamente planejado para reduzir significativamente o risco de incêndios florestais. Ao explorar esta seção, convidamos você a mergulhar em uma exploração profunda de como nossas práticas inovadoras não apenas protegem o meio ambiente, mas também moldam um futuro onde a agricultura e a natureza coexistem harmoniosamente, promovendo uma coabitação sustentável que transcende as fronteiras convencionais.
                </Text>
            </ContainerGreen>
        </Container>
    )
}
