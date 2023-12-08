import React from "react";
import { 
    Container,
    ImageBack,
    Image,
    ContainerGreen,
    Title,
    Text
} from "./styles"; // Importação dos estilos definidos para esta página
import { useNavigate } from "react-router-dom";

import Back from '../../assets/icons8-voltar-100.png'; // Ícone de "voltar" para retornar à página inicial
import ImageReflorestamento from '../../assets/reflorestamento.png'; // Imagem representativa de reflorestamento

export default function Reflorestamento(){
    const navigate = useNavigate();

    // Função para redirecionar para a página inicial ao clicar no ícone de "voltar"
    const handleClickHome = () => {
        navigate('/');
    };

    return(
        <Container>
            {/* Ícone de "voltar" para retornar à página inicial */}
            <ImageBack onClick={handleClickHome} src={Back} alt="voltar"/>

            {/* Imagem representativa de reflorestamento */}
            <Image src={ImageReflorestamento} alt="Prevencao"/>

            {/* Container verde semitransparente para o conteúdo */}
            <ContainerGreen>
                {/* Título da seção */}
                <Title>Reflorestamento e Recuperação</Title>

                {/* Texto explicativo sobre o reflorestamento */}
                <Text>
                    Nossa dedicação ao reflorestamento é uma resposta ousada à devastação causada por queimadas. Vai além do simples replantio de árvores; é um compromisso profundo com a renovação completa dos ecossistemas. Utilizando pesquisas inovadoras, tecnologias de ponta e parcerias colaborativas com comunidades locais, lideramos projetos ambiciosos que não apenas restauram paisagens impactadas, mas também aceleram a regeneração natural. Explore esta seção para se envolver em narrativas visuais envolventes e detalhes técnicos aprofundados, testemunhando a transformação de áreas outrora degradadas em ecossistemas vibrantes e resilientes.
                </Text>
            </ContainerGreen>
        </Container>
    )
}
